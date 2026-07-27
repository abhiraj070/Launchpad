import StatusBadge from "@/components/StatusBadge";

// Current maturity of the project: the status badge plus a short, honest note
// about where the product actually stands.
export default function StatusPanel({ status, note }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <StatusBadge status={status} />
        <span className="text-sm font-medium text-fg">{maturityLabel(status)}</span>
      </div>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
        {note}
      </p>
    </div>
  );
}

function maturityLabel(status) {
  switch (status) {
    case "Live":
      return "Deployed and usable";
    case "Building":
      return "In active development";
    default:
      return "Experimental";
  }
}
