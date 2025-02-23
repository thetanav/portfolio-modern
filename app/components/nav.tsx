import Link from "next/link";

const navItems = {
  "/": {
    name: "me",
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
    <nav className="fixed top-0 z-10 w-full h-12 bg-black/70 backdrop-blur-md animate-in fade-in-5 flex items-center justify-center">
      <div className="flex w-full h-full">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-colors text-neutral-500 hover:text-white flex align-middle relative py-1 px-2 group flex-col text-sm items-center justify-center">
              {name}
            </Link>
          );
        })}
        {/* <a
              href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
              className="transition-colors text-neutral-500 hover:text-white flex align-middle relative py-1 px-2 group flex-col items-center justify-center"
            >
              resume
            </a> */}
      </div>
    </nav>
  );
}
