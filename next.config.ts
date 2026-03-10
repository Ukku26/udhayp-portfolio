import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow fetching Medium RSS feed from external origin
  async headers() {
    return [];
  },
};

export default nextConfig;
