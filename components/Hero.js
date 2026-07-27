import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Compact hero — the products are the hero, so this stays deliberately short.
// Top padding clears the fixed navbar; the first product row sits just below.
const stats = [
  { label: "Products", value: "8" },
  { label: "Live", value: "3" },
  { label: "Building", value: "2" },
];

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32">
      <Container className="animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          An operating system for my products
        </div>

        <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Everything I build, in one place.
        </h1>
        <p className="mt-3 max-w-xl text-base text-fg-muted sm:text-lg">
          Launchpad is the home for my products — discover, explore, and launch
          each one from a single surface.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="#products" size="lg">
            Explore products
            <ArrowDown size={16} />
          </Button>

          <dl className="flex items-center gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-semibold text-fg">{stat.value}</dd>
                <span className="text-sm text-fg-faint">{stat.label}</span>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
