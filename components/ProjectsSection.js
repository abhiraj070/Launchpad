import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, products } from "@/data/products";

// Unified Projects Section: clubs all projects into one cohesive experience
// with two clearly defined, uniform subsections: "Top Projects" and "All Projects".
export default function ProjectsSection() {
  const topProjects = getFeaturedProducts();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-hairline py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Projects
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            CRAFTED WITH PURPOSE.
            <br />
            <span className="text-fg-muted">BUILT FOR SCALE.</span>
          </h2>

          <p className="mt-3 text-base text-fg-muted sm:text-lg">
            A focused collection of full-stack web applications, developer
            tools, and applied AI systems built from zero to deployment.
          </p>
        </div>

        {/* Subsection 1: Top Projects */}
        <div id="top-projects" className="mt-14 scroll-mt-28">
          <SectionHeading
            eyebrow="Selected Work"
            title="Top Projects"
            subtitle="Flagship intelligent systems and high-impact products built for production."
          />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topProjects.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Subtle Section Divider */}
        <div className="my-16 border-t border-hairline" />

        {/* Subsection 2: All Projects */}
        <div id="all-projects" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Complete Ecosystem"
            title="All Projects"
            subtitle="Full archive of polished products, developer tools, and engineering experiments."
          />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
