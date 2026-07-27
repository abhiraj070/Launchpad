import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/StatusBadge";
import ProductArtwork from "@/components/ProductArtwork";

// Hero for an individual project page.
export default function ProjectHero({ project, index = 0 }) {
  return (
    <section className="pt-28 sm:pt-32">
      <Container>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
        >
          <ArrowLeft size={15} />
          All products
        </Link>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wide text-fg-faint">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-fg-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#" size="lg">
                Launch product
                <ExternalLink size={16} />
              </Button>
              <Button href="#" variant="secondary" size="lg">
                View source
              </Button>
            </div>
          </div>

          <div className="flex min-h-[220px] lg:min-h-[260px]">
            <ProductArtwork project={project} index={index} />
          </div>
        </div>
      </Container>
    </section>
  );
}
