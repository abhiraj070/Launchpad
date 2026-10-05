"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { getCategories } from "@/data/products";

// Category pills, derived from the data.
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
