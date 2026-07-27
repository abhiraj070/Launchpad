import Hero from "@/components/Hero";
import Workspace from "@/components/workspace/Workspace";
import FeaturedProducts from "@/components/FeaturedProducts";
import AllProjects from "@/components/AllProjects";
import CategoryBar from "@/components/CategoryBar";
import Timeline from "@/components/Timeline";
import BuilderSection from "@/components/BuilderSection";

export const metadata = {
  alternates: { canonical: "/" },
};

// Homepage. Two consecutive experiences: a curated Featured screen ("what are
// the best products to explore?") that flows into the complete workspace
// ("here's everything I've built"). The personalization Workspace sits up top
// for returning visitors and renders nothing for first-timers.
export default function Home() {
  return (
    <>
      <Hero />
      <Workspace />
      <FeaturedProducts />
      <AllProjects />
      <CategoryBar />
      <Timeline />
      <BuilderSection />
    </>
  );
}
