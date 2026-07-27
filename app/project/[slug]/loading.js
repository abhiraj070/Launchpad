import Container from "@/components/ui/Container";

// Lightweight skeleton shown while a product page streams in. Mirrors the hero
// layout so the transition into real content feels like the page settling,
// not a flash. No spinners. The shimmer stops under prefers-reduced-motion.
function Bar({ className = "" }) {
  return <div className={`skeleton rounded-md ${className}`} />;
}

export default function Loading() {
  return (
    <div className="page-enter pb-20">
      <section className="pt-28 sm:pt-32">
        <Container>
          <Bar className="h-4 w-24" />
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <div className="flex gap-3">
                <Bar className="h-7 w-32" />
                <Bar className="h-7 w-20" />
              </div>
              <Bar className="mt-4 h-11 w-64" />
              <Bar className="mt-4 h-5 w-full max-w-md" />
              <Bar className="mt-2 h-5 w-3/4 max-w-sm" />
              <div className="mt-7 flex gap-3">
                <Bar className="h-11 w-40" />
                <Bar className="h-11 w-36" />
              </div>
            </div>
            <Bar className="min-h-[220px] rounded-xl lg:min-h-[260px]" />
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-12 sm:py-14">
        <Container>
          <Bar className="h-3 w-24" />
          <Bar className="mt-4 h-5 w-full max-w-xl" />
          <Bar className="mt-2 h-5 w-2/3 max-w-lg" />
        </Container>
      </section>
    </div>
  );
}
