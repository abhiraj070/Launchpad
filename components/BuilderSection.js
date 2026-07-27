import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

// "Behind the Builder" — intentionally understated. The products lead; this is
// context, not a resume. Placeholder subsections only.
const subsections = [
  {
    title: "Current Focus",
    body: "Placeholder text describing what I'm focused on building right now.",
  },
  {
    title: "Current Tech Stack",
    body: "Placeholder text listing the tools and frameworks I currently use.",
  },
  {
    title: "Building Philosophy",
    body: "Placeholder text about how I approach building products.",
  },
  {
    title: "Current Experiments",
    body: "Placeholder text about experiments I'm actively running.",
  },
  {
    title: "Setup",
    body: "Placeholder text describing my hardware and workspace setup.",
  },
];

export default function BuilderSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="Context" title="Behind the Builder" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subsections.map((subsection) => (
            <div
              key={subsection.title}
              className="rounded-2xl border border-hairline bg-surface p-5 shadow-soft"
            >
              <h3 className="text-sm font-semibold text-fg">{subsection.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {subsection.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
