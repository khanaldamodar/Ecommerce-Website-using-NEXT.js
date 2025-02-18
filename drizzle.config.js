import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://postgres.sntpqclsqtvpiyqktznj:Deepak831@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
  },
});
