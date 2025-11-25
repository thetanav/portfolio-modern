"use client";

import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";

export default function RecentlyPlayed() {
  const [nowPlaying, setNowPlaying] = useState<{
    isPlaying: boolean;
    title?: string;
    artist?: string;
    songUrl?: string;
  } | null>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<{
    recentlyPlayed: {
      title: string;
      artist: string;
      songUrl: string;
    }[];
  } | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing");
        const json = await res.json();
        setNowPlaying(json);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchRecentlyPlayed = async () => {
      try {
        const res = await fetch("/api/recently-played");
        const json = await res.json();
        setRecentlyPlayed(json);
      } catch (e) {
        console.error(e);
      }
    };

    fetchNowPlaying();
    fetchRecentlyPlayed();

    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  const track = nowPlaying?.isPlaying
    ? {
        title: nowPlaying.title,
        artist: nowPlaying.artist,
        songUrl: nowPlaying.songUrl,
        isNowPlaying: true,
      }
    : recentlyPlayed?.recentlyPlayed?.[0]
    ? { ...recentlyPlayed.recentlyPlayed[0], isNowPlaying: false }
    : null;

  if (!track) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium text-[var(--text-muted)]">
        {track.isNowPlaying ? "Now Playing" : "Recently Played"}
      </h3>
      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors truncate max-w-full">
        <SiSpotify className="h-4 w-4 shrink-0 text-[#1DB954]" />
        <span className="truncate">
          <span className="font-medium text-[var(--text)]">{track.title}</span>
          <span className="mx-1.5 text-[var(--border)]">/</span>
          <span>{track.artist}</span>
        </span>
      </a>
    </div>
  );
}
