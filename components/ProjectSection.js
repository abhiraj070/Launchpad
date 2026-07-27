// A generic titled section for the project page. Renders placeholder children
// or a default placeholder line so every section has visible content.
export default function ProjectSection({ title, children }) {
  return (
    <section className="mx-auto max-w-4xl border-t border-neutral-200 px-4 py-8">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 text-sm text-neutral-600">
        {children || <p>Placeholder content for the {title} section.</p>}
      </div>
    </section>
  );
}
