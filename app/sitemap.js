import { products } from "@/data/products";
import { siteUrl } from "@/lib/site";

// Sitemap generated from the centralized product data — new products appear
// automatically.
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/project/${product.slug}`,
    changeFrequency: "monthly",
    priority: product.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...productRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}
