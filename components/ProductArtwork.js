import { getCategoryMeta, getAccent } from "@/lib/design";

// --- Abstract, branded artwork -------------------------------------------
// No screenshots. Each category gets its own geometric motif that hints at the
// product's purpose and inherits the product's accent color (via currentColor).
// Motifs react subtly to the parent card's hover (`group`).

function AiMotif() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <g
        stroke="currentColor"
        strokeWidth="1.25"
        className="opacity-30 transition-opacity duration-500 group-hover:opacity-60"
      >
        <path d="M78 58 L162 40 M78 58 L162 96 M78 132 L162 96 M78 132 L162 150 M162 40 L246 74 M162 96 L246 74 M162 96 L246 128 M162 150 L246 128" />
      </g>
      <g fill="currentColor">
        <circle cx="78" cy="58" r="4" className="opacity-60" />
        <circle cx="78" cy="132" r="4" className="opacity-60" />
        <circle cx="162" cy="40" r="4" className="opacity-50" />
        <circle
          cx="162"
          cy="96"
          r="6"
          className="transition-transform duration-500 group-hover:-translate-y-1"
        />
        <circle cx="162" cy="150" r="4" className="opacity-50" />
        <circle cx="246" cy="74" r="5" className="opacity-90" />
        <circle cx="246" cy="128" r="4" className="opacity-60" />
      </g>
    </svg>
  );
}

function TravelMotif() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <g
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-15"
        strokeLinecap="round"
      >
        <path d="M20 60 C90 40 150 80 300 52" />
        <path d="M20 120 C120 100 200 140 300 116" />
      </g>
      <path
        d="M46 140 C104 60 176 150 274 48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 9"
        className="route-line opacity-90"
      />
      <g className="transition-transform duration-500 group-hover:scale-105">
        <circle cx="46" cy="140" r="5" fill="currentColor" />
        <g>
          <circle cx="274" cy="48" r="8" fill="currentColor" fillOpacity="0.16" />
          <circle cx="274" cy="48" r="4" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

function PoliticsMotif() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <path
        d="M110 62 L160 40 L210 62 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="opacity-80 transition-transform duration-500 group-hover:-translate-y-1"
      />
      <g stroke="currentColor" strokeWidth="1.5" className="opacity-45">
        <line x1="104" y1="72" x2="216" y2="72" />
        <line x1="96" y1="132" x2="224" y2="132" />
      </g>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-70">
        <line x1="120" y1="82" x2="120" y2="124" />
        <line x1="147" y1="82" x2="147" y2="124" />
        <line x1="173" y1="82" x2="173" y2="124" />
        <line x1="200" y1="82" x2="200" y2="124" />
      </g>
    </svg>
  );
}

function UtilitiesMotif() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <g stroke="currentColor" strokeWidth="1.25">
        <rect x="70" y="42" width="46" height="96" rx="8" className="opacity-35" />
        <rect x="128" y="42" width="122" height="26" rx="8" className="opacity-35" />
        <rect x="128" y="78" width="58" height="60" rx="8" className="opacity-30" />
        <rect
          x="198"
          y="78"
          width="52" height="60" rx="8"
          fill="currentColor"
          fillOpacity="0.1"
          className="opacity-45 transition-all duration-500 group-hover:opacity-80"
        />
      </g>
    </svg>
  );
}

function CodeMotif() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <rect
        x="70"
        y="36"
        width="180"
        height="108"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.25"
        className="opacity-35"
      />
      <line x1="70" y1="58" x2="250" y2="58" stroke="currentColor" strokeWidth="1.25" className="opacity-25" />
      <g fill="currentColor" className="opacity-60">
        <circle cx="84" cy="47" r="2.5" />
        <circle cx="94" cy="47" r="2.5" />
        <circle cx="104" cy="47" r="2.5" />
      </g>
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <line x1="86" y1="76" x2="126" y2="76" className="opacity-70" />
        <line x1="134" y1="76" x2="176" y2="76" className="opacity-30" />
        <line x1="86" y1="96" x2="112" y2="96" className="opacity-30" />
        <line x1="120" y1="96" x2="192" y2="96" className="opacity-70" />
        <line
          x1="86" y1="116" x2="150" y2="116"
          className="opacity-30 transition-all duration-500 group-hover:opacity-70"
        />
      </g>
      <line
        x1="160" y1="116" x2="160" y2="116"
        stroke="currentColor" strokeWidth="6" strokeLinecap="round"
        className="cursor-blink opacity-90"
      />
    </svg>
  );
}

function DrawMotif() {
  // A canvas + brush stroke + palette dabs — for drawing / party games.
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <rect
        x="66" y="40" width="150" height="100" rx="12"
        stroke="currentColor" strokeWidth="1.25" className="opacity-30"
      />
      <path
        d="M92 112 C110 70 132 130 150 92 S196 66 200 78"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round"
        className="route-line opacity-80"
      />
      <g className="transition-transform duration-500 group-hover:rotate-6" style={{ transformOrigin: "254px 90px" }}>
        <circle cx="254" cy="90" r="24" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <g fill="currentColor">
          <circle cx="246" cy="78" r="3.5" className="opacity-90" />
          <circle cx="264" cy="80" r="3.5" className="opacity-55" />
          <circle cx="268" cy="96" r="3.5" className="opacity-80" />
          <circle cx="248" cy="100" r="3.5" className="opacity-50" />
        </g>
      </g>
    </svg>
  );
}

function OrbitMotif() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      <ellipse cx="160" cy="90" rx="86" ry="46" stroke="currentColor" strokeWidth="1.25" className="opacity-30" />
      <circle cx="160" cy="90" r="7" fill="currentColor" className="opacity-90" />
      <g className="origin-center transition-transform duration-700 group-hover:rotate-45">
        <circle cx="246" cy="90" r="4" fill="currentColor" className="opacity-70" />
      </g>
    </svg>
  );
}

const motifs = {
  ai: AiMotif,
  travel: TravelMotif,
  politics: PoliticsMotif,
  utilities: UtilitiesMotif,
  code: CodeMotif,
  draw: DrawMotif,
  orbit: OrbitMotif,
};

// Standalone motif renderer — reused by the product showcase at large scale.
export function Motif({ category }) {
  const meta = getCategoryMeta(category);
  const Component = motifs[meta.motif] || OrbitMotif;
  return <Component />;
}

export default function ProductArtwork({ product, index = 0, className = "" }) {
  const color = getAccent(product);
  const glowX = index % 2 === 0 ? "30%" : "70%";

  return (
    <div
      className={`relative min-h-[132px] flex-1 overflow-hidden rounded-xl border border-hairline bg-surface-2 ${className}`}
      style={{ color }}
    >
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-300 ease-premium group-hover:opacity-100"
        style={{
          background: `radial-gradient(85% 85% at ${glowX} 12%, ${color}30, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="absolute inset-0 p-3">
        <Motif category={product.category} />
      </div>
    </div>
  );
}
