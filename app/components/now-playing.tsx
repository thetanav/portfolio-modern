"use client";

import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";

export default function NowPlaying() {
  const [data, setData] = useState<{
    isPlaying: boolean;
    title?: string;
    artist?: string;
    songUrl?: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/now-playing");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data?.isPlaying) {
    return (
      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
        <SiSpotify className="h-4 w-4" />
        <span>Not Playing</span>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors truncate max-w-full">
      <SiSpotify className="h-4 w-4 shrink-0 text-[#1DB954]" />
      <span className="truncate">
        <span className="font-medium text-[var(--text)]">{data.title}</span>
        <span className="mx-1.5 text-[var(--border)]">/</span>
        <span>{data.artist}</span>
      </span>
    </a>
  );
}
