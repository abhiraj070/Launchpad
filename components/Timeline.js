import { timeline } from "@/data/timeline";

// Vertical timeline grouped by year. Placeholder content only.
export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Timeline</h2>
      <ol className="relative border-l border-neutral-200 pl-6">
        {timeline.map((entry) => (
          <li key={entry.year} className="mb-8 last:mb-0">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-neutral-300 bg-white" />
            <h3 className="text-lg font-semibold">{entry.year}</h3>
            <ul className="mt-2 space-y-1">
              {entry.items.map((item) => (
                <li key={item} className="text-sm text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
