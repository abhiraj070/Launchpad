import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { categories } from "@/data/categories";

// Horizontal category pills. No filtering logic yet — "All" is shown active as
// a visual default for the future filtering phase.
export default function CategoryBar() {
  return (
    <section className="py-6">
      <Container>
        <SectionHeading eyebrow="Browse" title="Categories" />
        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((category, index) => (
            <Tag key={category} active={index === 0}>
              {category}
            </Tag>
          ))}
        </div>
      </Container>
    </section>
  );
}
