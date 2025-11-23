"use client";

import { useEffect, useRef } from "react";

export default function Oneko() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const isReducedMotion =
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    if (isReducedMotion) return;

    const script = document.createElement("script");
    script.src =
      "https://raw.githubusercontent.com/adryd325/oneko.js/master/oneko.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
