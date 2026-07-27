"use client";

import { useMemo, useSyncExternalStore } from "react";
import { getProductBySlug } from "@/data/products";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  toggleFavorite,
  addRecentProduct,
  clearWorkspace,
  computeRecommendations,
} from "@/lib/workspace";

// React binding for the workspace layer. Reactive (re-renders on any change,
// including other tabs) and SSR-safe: the server snapshot is empty, so the
// first client render matches and personalized sections simply appear after
// hydration rather than causing a mismatch.
export function useWorkspace() {
  const { favorites: favSlugs, recents: recentSlugs } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return useMemo(() => {
    const favoriteSet = new Set(favSlugs);
    const resolve = (slugs) => slugs.map(getProductBySlug).filter(Boolean);
    return {
      favorites: resolve(favSlugs),
      recents: resolve(recentSlugs),
      recommendations: computeRecommendations(recentSlugs, favSlugs),
      isFavorite: (slug) => favoriteSet.has(slug),
      toggleFavorite,
      addRecentProduct,
      clearWorkspace,
    };
  }, [favSlugs, recentSlugs]);
}
