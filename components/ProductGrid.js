import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { projects } from "@/data/projects";

// Organic masonry — cards are intentionally NOT equal sized. Varied col/row
// spans kick in at `lg`; the grid collapses to 2 cols (sm) and 1 col (mobile).
const spanPattern = [
  "lg:col-span-2 lg:row-span-2",
  "lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
];

export default function ProductGrid() {
  return (
    <section id="products" className="scroll-mt-28 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="The Collection"
          title="Products"
          subtitle="Eight products across AI, travel, politics, and tooling — each one solving a real problem."
        />
        <div className="mt-8 grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProductCard
              key={project.id}
              project={project}
              index={index}
              className={spanPattern[index % spanPattern.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
