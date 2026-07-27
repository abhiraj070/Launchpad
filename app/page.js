import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryBar from "@/components/CategoryBar";
import Timeline from "@/components/Timeline";
import BuilderSection from "@/components/BuilderSection";

// Homepage: sections in the order defined by the Phase 1 spec.
export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <CategoryBar />
      <Timeline />
      <BuilderSection />
    </>
  );
}
