import { neonConfig, Pool } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import { logger } from "../modules/logger";

neonConfig.webSocketConstructor = ws;

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const db = drizzle(pool);

export async function checkDbConnection() {
  try {
    await db.execute(sql`select 1`);
    logger.info(`Database Connection Successful`);
  } catch (error) {
    logger.error("Connection failed: ", error);
  }
}
