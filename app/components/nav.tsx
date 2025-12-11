"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blogs",
  },
  "/projects": {
    name: "Projects",
  },
  "/experience": {
    name: "Experience",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="flex items-center gap-4 text-sm font-medium overflow-hidden">
      {Object.entries(navItems).map(([path, { name }], index) => {
        return (
          <div key={path}>
            <Link
              href={path}
              className="transition-colors text-[var(--text-muted)] hover:text-[var(--text)]">
              {name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
