import Hero from "@/components/Hero";
import Workspace from "@/components/workspace/Workspace";
import AlayaSection from "@/components/AlayaSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AllProjects from "@/components/AllProjects";
import CategoryBar from "@/components/CategoryBar";
import Timeline from "@/components/Timeline";
import AboutSection from "@/components/AboutSection";

export const metadata = {
  alternates: { canonical: "/" },
};

// Homepage. Features the active flagship deep-dive for Alaya, the curated
// Featured products ("main"), and the complete workspace ("everything I've built").
export default function Home() {
  return (
    <>
      <Hero />
      <Workspace />
      <AlayaSection />
      <FeaturedProducts />
      <AllProjects />
      <CategoryBar />
      <Timeline />
      <AboutSection />
    </>
  );
}
