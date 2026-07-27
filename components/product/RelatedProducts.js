import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { getRelatedProducts } from "@/lib/discovery";

// Related products ranked by real relationships — shared tags (use cases),
// shared technologies, same category, and the author's own picks — so the
// ecosystem feels connected rather than random. See lib/discovery.js.
export default function RelatedProducts({ current }) {
  const related = getRelatedProducts(current, 3);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {related.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          index={products.findIndex((p) => p.id === product.id)}
        />
      ))}
    </div>
  );
}
