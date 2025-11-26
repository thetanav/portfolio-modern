"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted we have access to the theme, before that avoid mismatches
  useEffect(() => setMounted(true), []);

  const current = resolvedTheme || theme || "light";

  const toggleTheme = () => {
    setTheme(current === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-6 w-6 items-center justify-center text-[color:var(--text)] shadow-[0_18px_60px_-50px_rgba(15,23,42,0.85)] transition-all hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-[rgb(var(--accent-rgb))]">
      {mounted && current === "light" ? (
        <MoonIcon className="w-4 h-4" />
      ) : (
        <SunIcon className="w-4 h-4" />
      )}
    </button>
  );
}
