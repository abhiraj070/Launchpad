import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// Consistent scaffold for every detail-page section: a hairline divider, an
// eyebrow + heading, and content. `accent` colors the eyebrow so each product's
// page carries its own identity while staying on the shared layout. Content
// gently reveals as it scrolls into view (see Reveal for graceful degradation).
export default function DetailSection({
  eyebrow,
  title,
  accent,
  children,
  className = "",
}) {
  return (
    <section className={`border-t border-hairline py-12 sm:py-14 ${className}`}>
      <Container>
        <Reveal>
          {(eyebrow || title) && (
            <SectionHeading eyebrow={eyebrow} title={title} accent={accent} />
          )}
          <div className={eyebrow || title ? "mt-7" : ""}>{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}
