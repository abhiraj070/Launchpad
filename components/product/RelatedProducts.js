import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

// Recommend other Launchpad products — same category first, then fill from the
// rest — to reinforce that this is an ecosystem, not a pile of unrelated repos.
export default function RelatedProducts({ current }) {
  const others = products.filter((p) => p.slug !== current.slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  const related = [...sameCategory, ...rest].slice(0, 3);

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
