import { products, getCategories } from "@/data/products";

// -----------------------------------------------------------------------------
// Collections — curated groupings derived entirely from product metadata.
// Nothing here is hardcoded per product: change the data and the collections
// change with it. Three lenses:
//   • Collections (computed): Featured, Recently Built
//   • Categories: one per distinct `category`
//   • Themes: one per `tag` shared by 2+ products
// -----------------------------------------------------------------------------

const ACRONYMS = { ai: "AI", api: "API", io: "IO", ui: "UI" };

export function humanizeTag(tag) {
  return tag
    .split("-")
    .map((w) => ACRONYMS[w] || w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function curatedCollections() {
  const list = [];
  const featured = products.filter((p) => p.featured);
  if (featured.length) {
    list.push({
      id: "featured",
      group: "Collections",
      kind: "featured",
      title: "Featured",
      description: "The most polished, ready-to-use products.",
      products: featured,
    });
  }
  const years = products.map((p) => p.year).filter(Boolean);
  if (years.length) {
    const latest = Math.max(...years);
    const recent = products
      .filter((p) => p.year === latest)
      .sort((a, b) => b.id - a.id);
    list.push({
      id: "recent",
      group: "Collections",
      kind: "recent",
      title: "Recently Built",
      description: `Fresh out of the workshop (${latest}).`,
      products: recent,
    });
  }
  return list;
}

function categoryCollections() {
  return getCategories()
    .filter((c) => c !== "All")
    .map((category) => ({
      id: `category:${category}`,
      group: "Categories",
      kind: "category",
      title: category,
      products: products.filter((p) => p.category === category),
    }))
    .filter((c) => c.products.length);
}

function themeCollections() {
  const categoryNames = new Set(getCategories().map((c) => c.toLowerCase()));
  const byTag = new Map();
  products.forEach((product) => {
    (product.tags || []).forEach((tag) => {
      if (!byTag.has(tag)) byTag.set(tag, []);
      byTag.get(tag).push(product);
    });
  });
  return [...byTag.entries()]
    .filter(([tag, items]) => {
      const title = humanizeTag(tag);
      return items.length >= 2 && !categoryNames.has(title.toLowerCase());
    })
    .map(([tag, items]) => ({
      id: `tag:${tag}`,
      group: "Themes",
      kind: "tag",
      title: humanizeTag(tag),
      products: items,
    }))
    .sort((a, b) => b.products.length - a.products.length || a.title.localeCompare(b.title));
}

export function getCollections() {
  return [...curatedCollections(), ...categoryCollections(), ...themeCollections()];
}

// Stable id for a category, used to open the browser straight to a category.
export function categoryCollectionId(category) {
  return `category:${category}`;
}
