import Link from "next/link";
import { Rocket } from "lucide-react";
import Container from "@/components/ui/Container";

// Minimal footer. No real links required this phase.
const links = ["GitHub", "LinkedIn", "Twitter", "Email", "Resume"];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-hairline py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-[#0a0a0b]">
            <Rocket size={15} />
          </span>
          <div>
            <p className="text-sm font-semibold text-fg">Launchpad</p>
            <p className="text-xs text-fg-faint">
              © {new Date().getFullYear()} — Built for launching products.
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link}>
              <Link
                href="#"
                className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
