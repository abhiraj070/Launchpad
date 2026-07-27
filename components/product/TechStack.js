// Compact technology chips. Technology supports the story — it doesn't lead —
// so this stays quiet: small monospace pills, no logos, no version noise.
export default function TechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-lg border border-hairline bg-surface px-3 py-1.5 font-mono text-[13px] text-fg-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
