import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { getCategories } from "@/data/products";

// Horizontal category pills, derived from the product data so a new category
// appears automatically. No filtering logic yet — "All" shows active as a
// visual default for the future filtering phase.
export default function CategoryBar() {
  const categories = getCategories();

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
