import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/blaze-sebastian",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
