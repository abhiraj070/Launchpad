import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

// Placeholder About page.
export const metadata = {
  title: "About — Launchpad",
};

export default function AboutPage() {
  return (
    <section className="pb-16 pt-28 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="About Launchpad"
          subtitle="Placeholder content. This page will describe Launchpad and the person behind it in a later phase."
        />
      </Container>
    </section>
  );
}
