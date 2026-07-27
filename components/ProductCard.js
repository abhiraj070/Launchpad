import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

// A single product card: name, description, category, status, and an Open button.
// No hover effects this phase. `className` lets the grid pass span utilities.
export default function ProductCard({ project, className = "" }) {
  return (
    <article
      className={`flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-2 text-sm text-neutral-600">{project.description}</p>
        <p className="mt-3 text-xs uppercase tracking-wide text-neutral-400">
          {project.category}
        </p>
      </div>

      <div className="mt-5">
        <Link
          href={`/project/${project.slug}`}
          className="inline-flex items-center rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-700"
        >
          Open
        </Link>
      </div>
    </article>
  );
}
