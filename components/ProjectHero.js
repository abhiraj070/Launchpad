import StatusBadge from "@/components/StatusBadge";

// Hero for an individual project page.
export default function ProjectHero({ project }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs uppercase tracking-wide text-neutral-400">
        {project.category}
      </p>
      <div className="mt-2 flex items-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-4 text-lg text-neutral-600">{project.description}</p>
    </section>
  );
}
