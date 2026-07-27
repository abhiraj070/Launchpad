import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
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
  const index = projects.findIndex((item) => item.slug === params.slug);
  const project = index >= 0 ? projects[index] : null;

  if (!project) {
    notFound();
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <article className="pb-16">
      <ProjectHero project={project} index={index} />

      <div className="mt-6">
        {sectionTitles.map((title) => (
          <ProjectSection key={title} title={title} />
        ))}
      </div>

      <section className="border-t border-hairline pt-12">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight text-fg">
            Related products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard
                key={item.id}
                project={item}
                index={projects.findIndex((p) => p.id === item.id)}
              />
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
