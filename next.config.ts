import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/latest-next-portfolio", // if not deploying to root
  assetPrefix: "/latest-next-portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
