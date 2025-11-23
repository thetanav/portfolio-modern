import { getRecentlyPlayed } from "../../../lib/spotify";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const response = await getRecentlyPlayed();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ recentlyPlayed: [] });
  }

  const data = await response.json();
  const tracks = data.items.slice(0, 5).map((item: any) => ({
    title: item.track.name,
    artist: item.track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: item.track.external_urls.spotify,
  }));

  return NextResponse.json({ recentlyPlayed: tracks });
}
