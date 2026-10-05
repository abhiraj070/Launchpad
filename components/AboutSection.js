import Image from "next/image";
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
    title: "Maharaja Surajmal Institute of Technology",
    subtitle: "IT Branch · 3rd Year",
    detail: "Information Technology branch / Currently in 3rd year.",
    icon: GraduationCap,
    accentColor: "#a78bfa", // subtle pastel violet (experiment token)
    badge: "3rd Year",
  },
  {
    id: "location",
    eyebrow: "Location",
    title: "New Delhi, India",
    subtitle: "IST (UTC+5:30)",
    detail: "Based in New Delhi, available for remote and hybrid opportunities.",
    icon: MapPin,
    accentColor: "#34d399", // subtle pastel emerald (live token)
    badge: "New Delhi",
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Krishify",
    subtitle: "Ex-Intern · Software Engineering",
    detail: "Full-stack feature engineering & backend services (ended Sep 2026).",
    icon: Briefcase,
    accentColor: "#fbbf24", // subtle pastel amber (building token)
    badge: "Ex-Intern",
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

        {/* Narrative & Photo Layout: Photo placed directly in front of (to the left of) the bio copy */}
        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Photo Card (In front of the biographical narrative) */}
          <div className="w-full lg:col-span-5 xl:col-span-4">
            <div className="group relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Subtle ambient warm glow behind the photo card */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent/20 via-transparent to-surface-2 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80"
              />

              {/* Outer Framed Photo Card */}
              <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface-2 p-2.5 shadow-raised transition-all duration-300 ease-premium group-hover:border-hairline-strong group-hover:shadow-elevated">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface">
                  <Image
                    src="/abhiraj.jpg"
                    alt="Abhiraj Sharma - Full-Stack AI Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 340px"
                    className="object-cover object-center transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
                  />

                  {/* Gentle bottom shadow gradient for depth & text legibility */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/20 to-transparent"
                  />

                  {/* Floating Glassmorphism Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-hairline/80 bg-surface/90 px-3 py-2 backdrop-blur-md shadow-soft">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
                      </span>
                      <span className="truncate font-mono text-xs font-medium text-fg">
                        Abhiraj Sharma
                      </span>
                    </div>
                    <span className="shrink-0 rounded-md border border-hairline bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-fg-muted uppercase tracking-wider">
                      Full-Stack AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Introduction ("Where everything is written about me") & Tech Stack */}
          <div className="flex flex-col lg:col-span-7 xl:col-span-8">
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
                Previously, I worked as an Ex-Intern (Software Engineering) at{" "}
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

            {/* CTAs: Resume & GitHub Proof of Work */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
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

        {/* 4 Information Credential Cards: Education, Location, Experience, Currently Building */}
        <div className="mt-12 border-t border-hairline pt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </Container>
    </section>
  );
}
