import {
  Zap,
  Layers,
  Shield,
  Sparkles,
  Radio,
  Boxes,
  Globe,
  Wand2,
} from "lucide-react";

// Capabilities as cards, not a bullet list. Each card gets an accent-tinted
// icon chip. Icons cycle from a neutral set so the data stays icon-free.
const iconCycle = [Sparkles, Zap, Layers, Radio, Shield, Globe, Wand2, Boxes];

export default function Capabilities({ features, accent }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => {
        const Icon = iconCycle[i % iconCycle.length];
        return (
          <div
            key={feature.title}
            className="rounded-2xl border border-hairline bg-surface p-5 shadow-soft transition-colors duration-300 hover:border-hairline-strong"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl border"
              style={{
                color: accent,
                backgroundColor: `${accent}14`,
                borderColor: `${accent}2e`,
              }}
            >
              <Icon size={17} />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold text-fg">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
