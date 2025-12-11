"use client";
import { EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ViewsLast24() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/view-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="px-6 py-3 border border-[var(--border)] rounded-full text-[var(--text-muted)] inline items-center justify-center text-sm">
      You are the <span className="font-bold text-[var(--text)]">{count}</span>
      th viewer in last 24 hours
    </div>
  );
}
