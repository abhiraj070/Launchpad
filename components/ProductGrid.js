import ProductCard from "@/components/ProductCard";
import { projects } from "@/data/projects";

// Masonry-like layout using CSS Grid. Cards are intentionally NOT equal sized —
// varied column/row spans imitate the future layout. Spans only kick in at `lg`
// so the grid stays clean on mobile (1 col) and tablet (2 cols).
const spanPattern = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "lg:row-span-2",
  "",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
];

export default function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Products</h2>
      <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProductCard
            key={project.id}
            project={project}
            className={spanPattern[index % spanPattern.length]}
          />
        ))}
      </div>
    </section>
  );
}
