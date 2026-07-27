// "Behind the Builder" — placeholder subsections only.
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
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Behind the Builder</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {subsections.map((subsection) => (
          <div
            key={subsection.title}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{subsection.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{subsection.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
