/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/blaze-sebastian", // Change to match your GitHub repo name
  assetPrefix: "/blaze-sebastian/", // Ensure assets are loaded from the correct path
  images: {
    unoptimized: true, // Since GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
