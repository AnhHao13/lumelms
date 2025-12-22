
// import { PrismaClient } from "./generated/prisma";
// import { PrismaPg } from "@prisma/adapter-pg";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter: new PrismaPg({
//       connectionString: process.env.DATABASE_URL,
//     }),
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
import { PrismaClient } from "./generated/prisma"; // Import chuẩn từ @prisma/client (thay thế "./generated/prisma" nếu không dùng custom output)
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws; // Cấu hình WebSocket cho kết nối serverless

// Optional: Cho môi trường edge/serverless như Cloudflare hoặc Vercel Edge
// neonConfig.poolQueryViaFetch = true;

const connectionString = process.env.DATABASE_URL!; // Lấy từ .env hoặc env vars

const adapter = new PrismaNeon({ connectionString });

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;