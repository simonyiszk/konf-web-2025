import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "konf-api-staging.kir-dev.hu",
      },
      {
        protocol: "https",
        hostname: "konf-api.kir-dev.hu",
      },
      {
        protocol: "https",
        hostname: "warp.sch.bme.hu",
      },
    ],
  },
};

export default nextConfig;
