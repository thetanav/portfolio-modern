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
    <div className="fixed top-0 z-10 w-full h-16 bg-black/70 backdrop-blur-md">
      <nav
        className="flex animate-in h-full fade-in-5 md:overflow-auto scroll-pr-6 md:relative flex-auto max-w-screen-md mx-auto md:px-0">
        <div className="flex items-center justify-start w-full h-full">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-colors text-neutral-500 hover:text-white flex align-middle relative py-1 px-2 group flex-col items-center justify-center">
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
    </div>
  );
}
