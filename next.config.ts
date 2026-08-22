import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export -> ./out, which is what GitHub Pages serves.
  output: "export",
  // Emit /terms/index.html instead of /terms.html so GitHub Pages
  // resolves clean URLs without a server.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
