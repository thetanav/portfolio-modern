"use client";

import { MoonIcon, MoonStar, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-6 w-6 items-center justify-center text-[color:var(--text)] shadow-[0_18px_60px_-50px_rgba(15,23,42,0.85)] transition-all hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-[rgb(var(--accent-rgb))]">
      {theme === "light" ? (
        <MoonIcon className="w-4 h-4" />
      ) : (
        <SunIcon className="w-4 h-4" />
      )}
    </button>
  );
}
