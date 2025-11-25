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
  "/experience": {
    name: "experience",
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
    </nav>
  );
}
