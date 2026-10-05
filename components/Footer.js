import Link from "next/link";
import { Rocket } from "lucide-react";
import Container from "@/components/ui/Container";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/abhiraj070",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhiraj-sharma-6a206424b/",
    external: true,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/abhiraj070",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:iamabhirajsharma@gmail.com",
    external: false,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1S2w0pLS4hj7IFQkux1sCIIhY3eG3bIa3/view?usp=drive_link",
    external: true,
  },
];

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
            <p className="text-xs text-fg-faint" suppressHydrationWarning>
              © {new Date().getFullYear()} — Built for launching products.
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
