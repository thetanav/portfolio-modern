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
    <nav className="fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-lg">
      <nav className="max-w-xl mx-auto flex items-center justify-end px-4 py-4 h-14 overflow-hidden">
        <div className="flex gap-3">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-colors hover:text-black text-black/60 flex align-middle relative group flex-col text-sm items-center justify-center ">
                {name}
              </Link>
            );
          })}
          <a
            href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors hover:text-black text-black/60 flex align-middle relative group flex-col text-sm items-center justify-center">
            resume
          </a>
        </div>
      </nav>
    </nav>
  );
}
