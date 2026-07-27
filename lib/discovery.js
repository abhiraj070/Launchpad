import { products, getProductBySlug } from "@/data/products";

// Related products, ranked by relationship strength and de-duplicated:
//   • explicit `relatedProducts` (author's own picks) — always first
//   • shared tags        (similar use cases / themes)   — weighted highest
//   • shared technologies (similar tech)                — medium
//   • same category                                      — light
// A product is never related to itself, and each appears at most once.
const overlap = (a = [], b = []) => {
  const set = new Set(a);
  return b.reduce((n, item) => n + (set.has(item) ? 1 : 0), 0);
};

export function getRelatedProducts(product, limit = 3) {
  const explicit = (product.relatedProducts || [])
    .map(getProductBySlug)
    .filter(Boolean);

  const explicitSlugs = new Set(explicit.map((p) => p.slug));

  const scored = products
    .filter((p) => p.slug !== product.slug && !explicitSlugs.has(p.slug))
    .map((p) => ({
      product: p,
      score:
        overlap(product.tags, p.tags) * 3 +
        overlap(product.technologies, p.technologies) * 2 +
        (p.category === product.category ? 2 : 0),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const ranked = [...explicit, ...scored.map((entry) => entry.product)];

  // Backfill with anything unseen so the section is never sparse.
  if (ranked.length < limit) {
    const seen = new Set([product.slug, ...ranked.map((p) => p.slug)]);
    for (const p of products) {
      if (ranked.length >= limit) break;
      if (!seen.has(p.slug)) ranked.push(p);
    }
  }

  return ranked.slice(0, limit);
}
