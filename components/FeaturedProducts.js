import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

// First screen — the curated products every visitor should discover first.
// One hero-sized card leads, the rest fill beside/below it — a layout that
// stays balanced whether there are three or four featured products.
function featuredSpan(index, total) {
  if (index === 0) return "lg:col-span-2 lg:row-span-2"; // hero
  if (total >= 4 && index === 3) return "lg:col-span-3"; // full-width closer
  return "";
}

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section id="products" className="scroll-mt-28 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Start here"
          title="Featured products"
          subtitle="The most polished, ready-to-use products — the best place to start exploring."
        />
        <div className="mt-8 grid auto-rows-[minmax(210px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              className={featuredSpan(index, featured.length)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
