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
    <nav className="">
      <nav className="max-w-xl mx-auto flex items-center justify-between px-4 py-4 h-14 overflow-hidden">
        <ThemeToggle />
        <div className="flex gap-3">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-colors flex align-middle relative group flex-col text-sm items-center justify-center"
                style={{ color: 'var(--text)' }}
              >
                {name}
              </Link>
            );
          })}
          <a
            href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors flex align-middle relative group flex-col text-sm items-center justify-center"
            style={{ color: 'var(--text)' }}
          >
            resume
          </a>
        </div>
      </nav>
    </nav>
  );
}
