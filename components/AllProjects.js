import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

// Second screen — the complete ecosystem. Every project (featured or not) in a
// calmer, uniform grid: more compact than the featured mosaic, same design
// language, nothing hidden.
export default function AllProjects() {
  return (
    <section
      id="all-projects"
      className="scroll-mt-28 border-t border-hairline py-14 sm:py-16"
    >
      <Container>
        <SectionHeading
          eyebrow="The full ecosystem"
          title="The complete workspace"
          subtitle="Everything I've built — polished products, developer tools, and experiments alike."
        />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
