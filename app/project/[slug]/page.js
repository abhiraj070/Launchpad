import { notFound } from "next/navigation";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";
import ProductCard from "@/components/ProductCard";
import { projects, getProjectBySlug } from "@/data/projects";

// Pre-render a page for each known project slug.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Section titles rendered in order. Content is placeholder-only this phase.
const sectionTitles = [
  "Problem",
  "Solution",
  "Features",
  "Screenshots",
  "Technology",
  "Challenges",
  "Roadmap",
  "Launch",
];

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <article className="pb-12">
      <ProjectHero project={project} />

      {sectionTitles.map((title) => (
        <ProjectSection key={title} title={title} />
      ))}

      <ProjectSection title="Related Products">
        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} project={item} />
          ))}
        </div>
      </ProjectSection>
    </article>
  );
}
