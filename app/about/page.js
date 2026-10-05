import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About — Abhiraj Sharma",
  description:
    "About Abhiraj Sharma, Full-Stack AI Developer building scalable web applications and intelligent systems.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Abhiraj Sharma",
    description:
      "About Abhiraj Sharma, Full-Stack AI Developer building scalable web applications and intelligent systems.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <AboutSection />
    </div>
  );
}
