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
      <AnimatePresence>
        {!isHome && (
          <motion.div
            key="back"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}>
            <Link
              href="/"
              className="text-[var(--text-muted)] hover:text-[var(--text)] flex items-center justify-center gap-1">
              <ChevronLeft /> Back
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {Object.entries(navItems).map(([path, { name }], index) => {
        return (
          <motion.div
            key={path}
            layoutId={name}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: (index + 1) * 0.1,
            }}>
            <Link
              href={path}
              className="transition-colors text-[var(--text-muted)] hover:text-[var(--text)]">
              {name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
