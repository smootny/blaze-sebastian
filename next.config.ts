import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blaze-sebastian", // Change to match your GitHub repo name
  images: {
    unoptimized: true, // Since GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;

