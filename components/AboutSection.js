import {
  GraduationCap,
  MapPin,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  Github,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Technical focus areas
const TECHNICAL_INTERESTS = [
  "Full-Stack Web Development",
  "Backend Engineering",
  "AI / LLM Systems",
  "RAG Architecture",
  "Embeddings",
  "Vector Search",
  "Document Processing",
  "Scalable Distributed Systems",
];

// Information cards data
const INFO_CARDS = [
  {
    id: "education",
    eyebrow: "Education",
    title: "IIT Madras",
    subtitle: "BS (Bachelor of Science)",
    detail: "Data Science and Applications / Core computing foundation.",
    icon: GraduationCap,
    accentColor: "#a78bfa", // subtle pastel violet (experiment token)
    badge: "Undergrad",
  },
  {
    id: "location",
    eyebrow: "Location",
    title: "India",
    subtitle: "IST (UTC+5:30)",
    detail: "Available for remote work & global engineering teams.",
    icon: MapPin,
    accentColor: "#34d399", // subtle pastel emerald (live token)
    badge: "Remote",
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Krishify",
    subtitle: "Software Engineering Intern",
    detail: "Full-stack feature engineering & backend services (ended Sep 2026).",
    icon: Briefcase,
    accentColor: "#fbbf24", // subtle pastel amber (building token)
    badge: "Internship",
  },
  {
    id: "building",
    eyebrow: "Currently Building",
    title: "Alaya",
    subtitle: "AI · Document Intelligence · RAG",
    detail: "Document extraction, chunking, 1536d embeddings & vector search.",
    icon: Sparkles,
    accentColor: "#ff6b35", // brand orange accent
    badge: "Active",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-hairline py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header: Small Eyebrow + Large Bold Editorial Heading */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            About Me
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            BUILDING SOFTWARE.
            <br />
            <span className="text-fg-muted">BUILDING INTELLIGENT SYSTEMS.</span>
          </h2>
        </div>

        {/* Main Content Layout: Two-column on desktop, stacked on mobile */}
        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Narrative Introduction & Technical Interests */}
          <div className="flex flex-col lg:col-span-7">
            {/* Introduction Copy */}
            <div className="space-y-4 text-base leading-relaxed text-fg-muted sm:text-[17px]">
              <p>
                I’m <strong className="font-semibold text-fg">Abhiraj Sharma</strong>, a
                Full-Stack AI Developer focused on building scalable web applications and
                intelligent systems. I enjoy working across the entire stack—from architecting
                responsive frontend interfaces and resilient backend APIs to designing performant
                data layers and applied AI workflows.
              </p>

              <p>
                Currently, I am building{" "}
                <strong className="font-semibold text-fg">Alaya</strong>, an AI-powered document
                intelligence platform focused on automated document extraction, semantic
                chunking, high-dimensional embeddings, vector search, and grounded RAG/LLM
                pipelines.
              </p>

              <p>
                Previously, I worked as a Software Engineering Intern at{" "}
                <strong className="font-semibold text-fg">Krishify</strong> (completed September
                2026), where I developed and shipped production full-stack features with an
                emphasis on performance, scalability, and code reliability.
              </p>
            </div>

            {/* Technical Focus & Interests */}
            <div className="mt-8 border-t border-hairline pt-6">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-fg-faint">
                Technical Focus &amp; Interests
              </h3>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {TECHNICAL_INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center rounded-lg border border-hairline bg-surface px-3 py-1 font-mono text-xs text-fg-muted transition-colors duration-200 hover:border-hairline-strong hover:text-fg"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop CTAs: Resume & GitHub Proof of Work */}
            <div className="mt-9 hidden flex-wrap items-center gap-3.5 lg:flex">
              <Button
                href="https://drive.google.com/file/d/1S2w0pLS4hj7IFQkux1sCIIhY3eG3bIa3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
              >
                <span>View Resume</span>
                <ArrowUpRight size={16} />
              </Button>

              <Button
                href="https://github.com/abhiraj070"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="secondary"
              >
                <Github size={16} />
                <span>GitHub · Proof of Work</span>
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div className="w-full lg:col-span-5">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {INFO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-hairline bg-surface p-4 shadow-soft transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-hairline-strong hover:bg-surface-2 sm:p-5"
                  >
                    <div>
                      {/* Card Header: Icon + Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-xl border transition-transform duration-200 ease-premium group-hover:scale-105"
                          style={{
                            color: card.accentColor,
                            backgroundColor: `${card.accentColor}14`,
                            borderColor: `${card.accentColor}2e`,
                          }}
                        >
                          <Icon size={17} />
                        </span>

                        <span
                          className="rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider"
                          style={{
                            color: card.accentColor,
                            borderColor: `${card.accentColor}33`,
                            backgroundColor: `${card.accentColor}0d`,
                          }}
                        >
                          {card.badge}
                        </span>
                      </div>

                      {/* Eyebrow */}
                      <p className="mt-3.5 font-mono text-[10.5px] uppercase tracking-wider text-fg-faint">
                        {card.eyebrow}
                      </p>

                      {/* Main Title & Subtitle */}
                      <h4 className="mt-1 text-base font-semibold text-fg">
                        {card.title}
                      </h4>
                      <p className="mt-0.5 font-mono text-xs text-fg-muted">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Detail Note */}
                    <p className="mt-3 text-xs leading-relaxed text-fg-faint">
                      {card.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile CTAs: Appears directly after Currently Building card on mobile */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:hidden">
              <Button
                href="https://drive.google.com/file/d/1S2w0pLS4hj7IFQkux1sCIIhY3eG3bIa3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
              >
                <span>View Resume</span>
                <ArrowUpRight size={16} />
              </Button>

              <Button
                href="https://github.com/abhiraj070"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Github size={16} />
                <span>GitHub · Proof of Work</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
