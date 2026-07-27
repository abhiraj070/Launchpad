// Command shape used by the palette. A command is a generic, runnable unit:
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
// Only product commands exist today; future command kinds (Visit GitHub,
// Switch theme, …) can be added as their own builders alongside this one
// without changing the palette.

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
