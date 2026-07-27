// Minimal footer. No real links required this phase.
const links = ["GitHub", "LinkedIn", "Twitter", "Email", "Resume"];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Product Hub
        </p>
        <ul className="flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link}>
              <span className="text-sm text-neutral-600">{link}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
