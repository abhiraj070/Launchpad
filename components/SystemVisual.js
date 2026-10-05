"use client";

import { useState, useEffect } from "react";
import {
  Layers,
  Cpu,
  Database,
  Sparkles,
  FileSearch,
  Activity,
  Terminal,
} from "lucide-react";

// System architecture nodes representing the full software & AI lifecycle:
// Frontend → API → Database → AI Pipeline → Vector Search
const SYSTEM_NODES = [
  {
    id: "frontend",
    step: "01",
    label: "Frontend",
    tagline: "Next.js · React",
    role: "Client UI & Real-Time State",
    detail: "Optimistic updates, streaming SSR, and WebSocket subscriptions.",
    icon: Layers,
    color: "#ff6b35", // brand accent
    status: "200 OK",
  },
  {
    id: "api",
    step: "02",
    label: "API Gateway",
    tagline: "FastAPI · Express",
    role: "Async REST & WebSockets",
    detail: "High-throughput validation, token auth, and worker dispatch.",
    icon: Cpu,
    color: "#34d399", // live emerald
    status: "14ms",
  },
  {
    id: "database",
    step: "03",
    label: "Database & Cache",
    tagline: "PostgreSQL · Redis",
    role: "Relational & In-Memory",
    detail: "ACID transactions, persistent data models, and sub-ms cache.",
    icon: Database,
    color: "#fbbf24", // building amber
    status: "synced",
  },
  {
    id: "ai-pipeline",
    step: "04",
    label: "AI Pipeline",
    tagline: "Alaya Doc Engine · RAG",
    role: "Doc Processing & Embeddings",
    detail: "Semantic chunking, table extraction, and 1536d vector generation.",
    icon: Sparkles,
    color: "#a78bfa", // experiment violet
    status: "active",
  },
  {
    id: "vector-search",
    step: "05",
    label: "Vector Search",
    tagline: "Semantic Index · Embeddings",
    role: "Cosine Top-K Retrieval",
    detail: "High-dimensional similarity indexing and grounded context lookup.",
    icon: FileSearch,
    color: "#38bdf8", // sky blue
    status: "indexed",
  },
];

// Telemetry events cycling to simulate real-time AI & data operations
const TELEMETRY_FEED = [
  {
    nodeIndex: 0,
    prefix: "Client UI",
    message: "Next.js dispatching query → user prompt initialized",
  },
  {
    nodeIndex: 1,
    prefix: "API Layer",
    message: "FastAPI authenticated request · routed to worker queue in 12ms",
  },
  {
    nodeIndex: 2,
    prefix: "Database",
    message: "PostgreSQL session loaded · Redis cache hit for prompt context",
  },
  {
    nodeIndex: 3,
    prefix: "Alaya AI",
    message: "Document chunks ingested → 1536d text embeddings computed",
  },
  {
    nodeIndex: 4,
    prefix: "Vector Index",
    message: "Cosine top-3 semantic match retrieved in 18ms · context grounded",
  },
];

export default function SystemVisual() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Cycle telemetry and active node gently every 3.6 seconds
  useEffect(() => {
    // Respect reduced-motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      // Don't advance if user is actively inspecting a node
      if (hoveredNode === null) {
        setActiveStep((prev) => (prev + 1) % TELEMETRY_FEED.length);
      }
    }, 3600);

    return () => clearInterval(timer);
  }, [hoveredNode]);

  // If a node is hovered, highlight that node; otherwise highlight the active telemetry node
  const highlightedIndex =
    hoveredNode !== null ? hoveredNode : TELEMETRY_FEED[activeStep].nodeIndex;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Subtle outer glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-surface-2/40 opacity-70 blur-xl"
      />

      {/* Main system card */}
      <div className="relative rounded-2xl border border-hairline bg-surface/85 p-4 shadow-glass backdrop-blur-md sm:p-5">
        {/* Card Header: OS-style bar */}
        <div className="flex items-center justify-between border-b border-hairline pb-3.5">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-hairline-strong" />
              <span className="h-2 w-2 rounded-full bg-hairline-strong" />
              <span className="h-2 w-2 rounded-full bg-hairline-strong" />
            </span>
            <span className="ml-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-faint">
              System Architecture
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-hairline bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] text-fg-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            <span>telemetry live</span>
          </div>
        </div>

        {/* System Diagram Grid:
            Row 1: [01 Frontend]  ──(HTTP/WS)──>  [02 API Gateway]
            Row 2: [03 Database]  ◄─(Grounding)─  [04 AI Pipeline]
            Row 3: [05 Vector Search & Semantic Retrieval]
        */}
        <div className="mt-4 flex flex-col gap-2.5">
          {/* Row 1: Frontend & API */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {/* Node 01: Frontend */}
            <NodeCard
              node={SYSTEM_NODES[0]}
              isHighlighted={highlightedIndex === 0}
              onHover={() => setHoveredNode(0)}
              onLeave={() => setHoveredNode(null)}
            />

            {/* Node 02: API Gateway */}
            <NodeCard
              node={SYSTEM_NODES[1]}
              isHighlighted={highlightedIndex === 1}
              onHover={() => setHoveredNode(1)}
              onLeave={() => setHoveredNode(null)}
            />
          </div>

          {/* Inter-row data flow stream */}
          <div className="my-0.5 flex items-center justify-between px-3 text-fg-faint sm:px-6">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-fg-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              <span>HTTP / Sockets</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="120"
                height="10"
                viewBox="0 0 120 10"
                fill="none"
                className="overflow-visible"
              >
                <line
                  x1="0"
                  y1="5"
                  x2="120"
                  y2="5"
                  stroke="var(--hairline-strong)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="5"
                  x2="120"
                  y2="5"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="system-flow opacity-80"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-fg-faint">
              <span>Async Pipeline</span>
              <span className="h-1.5 w-1.5 rounded-full bg-live/70" />
            </div>
          </div>

          {/* Row 2: Database & AI Pipeline */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {/* Node 03: Database */}
            <NodeCard
              node={SYSTEM_NODES[2]}
              isHighlighted={highlightedIndex === 2}
              onHover={() => setHoveredNode(2)}
              onLeave={() => setHoveredNode(null)}
            />

            {/* Node 04: AI Pipeline */}
            <NodeCard
              node={SYSTEM_NODES[3]}
              isHighlighted={highlightedIndex === 3}
              onHover={() => setHoveredNode(3)}
              onLeave={() => setHoveredNode(null)}
            />
          </div>

          {/* Connective pipeline stem down to Vector Search */}
          <div className="my-0.5 flex items-center justify-center gap-2">
            <svg
              width="140"
              height="12"
              viewBox="0 0 140 12"
              fill="none"
              className="overflow-visible"
            >
              <path
                d="M15 0 V4 Q15 8 25 8 H115 Q125 8 125 4 V0 M70 8 V12"
                stroke="var(--hairline-strong)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M15 0 V4 Q15 8 25 8 H115 Q125 8 125 4 V0 M70 8 V12"
                stroke="var(--accent)"
                strokeWidth="1.25"
                strokeLinecap="round"
                fill="none"
                className="system-flow opacity-70"
              />
            </svg>
          </div>

          {/* Row 3: Vector Search (Full width span) */}
          <NodeCard
            node={SYSTEM_NODES[4]}
            isHighlighted={highlightedIndex === 4}
            onHover={() => setHoveredNode(4)}
            onLeave={() => setHoveredNode(null)}
            isFullWidth
          />
        </div>

        {/* Live Terminal / Telemetry Feed Footer */}
        <div className="mt-3.5 rounded-xl border border-hairline bg-surface-2/80 p-2.5 sm:px-3 sm:py-2">
          <div className="flex items-center gap-2">
            <Terminal size={13} className="shrink-0 text-accent" />
            <div className="flex min-w-0 flex-1 items-center gap-2 font-mono text-[11px]">
              <span className="shrink-0 font-semibold text-fg">
                [{TELEMETRY_FEED[activeStep].prefix}]
              </span>
              <span className="truncate text-fg-muted">
                {TELEMETRY_FEED[activeStep].message}
              </span>
            </div>
            <Activity size={12} className="shrink-0 animate-pulse text-live" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NodeCard({
  node,
  isHighlighted,
  onHover,
  onLeave,
  isFullWidth = false,
}) {
  const Icon = node.icon;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={
        "group relative flex flex-col justify-between rounded-xl border p-3 " +
        "transition-all duration-200 ease-premium cursor-default " +
        (isHighlighted
          ? "border-accent/40 bg-surface-2 shadow-raised ring-1 ring-accent/30 -translate-y-0.5"
          : "border-hairline bg-surface hover:border-hairline-strong hover:bg-surface-hover")
      }
    >
      {/* Top row: step, icon, label, status pill */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 " +
              (isHighlighted
                ? "border-accent/30 bg-accent-soft text-accent"
                : "border-hairline bg-surface-2 text-fg-muted group-hover:text-fg")
            }
          >
            <Icon size={14} />
          </span>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-fg-faint">
                {node.step}
              </span>
              <h3 className="text-xs font-semibold text-fg">{node.label}</h3>
            </div>
            <p className="font-mono text-[10.5px] text-accent/90">
              {node.tagline}
            </p>
          </div>
        </div>

        {/* Micro status badge */}
        <span
          className={
            "rounded px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wide transition-colors duration-200 " +
            (isHighlighted
              ? "bg-accent/15 text-accent border border-accent/30"
              : "bg-surface-2 text-fg-faint border border-hairline")
          }
        >
          {node.status}
        </span>
      </div>

      {/* Role / Tech description */}
      <div className="mt-2">
        <p className="text-[11px] leading-relaxed text-fg-muted">
          {isFullWidth ? (
            <>
              <span className="font-medium text-fg">{node.role}</span> —{" "}
              {node.detail}
            </>
          ) : (
            node.role
          )}
        </p>
      </div>

      {/* Subtle indicator bar on active */}
      <div
        className={
          "mt-2 h-0.5 w-full rounded-full transition-all duration-300 " +
          (isHighlighted ? "bg-accent opacity-90" : "bg-hairline opacity-40")
        }
      />
    </div>
  );
}
