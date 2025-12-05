import { getRecentlyPlayed } from "../../../lib/spotify";
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const runtime = "edge";

export async function GET() {
  try {
    const cached = (await redis.get("last-played")) as string;
    if (cached) {
      return NextResponse.json(cached);
    }
    const response = await getRecentlyPlayed();

    if (response.status === 204 || response.status > 400) {
      await redis.setex("last-played", 3600, JSON.stringify(null));
      return NextResponse.json(null);
    }

    const apiData = await response.json();
    const tracks = apiData.items.slice(0, 1).map((item: any) => ({
      title: item.track.name,
      artist: item.track.artists.map((_artist: any) => _artist.name).join(", "),
      songUrl: item.track.external_urls.spotify,
    }));

    const data = tracks[0];
    await redis.setex("last-played", 3600, JSON.stringify(data));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching recently played:", error);
    return NextResponse.json(null);
  }
}
