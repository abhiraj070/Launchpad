import { categories } from "@/data/categories";

// Horizontal pill buttons. No filtering logic yet.
export default function CategoryBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold tracking-tight">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-700"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
