import Link from "next/link";

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
    <nav className="flex items-center gap-4 text-sm font-medium text-[var(--text-muted)]">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className="transition-colors hover:text-[var(--text)]">
            {name}
          </Link>
        );
      })}
      <a
        href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="transition-colors hover:text-[var(--text)]">
        resume
      </a>
    </nav>
  );
}
