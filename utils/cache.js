const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

module.exports.redis = redis;

/**
 * Cache-aside helper: returns the cached value for `key` if present,
 * otherwise runs fetchFn(), caches the result for ttlSeconds, and returns it.
 *
 * Caching failures (Upstash down, network blip, etc.) never break the app —
 * they just fall through to fetchFn(), same as a cache miss.
 *
 * Used only for geocoding results (createListing). An earlier version also
 * cached the /listings read path with version-based invalidation, but under
 * sustained peak load testing it added outbound network calls on top of an
 * already-strained system without a clearly proven latency win, so that
 * part was reverted — descoped intentionally, not abandoned due to a bug.
 */
module.exports.cached = async function cached(key, ttlSeconds, fetchFn) {
  try {
    const hit = await redis.get(key);
    if (hit !== null && hit !== undefined) {
      console.log(`[cache] HIT ${key}`);
      return typeof hit === "string" ? JSON.parse(hit) : hit;
    }
  } catch (err) {
    console.error(`[cache] read error for ${key}:`, err.message);
  }

  console.log(`[cache] MISS ${key}`);
  const fresh = await fetchFn();

  try {
    await redis.set(key, JSON.stringify(fresh), { ex: ttlSeconds });
  } catch (err) {
    console.error(`[cache] write error for ${key}:`, err.message);
  }

  return fresh;
};
