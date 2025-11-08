// utils/RedisClient.js
import { createClient } from "redis";

let RedisClient;

if (process.env.NODE_ENV !== "production") {
  // Local development
  RedisClient = createClient({ url: "redis://localhost:6379" });
  RedisClient.on("error", (err) => console.error("Redis Client Error", err));
  await RedisClient.connect();
} else {
  console.log("⚠️ Skipping Redis connection in production (Vercel)");
  RedisClient = {
    keys: async () => [],
    del: async () => {},
  };
}

export default RedisClient;
