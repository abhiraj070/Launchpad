import { products } from "@/data/products";

// -----------------------------------------------------------------------------
// Command registry
//
// The palette renders and runs generic *commands*, not products. A command is:
//
//   {
//     id       : stable unique string
//     group    : section heading in the palette ("Products", "Actions", …)
//     kind     : discriminator for custom rendering ("product", "action", …)
//     title    : primary label
//     subtitle : secondary label (optional)
//     keywords : extra strings folded into fuzzy search
//     data     : arbitrary payload (e.g. the product) for custom rendering
//     perform  : (ctx) => void  — ctx = { router }
//   }
//
// Commands come from *providers*. Today there is one product provider; adding
// "Visit GitHub", "Launch demo", "Filter by category", "Switch theme", etc. is
// just another provider pushed into buildCommands — no changes to the palette
// or to product logic required.
// -----------------------------------------------------------------------------

// Converts a product into a generic command. Exported so the palette can build
// workspace-driven groups (Favorites, Recently opened) from the same shape.
export function toProductCommand(product) {
  return {
    id: `product:${product.slug}`,
    group: "Products",
    kind: "product",
    title: product.name,
    subtitle: product.tagline,
    keywords: [
      product.category,
      product.status,
      product.tagline,
      product.shortDescription,
    ],
    data: product,
    perform: ({ router }) => router.push(`/project/${product.slug}`),
  };
}

function productCommands() {
  return products.map(toProductCommand);
}

// Ordered list of providers. Future command types slot in here.
const providers = [
  productCommands,
  // e.g. githubCommands, liveDemoCommands, categoryCommands, themeCommands …
];

export function buildCommands() {
  return providers.flatMap((provider) => provider());
}

// Groups commands in provider/declaration order for stable section rendering.
export function groupCommands(commands) {
  const groups = [];
  const index = new Map();
  for (const command of commands) {
    if (!index.has(command.group)) {
      index.set(command.group, groups.length);
      groups.push({ heading: command.group, items: [] });
    }
    groups[index.get(command.group)].items.push(command);
  }
  return groups;
}
