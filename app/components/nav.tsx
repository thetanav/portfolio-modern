import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blogs",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-3 py-2 text-sm">
      <ThemeToggle />
      <div className="flex items-center gap-1.5 sm:gap-3">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-[color:var(--text-muted)] transition-all opacity-50 hover:opacity-100">

              {name}
            </Link>
          );
        })}
        <a
          href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-[color:var(--text-muted)] transition-all opacity-50 hover:opacity-100">
          resume
        </a>
      </div>
    </nav>
  );
}
