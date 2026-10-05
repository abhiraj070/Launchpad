"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Database,
  Cpu,
  ArrowUpRight,
  Github,
  Terminal,
  Search,
  Radio,
  FileText,
  CheckCircle2,
  Zap,
  ArrowRight,
  Workflow,
  Split,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/StatusBadge";

// Pipeline step definitions for the architecture visualizer
const INGESTION_STEPS = [
  {
    step: "01",
    name: "Input Ingestion",
    role: "FastAPI & Multipart Uploads",
    desc: "Accepts free-form facts, multi-sentence text, or receipt images. Responds immediately with a queued 202 status.",
    badge: "POST /feed_knowledge",
  },
  {
    step: "02",
    name: "Asynchronous Queue",
    role: "Redis & ARQ Workers",
    desc: "Offloads heavy background tasks into Redis queues. ARQ workers dequeue jobs without blocking client request threads.",
    badge: "Redis · ARQ Worker",
  },
  {
    step: "03",
    name: "Fact Normalization",
    role: "Dynamic JSONB & Vision",
    desc: "Splits compound statements into standalone atomic facts. Extracts structured metadata (entities, amounts, dates) and processes images via OpenAI Vision.",
    badge: "OpenAI gpt-4o-mini",
  },
  {
    step: "04",
    name: "Vector & DB Commit",
    role: "PostgreSQL & pgvector",
    desc: "Generates 1,536-dimensional embeddings (text-embedding-3-small) and writes vectors alongside JSONB metadata in PostgreSQL.",
    badge: "pgvector (1536d)",
  },
  {
    step: "05",
    name: "Real-time Notification",
    role: "Redis Pub/Sub & WebSockets",
    desc: "Worker emits completion events over Redis pub/sub. The API forwards status to the user's active WebSocket connection in real time.",
    badge: "ws://localhost:8000/ws",
  },
];

const RETRIEVAL_STRATEGIES = [
  {
    id: "semantic",
    name: "Semantic Vector Search",
    route: "Strategy: Nearest Neighbor",
    desc: "Calculates cosine distance across 1,536-dimensional pgvector embeddings. Ideal for conceptual queries, context recall, and similarity matching.",
    queryType: "Find facts about: 'What are my hardware preferences?'",
    badge: "Cosine Distance (<=>)",
    color: "#818cf8",
  },
  {
    id: "sql",
    name: "Deterministic SQL Query",
    route: "Strategy: Metadata Filter",
    desc: "Translates natural language questions into precise SQL filters and aggregations over dynamic JSONB metadata, preventing LLM hallucinations.",
    queryType: "Aggregations: 'How much did I spend on my laptop last month?'",
    badge: "PostgreSQL JSONB",
    color: "#34d399",
  },
  {
    id: "hybrid",
    name: "Hybrid Multi-Strategy",
    route: "Strategy: Semantic + SQL Filter",
    desc: "Combines semantic candidate retrieval with deterministic metadata filtering to surface highly specific facts across time and categories.",
    queryType: "Blended: 'Show receipts for electronics purchased after September'",
    badge: "Hybrid Fusion",
    color: "#fbbf24",
  },
];

// Interactive simulated scenario based directly on Alaya's official README
const SIMULATED_DATA = {
  feedInput: "I bought a laptop for 80000 INR on 2026-09-20",
  workerDecomposition: [
    {
      fact: "User purchased a laptop",
      metadata: { item: "laptop", category: "electronics" },
    },
    {
      fact: "Laptop cost was 80,000 INR on 2026-09-20",
      metadata: { amount: 80000, currency: "INR", date: "2026-09-20" },
    },
  ],
  vectorDim: "vector(1536) [0.0124, -0.0451, 0.0892, ...]",
  userQuestion: "How much did I spend on my laptop?",
  classifiedStrategy: "SQL (Deterministic Filter & Aggregation)",
  generatedResponse:
    "You spent 80,000 INR on your laptop on September 20, 2026.",
};

export default function AlayaSection() {
  const [activeTab, setActiveTab] = useState("retrieval"); // "ingestion" | "retrieval" | "demo"
  const [selectedStrategy, setSelectedStrategy] = useState("sql");

  const accent = "#818cf8";

  return (
    <section
      id="alaya"
      className="scroll-mt-28 border-t border-hairline py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Header Block with Live Badges */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs font-medium text-fg">
                <span className="h-1.5 w-1.5 rounded-full bg-[#818cf8]" />
                FLAGSHIP AI ARCHITECTURE
              </span>
              <StatusBadge status="Building" />
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-[40px] lg:leading-tight">
              Alaya{" "}
              <span className="text-fg-muted font-normal text-2xl sm:text-3xl">
                — Personal Knowledge & Hybrid Retrieval Engine
              </span>
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">
              An asynchronous personal memory backend that normalizes free-form
              facts, generates 1536-dimensional pgvector embeddings via ARQ
              workers, and answers queries using dynamic semantic, deterministic
              SQL, or hybrid retrieval.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex shrink-0 items-center gap-2.5 pt-2 sm:pt-0">
            <Button
              href="https://github.com/abhiraj070/alaya"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
            >
              <Github size={15} />
              GitHub
            </Button>
            <Button href="/project/alaya" variant="primary" size="md">
              Full Specs
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>

        {/* Interactive Architecture Explorer Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-surface shadow-elevated">
          {/* Card Top Bar with Pipeline Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline bg-surface-2/60 px-5 py-3.5 backdrop-blur-sm sm:px-6">
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg border"
                style={{
                  color: accent,
                  backgroundColor: `${accent}18`,
                  borderColor: `${accent}35`,
                }}
              >
                <Sparkles size={14} />
              </span>
              <span className="text-sm font-semibold text-fg">
                System Pipeline Visualizer
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1 rounded-lg border border-hairline bg-surface p-1">
              <button
                type="button"
                onClick={() => setActiveTab("retrieval")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  activeTab === "retrieval"
                    ? "bg-[#818cf8] text-[#0a0a0b] shadow-soft"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                <Split size={13} />
                Hybrid Retrieval
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ingestion")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  activeTab === "ingestion"
                    ? "bg-[#818cf8] text-[#0a0a0b] shadow-soft"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                <Workflow size={13} />
                Async Ingestion
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("demo")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  activeTab === "demo"
                    ? "bg-[#818cf8] text-[#0a0a0b] shadow-soft"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                <Terminal size={13} />
                Payload Simulation
              </button>
            </div>
          </div>

          {/* Interactive Content Views */}
          <div className="p-6 sm:p-8">
            {/* VIEW 1: Hybrid Retrieval Pipeline */}
            {activeTab === "retrieval" && (
              <div className="space-y-6 animate-fade-up">
                <div className="max-w-2xl">
                  <h3 className="text-base font-semibold text-fg">
                    Intelligent Tri-Mode Query Routing
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">
                    When a user asks a question, Alaya embeds the prompt and
                    classifies the query strategy to avoid LLM hallucination on
                    structured data.
                  </p>
                </div>

                {/* Strategy Selector Chips */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                  {RETRIEVAL_STRATEGIES.map((strat) => {
                    const isSelected = selectedStrategy === strat.id;
                    return (
                      <button
                        key={strat.id}
                        type="button"
                        onClick={() => setSelectedStrategy(strat.id)}
                        className={`group flex flex-col text-left rounded-xl border p-4 transition-all duration-200 ${
                          isSelected
                            ? "border-hairline-strong bg-surface-2 shadow-elevated"
                            : "border-hairline bg-surface/50 hover:border-hairline-strong hover:bg-surface-2/40"
                        }`}
                        style={
                          isSelected
                            ? {
                                boxShadow: `0 8px 24px -12px ${strat.color}35`,
                                borderColor: `${strat.color}60`,
                              }
                            : {}
                        }
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="font-mono text-[11px] font-semibold uppercase tracking-wider"
                            style={{ color: strat.color }}
                          >
                            {strat.badge}
                          </span>
                          <span
                            className={`h-2 w-2 rounded-full transition-opacity ${
                              isSelected ? "opacity-100" : "opacity-30 group-hover:opacity-70"
                            }`}
                            style={{ backgroundColor: strat.color }}
                          />
                        </div>

                        <h4 className="mt-2 text-sm font-semibold text-fg">
                          {strat.name}
                        </h4>

                        <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">
                          {strat.desc}
                        </p>

                        <div className="mt-4 pt-3 border-t border-hairline/60 font-mono text-[11px] text-fg-faint">
                          {strat.queryType}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Strategy Flow Diagram */}
                <div className="rounded-xl border border-hairline bg-surface-2/70 p-5 font-mono text-xs">
                  <div className="flex items-center gap-2 text-fg-faint pb-3 border-b border-hairline">
                    <Split size={14} className="text-[#818cf8]" />
                    <span>QUERY EXECUTION PATHWAY</span>
                    <span className="ml-auto text-[11px] text-[#818cf8]">
                      Active Mode:{" "}
                      {
                        RETRIEVAL_STRATEGIES.find((s) => s.id === selectedStrategy)
                          ?.name
                      }
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4 items-center">
                    <div className="rounded-lg border border-hairline bg-surface p-3 text-center">
                      <p className="text-[10px] text-fg-faint">STEP 1</p>
                      <p className="text-xs font-semibold text-fg mt-0.5">
                        User Question
                      </p>
                      <p className="text-[11px] text-fg-muted mt-1 truncate">
                        "How much did I spend..."
                      </p>
                    </div>

                    <div className="hidden md:flex justify-center text-fg-faint">
                      ➔
                    </div>

                    <div className="rounded-lg border border-hairline bg-surface p-3 text-center">
                      <p className="text-[10px] text-fg-faint">STEP 2</p>
                      <p className="text-xs font-semibold text-fg mt-0.5">
                        Classifier & Embedding
                      </p>
                      <p className="text-[11px] text-[#818cf8] mt-1">
                        TypeSafe / OpenAI 1536d
                      </p>
                    </div>

                    <div className="hidden md:flex justify-center text-fg-faint">
                      ➔
                    </div>

                    <div
                      className="rounded-lg border p-3 text-center transition-colors md:col-span-4 lg:col-span-1"
                      style={{
                        backgroundColor: `${
                          RETRIEVAL_STRATEGIES.find((s) => s.id === selectedStrategy)
                            ?.color
                        }14`,
                        borderColor: `${
                          RETRIEVAL_STRATEGIES.find((s) => s.id === selectedStrategy)
                            ?.color
                        }40`,
                      }}
                    >
                      <p className="text-[10px] text-fg-faint">STEP 3</p>
                      <p className="text-xs font-semibold text-fg mt-0.5">
                        Retrieval Execution
                      </p>
                      <p className="text-[11px] text-fg mt-1">
                        {
                          RETRIEVAL_STRATEGIES.find((s) => s.id === selectedStrategy)
                            ?.badge
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: Asynchronous Ingestion Pipeline */}
            {activeTab === "ingestion" && (
              <div className="space-y-6 animate-fade-up">
                <div className="max-w-2xl">
                  <h3 className="text-base font-semibold text-fg">
                    Non-Blocking ARQ + Redis Ingestion Flow
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">
                    Knowledge ingestion, compound sentence decomposition, and
                    image parsing run in the background with WebSocket status
                    delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {INGESTION_STEPS.map((item, index) => (
                    <div
                      key={item.step}
                      className="relative flex flex-col justify-between rounded-xl border border-hairline bg-surface/70 p-4 transition-all hover:border-hairline-strong hover:bg-surface-2"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#818cf8]">
                            {item.step}
                          </span>
                          <span className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[9px] text-fg-faint">
                            NODE
                          </span>
                        </div>

                        <h4 className="mt-2.5 text-sm font-semibold text-fg">
                          {item.name}
                        </h4>
                        <p className="text-xs font-medium text-fg-muted mt-0.5">
                          {item.role}
                        </p>

                        <p className="mt-2 text-xs leading-relaxed text-fg-faint">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-hairline/60 font-mono text-[10px] text-accent truncate">
                        {item.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: Live Payload Simulation */}
            {activeTab === "demo" && (
              <div className="space-y-6 animate-fade-up">
                <div className="max-w-2xl">
                  <h3 className="text-base font-semibold text-fg">
                    End-to-End Execution Sample
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">
                    Exact representation of a real knowledge ingestion and
                    conversational query handled by Alaya's backend.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {/* Left: Ingestion & Storage */}
                  <div className="rounded-xl border border-hairline bg-canvas p-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-hairline text-fg-faint">
                      <span className="text-emerald-400">● 1. Ingestion & Storage</span>
                      <span>POST /api/messages/feed_knowledge</span>
                    </div>

                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-fg-faint text-[11px]">// Raw user input</p>
                        <p className="text-fg mt-0.5 bg-surface p-2 rounded border border-hairline">
                          "{SIMULATED_DATA.feedInput}"
                        </p>
                      </div>

                      <div>
                        <p className="text-fg-faint text-[11px]">
                          // Normalized JSONB extracted by ARQ worker
                        </p>
                        <pre className="text-indigo-300 bg-surface p-2.5 rounded border border-hairline overflow-x-auto text-[11px] leading-relaxed">
                          {JSON.stringify(SIMULATED_DATA.workerDecomposition, null, 2)}
                        </pre>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-fg-muted pt-1">
                        <span>Vector: 1536-dim pgvector</span>
                        <span className="text-emerald-400">WebSocket: 200 OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Retrieval & Answer */}
                  <div className="rounded-xl border border-hairline bg-canvas p-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-hairline text-fg-faint">
                      <span className="text-sky-400">● 2. Retrieval & Streaming</span>
                      <span>POST /api/messages/new_messages/1</span>
                    </div>

                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-fg-faint text-[11px]">// Question asked</p>
                        <p className="text-fg mt-0.5 bg-surface p-2 rounded border border-hairline">
                          "{SIMULATED_DATA.userQuestion}"
                        </p>
                      </div>

                      <div>
                        <p className="text-fg-faint text-[11px]">// Strategy Selected</p>
                        <div className="bg-surface p-2 rounded border border-hairline text-emerald-400">
                          {SIMULATED_DATA.classifiedStrategy}
                        </div>
                      </div>

                      <div>
                        <p className="text-fg-faint text-[11px]">
                          // Streamed Assistant Answer
                        </p>
                        <div className="bg-surface p-2.5 rounded border border-indigo-500/40 text-fg">
                          <p className="text-sm font-sans font-medium text-fg">
                            "{SIMULATED_DATA.generatedResponse}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Highlights & Specs Ribbon */}
          <div className="grid grid-cols-2 border-t border-hairline bg-surface-2/40 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
            <div className="p-4 sm:p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">
                Vector Dimension
              </p>
              <p className="mt-1 text-base font-semibold text-fg">1,536-dim</p>
              <p className="mt-0.5 text-xs text-fg-muted">
                OpenAI text-embedding-3-small
              </p>
            </div>

            <div className="p-4 sm:p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">
                Database Engine
              </p>
              <p className="mt-1 text-base font-semibold text-fg">PostgreSQL + pgvector</p>
              <p className="mt-0.5 text-xs text-fg-muted">
                Dynamic JSONB metadata filters
              </p>
            </div>

            <div className="p-4 sm:p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">
                Concurrency & Queue
              </p>
              <p className="mt-1 text-base font-semibold text-fg">Redis & ARQ Workers</p>
              <p className="mt-0.5 text-xs text-fg-muted">
                Asynchronous background pipelines
              </p>
            </div>

            <div className="p-4 sm:p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">
                Real-Time Streaming
              </p>
              <p className="mt-1 text-base font-semibold text-fg">WebSockets + Pub/Sub</p>
              <p className="mt-0.5 text-xs text-fg-muted">
                Instant progress status to client
              </p>
            </div>
          </div>
        </div>

        {/* Technology Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-xs uppercase tracking-wider text-fg-faint">
            Alaya Tech Stack:
          </span>
          {[
            "FastAPI",
            "Python",
            "PostgreSQL",
            "pgvector",
            "Redis",
            "ARQ",
            "SQLAlchemy",
            "OpenAI gpt-4o-mini",
            "WebSockets",
            "Cloudinary",
            "Alembic",
            "Pydantic",
          ].map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg border border-hairline bg-surface px-2.5 py-1 font-mono text-xs text-fg-muted transition-colors hover:border-hairline-strong hover:text-fg"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
