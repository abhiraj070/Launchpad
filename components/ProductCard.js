import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import ProductArtwork from "@/components/ProductArtwork";

// The most important element in the system. Solid, layered surface (NOT glass),
// with subtle elevation that lifts on hover. Whole card is a link for a large
// hit target; the Open control is a visual affordance.
//
// Hierarchy: artwork → name → one-line problem → status → open.
// Deliberately omits tech stack / frameworks — those live on the project page.
export default function ProductCard({ project, index = 0, className = "" }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className={
        "group flex flex-col rounded-2xl border border-hairline bg-surface p-3 shadow-raised " +
        "transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-hairline-strong " +
        "hover:bg-surface-hover hover:shadow-elevated " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 " +
        `focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${className}`
      }
    >
      <ProductArtwork project={project} index={index} />

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-fg">{project.title}</h3>
          <span className="text-[11px] font-medium uppercase tracking-wide text-fg-faint">
            {project.category}
          </span>
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <StatusBadge status={project.status} />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-fg-muted transition-colors duration-200 group-hover:text-accent">
            Open
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
