import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/projects': {
    name: 'projects',
  }
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-300 flex align-middle relative py-1 px-2 group flex flex-col"
                >
                  {name}
                  <div className="bg-neutral-200 h-[2px] w-0 group-hover:w-full transition-all duration-500 flex"></div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
