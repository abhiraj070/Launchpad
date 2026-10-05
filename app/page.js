import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  alternates: { canonical: "/" },
};

// Clean, focused layout:
// 1. Hero
// 2. About section at the top
// 3. Projects section clubbing all projects into "Top Projects" and "All Projects"
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
