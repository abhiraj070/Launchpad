// Status badge with a meaningful semantic color + leading dot.
// Colors are the only non-orange accents in the system, and they carry meaning.
const statusStyles = {
  Live: { dot: "bg-live", text: "text-live", ring: "ring-live/20" },
  Building: {
    dot: "bg-building",
    text: "text-building",
    ring: "ring-building/20",
  },
  Experiment: {
    dot: "bg-experiment",
    text: "text-experiment",
    ring: "ring-experiment/20",
  },
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || statusStyles.Experiment;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${style.ring} ${style.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}
