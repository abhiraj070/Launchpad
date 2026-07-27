import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";

// Compact hero — the products are the hero, so this stays deliberately short.
// Top padding clears the fixed navbar; the first product row sits just below.
// Counts are derived from the data so the status line is always accurate.
const total = products.length;
const live = products.filter((p) => p.status === "Live").length;
const building = products.filter((p) => p.status === "Building").length;
const experiment = products.filter((p) => p.status === "Experiment").length;

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32">
      <Container>
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Launchpad OS · always shipping
        </div>

        <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          A shelf of things I&rsquo;ve built.{" "}
          <span className="text-fg-muted">Open one.</span>
        </h1>
        <p className="mt-3 max-w-xl text-base text-fg-muted sm:text-lg">
          {total} products across AI, travel, politics, and tooling — each one
          made to solve a real problem. Pick any tile and see what it does.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href="#products" size="lg">
            Explore products
            <ArrowDown size={16} />
          </Button>

          {/* Lightweight status indicators — like an OS status bar */}
          <dl className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              <dt className="sr-only">Live</dt>
              <dd className="text-fg">
                {live} <span className="text-fg-faint">live</span>
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              <dt className="sr-only">Live</dt>
              <dd className="text-fg">
                {experiment} <span className="text-fg-faint">experiment</span>
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-building" />
              <dt className="sr-only">Building</dt>
              <dd className="text-fg">
                {building} <span className="text-fg-faint">building</span>
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-fg-faint" />
              <dt className="sr-only">Total</dt>
              <dd className="text-fg">
                {total} <span className="text-fg-faint">total</span>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
