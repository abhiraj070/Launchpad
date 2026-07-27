import Container from "@/components/ui/Container";

// A generic titled section for the project page. Renders placeholder children
// or a default placeholder line so every section has visible content.
export default function ProjectSection({ title, children }) {
  return (
    <section className="border-t border-hairline py-10">
      <Container className="grid gap-6 md:grid-cols-[220px_1fr]">
        <h2 className="text-xl font-semibold tracking-tight text-fg">{title}</h2>
        <div className="max-w-2xl text-[15px] leading-relaxed text-fg-muted">
          {children || <p>Placeholder content for the {title} section.</p>}
        </div>
      </Container>
    </section>
  );
}
