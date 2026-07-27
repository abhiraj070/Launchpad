import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";

// Vertical timeline grouped by year. Placeholder content only.
export default function Timeline() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="History" title="Timeline" />
        <ol className="mt-8 space-y-8 border-l border-hairline pl-6">
          {timeline.map((entry) => (
            <li key={entry.year} className="relative">
              <span className="absolute -left-[1.6rem] top-1.5 flex h-3 w-3 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent-soft" />
              </span>
              <p className="font-mono text-sm text-fg-faint">{entry.year}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {entry.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-hairline bg-surface px-3 py-1.5 text-sm text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
