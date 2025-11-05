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
    <nav className="flex items-center justify-between rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-2 text-sm shadow-[0_18px_60px_-50px_rgba(15,23,42,0.7)] backdrop-blur-xl">
      <ThemeToggle />
      <div className="flex items-center gap-1.5 sm:gap-3">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="flex items-center rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition-all hover:bg-[rgba(var(--accent-rgb),0.12)] hover:text-[color:var(--text)]">
              {name}
            </Link>
          );
        })}
        <a
          href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition-all hover:bg-[rgba(var(--accent-rgb),0.12)] hover:text-[color:var(--text)]">
          resume
        </a>
      </div>
    </nav>
  );
}
