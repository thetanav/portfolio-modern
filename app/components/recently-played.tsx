"use client";

import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { SquarePause, SquarePlay } from "lucide-react";

export default function RecentlyPlayed() {
  const [recentlyPlayed, setRecentlyPlayed] = useState<{
    title: string;
    artist: string;
    songUrl: string;
  } | null>(null);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      try {
        const res = await fetch("/api/recently-played", {
          cache: "force-cache",
        });
        const json = await res.json();
        setRecentlyPlayed(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRecentlyPlayed();
  }, []);

  const track = recentlyPlayed || null;
  const getEmbedUrl = (url: string) => {
    const match = url.match(/\/track\/([a-zA-Z0-9]+)/);
    return match ? `https://open.spotify.com/embed/track/${match[1]}` : null;
  };

  if (!track) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium text-[var(--text-muted)]">
        Recently Played
      </h3>
      <div className="flex items-center justify-between gap-2">
        <a
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors truncate max-w-full">
          <SiSpotify
            className={`h-4 w-4 shrink-0 text-[#1DB954] ${
              isPlayerVisible && "animate-spin duration-10000"
            }`}
          />
          <span className="truncate">
            <span className="font-medium text-[var(--text)]">
              {track.title}
            </span>
            <span className="mx-1.5 text-[var(--text)] opacity-40">/</span>
            <span>{track.artist}</span>
          </span>
        </a>
        <button
          onClick={() => setIsPlayerVisible(!isPlayerVisible)}
          className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          {isPlayerVisible ? (
            <SquarePause className="h-5 w-5" />
          ) : (
            <SquarePlay className="h-5 w-5" />
          )}
        </button>
      </div>
      {isPlayerVisible && getEmbedUrl(track.songUrl!) && (
        <iframe
          src={getEmbedUrl(track.songUrl!)!}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-2xl border border-[var(--border)] animate-in slide-in-from-top-2 slide-out-to-top-2 overflow-hidden"></iframe>
      )}
    </div>
  );
}
