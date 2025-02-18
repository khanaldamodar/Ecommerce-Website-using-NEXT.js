import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const connection = postgres("postgresql://postgres.sntpqclsqtvpiyqktznj:Deepak831@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

export const db = drizzle(connection)