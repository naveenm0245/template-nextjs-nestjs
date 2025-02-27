import { defineConfig } from "drizzle-kit";
import "dotenv/config"

export default defineConfig({
  schema: "./src/lib/db/schema",
  dialect: "postgresql",
  out: "./src/lib/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
});