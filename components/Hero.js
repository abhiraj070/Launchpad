import { ArrowDown, Github, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SystemVisual from "@/components/SystemVisual";

// Tech stack pill tags
const TECH_STACK = [
  "Next.js",
  "React",
  "FastAPI",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AI / RAG",
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Developer Value Proposition, Copy & CTAs */}
          <div className="flex flex-col lg:col-span-7">
            {/* Top badges: Developer role & current building indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Identity & Role Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/90 px-3 py-1 text-xs font-medium text-fg shadow-soft backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Abhiraj Sharma</span>
                <span className="text-hairline-strong">/</span>
                <span className="text-fg-muted">Full-Stack AI Developer</span>
              </div>

              {/* Current-work indicator: Alaya */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium text-fg-muted backdrop-blur-sm transition-all duration-200 ease-premium hover:border-hairline-strong hover:bg-surface hover:text-fg active:scale-95"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
                </span>
                <span>Currently building</span>
                <span className="font-semibold text-fg">Alaya</span>
                <span className="text-fg-faint text-[11px]">→</span>
              </a>
            </div>

            {/* Dominant Headline */}
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              I build full-stack products{" "}
              <span className="text-accent">powered by AI.</span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Full-Stack AI Developer building scalable web applications and
              intelligent systems—from modern frontend and backend architectures
              to AI, RAG, document processing, embeddings, and vector search.
            </p>

            {/* CTAs: Primary GitHub, Secondary Projects */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                href="https://github.com/abhiraj070"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
              >
                <Github size={16} />
                View GitHub
              </Button>

              <Button href="#projects" size="lg" variant="secondary">
                Explore Projects
                <ArrowDown size={16} />
              </Button>
            </div>

            {/* Credibility & Current Tech Stack Micro-Bar */}
            <div className="mt-8 border-t border-hairline pt-6">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                {/* Internship credibility */}
                <div className="flex items-center gap-2 text-fg-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" />
                  <span>
                    Ex-Intern at{" "}
                    <strong className="font-semibold text-fg">Krishify</strong>
                  </span>
                  <span className="font-mono text-[11px] text-fg-faint">
                    (ended Sep 2026)
                  </span>
                </div>

                <span className="hidden text-hairline-strong sm:inline">·</span>

                {/* Current Project */}
                <div className="flex items-center gap-2 text-fg-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>
                    Building{" "}
                    <strong className="font-semibold text-fg">Alaya</strong>
                  </span>
                  <span className="font-mono text-[11px] text-fg-faint">
                    (AI Doc Intelligence)
                  </span>
                </div>
              </div>

              {/* Stack pills */}
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-fg-faint">
                  Stack:
                </span>
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-hairline bg-surface px-2 py-0.5 font-mono text-[11px] text-fg-muted transition-colors hover:border-hairline-strong hover:text-fg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technical & AI Architecture Visual */}
          <div className="w-full lg:col-span-5">
            <SystemVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
