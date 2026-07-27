// A concise, forward-looking list of where the product is headed.
export default function Roadmap({ items, accent }) {
  return (
    <ol className="space-y-4 border-l border-hairline pl-6">
      {items.map((item) => (
        <li key={item} className="relative">
          <span
            className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full"
            style={{ backgroundColor: accent, boxShadow: `0 0 0 4px ${accent}1f` }}
          />
          <p className="text-[15px] text-fg">{item}</p>
        </li>
      ))}
    </ol>
  );
}
