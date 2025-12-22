import 'dotenv/config'; // Loads environment variables from .env
import { defineConfig, env } from 'prisma/config'; // Import from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma', // Path to your schema file (relative to prisma.config.ts)
  migrations: {
    path: 'prisma/migrations', // Directory for migration files
    // seed: 'tsx prisma/seed.ts' // Optional: Path to seed script
  },
  datasource: {
    url: env('DATABASE_URL') // Required: Uses env() for safe access to DATABASE_URL
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL') // Optional: For migration shadow DB
  }
  // Add other optional sections if needed (e.g., experimental features)
});