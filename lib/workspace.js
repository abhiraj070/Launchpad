import { products, getProductBySlug } from "@/data/products";

// -----------------------------------------------------------------------------
// Workspace — the single source of truth for all client-side personalization.
//
// NOTHING else in the app touches localStorage. Components read/write through
// this layer (via the useWorkspace hook), so swapping localStorage for a
// backend later means changing only this file.
//
// State is stored as arrays of slugs. Products are resolved on read. A tiny
// pub/sub + stable snapshot powers useSyncExternalStore for reactive UI.
// -----------------------------------------------------------------------------

const FAVORITES_KEY = "launchpad:favorites";
const RECENTS_KEY = "launchpad:recents";
const RECENTS_LIMIT = 8;

const EMPTY = { favorites: [], recents: [] };

let snapshot = EMPTY; // { favorites: string[], recents: string[] } — stable ref
let initialized = false;
const listeners = new Set();

const isBrowser = () => typeof window !== "undefined";

function readKey(key) {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

function writeKey(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode, quota) — degrade silently */
  }
}

function ensureInit() {
  if (initialized || !isBrowser()) return;
  initialized = true;
  snapshot = { favorites: readKey(FAVORITES_KEY), recents: readKey(RECENTS_KEY) };
  // Keep tabs in sync.
  window.addEventListener("storage", (e) => {
    if (e.key === FAVORITES_KEY || e.key === RECENTS_KEY) {
      snapshot = { favorites: readKey(FAVORITES_KEY), recents: readKey(RECENTS_KEY) };
      emit();
    }
  });
}

function emit() {
  listeners.forEach((listener) => listener());
}

function commit(next) {
  snapshot = next;
  writeKey(FAVORITES_KEY, next.favorites);
  writeKey(RECENTS_KEY, next.recents);
  emit();
}

const sameOrder = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const bySlug = (slug) => getProductBySlug(slug);
const resolve = (slugs) => slugs.map(bySlug).filter(Boolean);

// --- React store contract ----------------------------------------------------

export function subscribe(listener) {
  ensureInit();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  ensureInit();
  return snapshot;
}

export function getServerSnapshot() {
  return EMPTY;
}

// --- Favorites ---------------------------------------------------------------

export function getFavorites() {
  ensureInit();
  return resolve(snapshot.favorites);
}

export function isFavorite(slug) {
  ensureInit();
  return snapshot.favorites.includes(slug);
}

export function toggleFavorite(slug) {
  ensureInit();
  const has = snapshot.favorites.includes(slug);
  const favorites = has
    ? snapshot.favorites.filter((s) => s !== slug)
    : [slug, ...snapshot.favorites];
  commit({ ...snapshot, favorites });
}

// --- Recently opened ---------------------------------------------------------

export function getRecentProducts() {
  ensureInit();
  return resolve(snapshot.recents);
}

export function addRecentProduct(slug) {
  ensureInit();
  if (!bySlug(slug)) return;
  const recents = [slug, ...snapshot.recents.filter((s) => s !== slug)].slice(0, RECENTS_LIMIT);
  if (sameOrder(recents, snapshot.recents)) return; // no-op guard
  commit({ ...snapshot, recents });
}

// --- Recommendations ("You may also like") -----------------------------------
// Category-based, no AI: score unseen products by how often their category
// appears among recently opened products, newest recents weighted more.

export function computeRecommendations(recentSlugs, favoriteSlugs, limit = 3) {
  if (!recentSlugs.length) return [];
  const exclude = new Set([...recentSlugs, ...favoriteSlugs]);
  // Weight categories by recency (newest recents count more).
  const weight = {};
  recentSlugs.forEach((slug, i) => {
    const product = bySlug(slug);
    if (!product) return;
    weight[product.category] = (weight[product.category] || 0) + (recentSlugs.length - i);
  });
  // Rank unseen products by category affinity, then fill the rest so
  // "continue exploring" always surfaces something to discover.
  return products
    .filter((p) => !exclude.has(p.slug))
    .sort((a, b) => (weight[b.category] || 0) - (weight[a.category] || 0))
    .slice(0, limit);
}

export function getRecommendations(limit = 3) {
  ensureInit();
  return computeRecommendations(snapshot.recents, snapshot.favorites, limit);
}

// --- Reset -------------------------------------------------------------------

export function clearWorkspace() {
  ensureInit();
  commit({ favorites: [], recents: [] });
}
