import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lume-lms-video.fly.storage.tigris.dev",
        port: "",
        protocol: "https",
      },
      {
        hostname: "lume-lms-video.t3.storageapi.dev",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
