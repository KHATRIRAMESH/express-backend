// Drizzle example with the Neon serverless driver
import { setGlobalDispatcher, Agent } from "undici";
setGlobalDispatcher(new Agent({ connect: { family: 4 } }));
import "dotenv/config.js";
import { neonConfig, neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);