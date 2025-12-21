import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET(request: Request) {
  const now = Date.now();
  const windowMs = 24 * 60 * 60 * 1000;
  const cutoff = now - windowMs;

  if (request.url.includes("localhost")) {
    console.log("dev");
    return Response.json({ count: "dev" });
  }

  // Add new view with timestamp
  await redis.zadd("views24", {
    score: now,
    member: `view-${now}`,
  });

  // Remove entries older than 24h
  await redis.zremrangebyscore("views24", 0, cutoff);

  // Count only the last 24h
  const count = await redis.zcount("views24", cutoff, now);

  return Response.json({ count });
}
