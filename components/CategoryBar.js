"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { getCategories } from "@/data/products";
import { useCollections } from "@/components/collections/CollectionsContext";
import { categoryCollectionId } from "@/lib/collections";

// Category pills, derived from the data. Selecting one opens the collections
// browser to that category — revealing its products in place, no navigation.
export default function CategoryBar() {
  const categories = getCategories();
  const { openCollections } = useCollections();

  return (
    <section className="py-6">
      <Container>
        <SectionHeading eyebrow="Browse" title="Categories" />
        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((category, index) => (
            <Tag
              key={category}
              active={index === 0}
              onClick={() =>
                openCollections(category === "All" ? null : categoryCollectionId(category))
              }
            >
              {category}
            </Tag>
          ))}
        </div>
      </Container>
    </section>
  );
}
