import Link from "next/link";

// Compact hero: title, subtitle, stats row, and a single CTA.
const stats = [
  { label: "Products", value: "8" },
  { label: "Live", value: "3" },
  { label: "Building", value: "2" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Product Hub</h1>
      <p className="mt-3 text-lg text-neutral-600">
        Building products that solve real problems.
      </p>

      <div className="mt-6 flex flex-wrap gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{stat.value}</span>
            <span className="text-sm text-neutral-500">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="#products"
          className="inline-flex items-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}
