"use client";

import {
  Code2,
  Terminal,
  Layout,
  Globe,
  Palette,
  Layers,
  Server,
  Workflow,
  Network,
  Database,
  HardDrive,
  SearchCode,
  TableProperties,
  Sparkles,
  Brain,
  Bot,
  FileSearch,
  Mic,
  Volume2,
  Radio,
  Activity,
  Clock,
  RefreshCw,
  Container as DockerIcon,
  GitBranch,
  Github,
  Cloud,
  TerminalSquare,
  Wrench,
  Send,
  Boxes,
  Compass,
  FileCode,
  Braces,
} from "lucide-react";
import Container from "@/components/ui/Container";

// Technical toolkit categories and items with primary vs secondary weighting
const TECH_CATEGORIES = [
  {
    id: "languages",
    title: "Languages",
    eyebrow: "Core Syntax",
    accentColor: "#f59e0b", // warm amber
    accentBg: "rgba(245, 158, 11, 0.12)",
    accentBorder: "rgba(245, 158, 11, 0.28)",
    icon: Code2,
    colSpan: "lg:col-span-1",
    items: [
      {
        name: "Python",
        icon: Terminal,
        isPrimary: true,
        tooltip: "Primary language for AI pipelines, FastAPI backends, and async systems.",
      },
      {
        name: "JavaScript",
        icon: FileCode,
        isPrimary: true,
        tooltip: "Modern ES6+ web engineering across Node.js runtime and client apps.",
      },
      {
        name: "C++",
        icon: Braces,
        isPrimary: true,
        tooltip: "Data structures, algorithms, and core computing foundations.",
      },
      {
        name: "C",
        icon: Code2,
        isPrimary: false,
        tooltip: "Low-level system programming, memory management, and OS primitives.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    eyebrow: "User Interface",
    accentColor: "#818cf8", // purple/indigo
    accentBg: "rgba(129, 140, 248, 0.12)",
    accentBorder: "rgba(129, 140, 248, 0.28)",
    icon: Layout,
    colSpan: "lg:col-span-1",
    items: [
      {
        name: "Next.js",
        icon: Globe,
        isPrimary: true,
        tooltip: "App Router, SSR, Server Components, and production full-stack web apps.",
      },
      {
        name: "React",
        icon: Layout,
        isPrimary: true,
        tooltip: "Component architecture, reactive state, custom hooks, and modern UI.",
      },
      {
        name: "Tailwind CSS",
        icon: Palette,
        isPrimary: false,
        tooltip: "Utility-first design systems, custom dark tokens, and fluid responsive layouts.",
      },
      {
        name: "JavaScript",
        icon: FileCode,
        isPrimary: false,
        tooltip: "Browser APIs, client-side event loops, and dynamic DOM interactions.",
      },
      {
        name: "HTML5",
        icon: Globe,
        isPrimary: false,
        tooltip: "Semantic markup, accessibility hierarchy, and modern web standards.",
      },
      {
        name: "CSS3",
        icon: Palette,
        isPrimary: false,
        tooltip: "Custom properties, flexbox/grid layout systems, and micro-interactions.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    eyebrow: "APIs & Services",
    accentColor: "#38bdf8", // sky blue
    accentBg: "rgba(56, 189, 248, 0.12)",
    accentBorder: "rgba(56, 189, 248, 0.28)",
    icon: Server,
    colSpan: "lg:col-span-1",
    items: [
      {
        name: "Node.js",
        icon: Server,
        isPrimary: true,
        tooltip: "Asynchronous event-driven JavaScript runtime for scalable backend services.",
      },
      {
        name: "Express.js",
        icon: Workflow,
        isPrimary: true,
        tooltip: "Minimalist Node.js web framework for routing, authentication, and middleware.",
      },
      {
        name: "FastAPI",
        icon: Network,
        isPrimary: true,
        tooltip: "High-performance async Python REST APIs with automatic Pydantic validation.",
      },
      {
        name: "REST APIs",
        icon: Network,
        isPrimary: false,
        tooltip: "Stateless client-server architecture, JSON schemas, and structured error handling.",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data",
    eyebrow: "Storage & ORM",
    accentColor: "#34d399", // emerald green
    accentBg: "rgba(52, 211, 153, 0.12)",
    accentBorder: "rgba(52, 211, 153, 0.28)",
    icon: Database,
    colSpan: "lg:col-span-1",
    groups: [
      {
        label: "Databases",
        items: [
          {
            name: "PostgreSQL",
            icon: Database,
            isPrimary: true,
            tooltip: "Primary relational database with ACID compliance, JSONB, and indexing.",
          },
          {
            name: "MongoDB",
            icon: HardDrive,
            isPrimary: true,
            tooltip: "NoSQL document database for flexible, hierarchical application data.",
          },
          {
            name: "Redis",
            icon: RefreshCw,
            isPrimary: true,
            tooltip: "In-memory key-value store used for caching, pub/sub, and async queues.",
          },
        ],
      },
      {
        label: "Data / ORM / Extensions",
        items: [
          {
            name: "pgvector",
            icon: SearchCode,
            isPrimary: true,
            tooltip: "1536-dimensional vector similarity search and embeddings inside Postgres.",
          },
          {
            name: "SQLAlchemy",
            icon: TableProperties,
            isPrimary: false,
            tooltip: "Python SQL toolkit and Object Relational Mapper for async query modeling.",
          },
          {
            name: "Alembic",
            icon: Workflow,
            isPrimary: false,
            tooltip: "Version-controlled database schema migrations and revision histories.",
          },
          {
            name: "Mongoose",
            icon: TableProperties,
            isPrimary: false,
            tooltip: "Schema validation and business-logic modeling for MongoDB in Node.js.",
          },
          {
            name: "PostGIS",
            icon: Compass,
            isPrimary: false,
            tooltip: "Spatial and geographic data extension for advanced geospatial queries.",
          },
        ],
      },
    ],
  },
  {
    id: "ai-llm",
    title: "AI / LLM Systems",
    eyebrow: "Applied Intelligence",
    accentColor: "#ff6b35", // brand orange / AI accent
    accentBg: "rgba(255, 107, 53, 0.12)",
    accentBorder: "rgba(255, 107, 53, 0.28)",
    icon: Sparkles,
    colSpan: "lg:col-span-2",
    groups: [
      {
        label: "LLM & Inference APIs",
        items: [
          {
            name: "LLMs",
            icon: Brain,
            isPrimary: true,
            tooltip: "Large language models integration with structured prompts and function calling.",
          },
          {
            name: "OpenAI APIs",
            icon: Sparkles,
            isPrimary: true,
            tooltip: "GPT-4o, structured JSON outputs, multimodal vision, and inference streaming.",
          },
          {
            name: "Pydantic AI",
            icon: Bot,
            isPrimary: false,
            tooltip: "Type-safe agent framework with validated model inputs and output schemas.",
          },
          {
            name: "Ollama",
            icon: Brain,
            isPrimary: false,
            tooltip: "Local inference engine running open-weight models (Llama, Mistral, Qwen).",
          },
          {
            name: "Whisper (STT)",
            icon: Mic,
            isPrimary: false,
            tooltip: "Speech-to-text audio transcription and multilingual voice processing.",
          },
          {
            name: "ElevenLabs (TTS)",
            icon: Volume2,
            isPrimary: false,
            tooltip: "Lifelike text-to-speech voice generation and audio synthesis.",
          },
        ],
      },
      {
        label: "RAG & Retrieval Systems",
        items: [
          {
            name: "RAG",
            icon: FileSearch,
            isPrimary: true,
            tooltip: "Retrieval-Augmented Generation pipelines for grounded, hallucination-free AI.",
          },
          {
            name: "Vector Search",
            icon: SearchCode,
            isPrimary: true,
            tooltip: "Semantic nearest-neighbor search (k-NN / HNSW) across embedding indices.",
          },
          {
            name: "Embeddings",
            icon: Network,
            isPrimary: true,
            tooltip: "High-dimensional vector representations for semantic document retrieval.",
          },
          {
            name: "Document Processing",
            icon: FileSearch,
            isPrimary: false,
            tooltip: "Extraction pipelines parsing PDF, DOCX, and unstructured documents.",
          },
          {
            name: "Recursive Chunking",
            icon: Layers,
            isPrimary: false,
            tooltip: "Context-preserving text chunking with token overlap and semantic splits.",
          },
        ],
      },
      {
        label: "AI Workflows & Agents",
        items: [
          {
            name: "Agentic Systems",
            icon: Bot,
            isPrimary: true,
            tooltip: "Autonomous multi-step agents with tool calling, memory, and reflection loops.",
          },
          {
            name: "LangGraph",
            icon: Workflow,
            isPrimary: false,
            tooltip: "Stateful cyclical graph orchestration for complex multi-agent workflows.",
          },
          {
            name: "LangChain",
            icon: Boxes,
            isPrimary: false,
            tooltip: "Composable prompt chains, document loaders, and retrieval pipelines.",
          },
        ],
      },
    ],
  },
  {
    id: "realtime",
    title: "Real-Time & Async Systems",
    eyebrow: "Event Architecture",
    accentColor: "#2dd4bf", // cyan / teal
    accentBg: "rgba(45, 212, 191, 0.12)",
    accentBorder: "rgba(45, 212, 191, 0.28)",
    icon: Radio,
    colSpan: "lg:col-span-1",
    items: [
      {
        name: "WebSockets",
        icon: Radio,
        isPrimary: true,
        tooltip: "Full-duplex bidirectional persistent connections for real-time live events.",
      },
      {
        name: "Socket.IO",
        icon: Activity,
        isPrimary: true,
        tooltip: "Event-driven real-time engine with room broadcasting and fallback polling.",
      },
      {
        name: "Redis Pub/Sub",
        icon: RefreshCw,
        isPrimary: true,
        tooltip: "Fast message distribution across distributed backend workers and subscribers.",
      },
      {
        name: "ARQ",
        icon: Clock,
        isPrimary: false,
        tooltip: "Asynchronous task queue in Python powered by Redis for background jobs.",
      },
      {
        name: "Background Workers",
        icon: Workflow,
        isPrimary: false,
        tooltip: "Decoupled asynchronous worker processes for heavy document parsing and embedding.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    eyebrow: "Deployment & CI/CD",
    accentColor: "#fbbf24", // amber / yellow
    accentBg: "rgba(251, 191, 36, 0.12)",
    accentBorder: "rgba(251, 191, 36, 0.28)",
    icon: DockerIcon,
    colSpan: "lg:col-span-1",
    items: [
      {
        name: "Docker",
        icon: DockerIcon,
        isPrimary: true,
        tooltip: "Containerization, multi-stage builds, and reproducible isolated environments.",
      },
      {
        name: "Git",
        icon: GitBranch,
        isPrimary: true,
        tooltip: "Distributed version control, branching strategies, and commit hygiene.",
      },
      {
        name: "GitHub",
        icon: Github,
        isPrimary: true,
        tooltip: "Source hosting, GitHub Actions CI/CD automation, and release tracking.",
      },
      {
        name: "Linux",
        icon: TerminalSquare,
        isPrimary: false,
        tooltip: "POSIX environment, shell scripting, process management, and server administration.",
      },
      {
        name: "Vercel",
        icon: Cloud,
        isPrimary: false,
        tooltip: "Edge network deployment, automatic serverless builds, and preview environments.",
      },
      {
        name: "Render",
        icon: Cloud,
        isPrimary: false,
        tooltip: "Managed cloud hosting for Dockerized web services and background workers.",
      },
      {
        name: "Cloudinary",
        icon: Cloud,
        isPrimary: false,
        tooltip: "Cloud media storage, on-the-fly image transformations, and asset delivery.",
      },
      {
        name: "Bitbucket",
        icon: GitBranch,
        isPrimary: false,
        tooltip: "Enterprise repository hosting and repository management workflows.",
      },
    ],
  },
  {
    id: "devtools",
    title: "Development Tools",
    eyebrow: "Developer Workflow",
    accentColor: "#a1a1aa", // clean neutral zinc/silver
    accentBg: "rgba(161, 161, 170, 0.12)",
    accentBorder: "rgba(161, 161, 170, 0.28)",
    icon: Wrench,
    colSpan: "lg:col-span-1",
    items: [
      {
        name: "VS Code",
        icon: TerminalSquare,
        isPrimary: true,
        tooltip: "Primary code editor with advanced debugging, linting, and language servers.",
      },
      {
        name: "Postman",
        icon: Send,
        isPrimary: true,
        tooltip: "API endpoint testing, request collection suites, and automated test runs.",
      },
      {
        name: "Git CLI",
        icon: GitBranch,
        isPrimary: false,
        tooltip: "Command line version control, interactive rebases, and worktree isolation.",
      },
      {
        name: "GitHub Desktop",
        icon: Github,
        isPrimary: false,
        tooltip: "Visual diff inspection, commit staging, and repository synchronization.",
      },
    ],
  },
];

// Single Chip Component with Core Emphasis & Tooltip
function TechChip({ tech, accentColor }) {
  const Icon = tech.icon;
  const isPrimary = tech.isPrimary;

  return (
    <div className="group/chip relative inline-flex">
      <div
        className={
          "inline-flex cursor-default items-center gap-1.5 rounded-lg transition-all duration-200 ease-premium " +
          (isPrimary
            ? "border border-hairline-strong bg-surface-2 px-2.5 py-1.5 text-xs font-medium text-fg shadow-sm hover:-translate-y-0.5 hover:border-accent/60 hover:bg-surface-hover"
            : "border border-hairline bg-surface/60 px-2 py-1 text-[11.5px] font-normal text-fg-muted hover:-translate-y-0.5 hover:border-hairline-strong hover:bg-surface-2 hover:text-fg")
        }
      >
        {/* Primary Glowing Indicator */}
        {isPrimary ? (
          <span
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px]"
            style={{
              color: accentColor,
              backgroundColor: `${accentColor}18`,
            }}
          >
            <Icon size={12} />
          </span>
        ) : (
          <Icon size={11} className="shrink-0 text-fg-faint transition-colors group-hover/chip:text-fg-muted" />
        )}

        <span className="truncate">{tech.name}</span>

        {isPrimary ? (
          <span
            className="ml-0.5 h-1 w-1 shrink-0 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        ) : null}
      </div>

      {/* Floating Hover Tooltip (Accessible & Lightweight) */}
      {tech.tooltip ? (
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-2 hidden -translate-x-1/2 rounded-lg border border-hairline-strong bg-[#121214] px-2.5 py-1.5 text-center font-sans text-[11px] leading-tight text-fg shadow-elevated backdrop-blur-md transition-all sm:group-hover/chip:block w-max max-w-[210px]"
        >
          {tech.tooltip}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#121214]" />
        </span>
      ) : null}
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-24 border-t border-hairline py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Header: Eyebrow + Editorial Heading + Concise Subtitle */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            What I Work With
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            TECHNOLOGIES.
            <br />
            <span className="text-fg-muted">TECHNICAL TOOLKIT &amp; SYSTEMS.</span>
          </h2>

          <p className="mt-3 text-base text-fg-muted sm:text-lg">
            Tools and technologies I use to build full-stack applications, backend systems, and AI-powered products.
          </p>

          {/* Quick Legend: Primary vs Supporting */}
          <div className="mt-5 flex items-center gap-4 text-xs text-fg-faint">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-medium text-fg-muted">Highlighted</span> = Primary / Core Stack
            </span>
            <span className="text-hairline-strong">·</span>
            <span className="text-fg-faint">Hover any technology for context</span>
          </div>
        </div>

        {/* 3-Column Card Grid (3 on desktop, 2 on tablet, 1 on mobile) */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((category) => {
            const HeaderIcon = category.icon;
            return (
              <div
                key={category.id}
                className={
                  "group relative flex flex-col justify-between rounded-2xl border border-hairline bg-surface p-5 shadow-soft " +
                  "transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-hairline-strong hover:bg-surface-2 hover:shadow-raised " +
                  (category.colSpan ? category.colSpan : "lg:col-span-1")
                }
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-hairline/60 pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 ease-premium group-hover:scale-105"
                        style={{
                          color: category.accentColor,
                          backgroundColor: category.accentBg,
                          borderColor: category.accentBorder,
                        }}
                      >
                        <HeaderIcon size={17} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight text-fg">
                          {category.title}
                        </h3>
                        <p className="font-mono text-[10.5px] uppercase tracking-wider text-fg-faint">
                          {category.eyebrow}
                        </p>
                      </div>
                    </div>

                    {/* Small category accent indicator */}
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: category.accentColor }}
                    />
                  </div>

                  {/* Chips: Flat Items OR Grouped Sub-Sections */}
                  <div className="mt-4">
                    {category.groups ? (
                      <div className="space-y-4">
                        {category.groups.map((group) => (
                          <div key={group.label}>
                            <p className="mb-2 font-mono text-[10.5px] font-medium uppercase tracking-wider text-fg-faint">
                              {group.label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {group.items.map((tech) => (
                                <TechChip
                                  key={tech.name}
                                  tech={tech}
                                  accentColor={category.accentColor}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((tech) => (
                          <TechChip
                            key={tech.name}
                            tech={tech}
                            accentColor={category.accentColor}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
