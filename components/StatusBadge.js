// Small status badge. Neutral styling only — no fancy colors this phase.
export default function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-600">
      {status}
    </span>
  );
}
