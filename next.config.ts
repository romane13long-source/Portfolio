import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true"

const nextConfig: NextConfig = {
  devIndicators: false,
  // Activé uniquement pour GitHub Pages (STATIC_EXPORT=true dans le workflow)
  ...(isStaticExport && {
    output: "export",
    basePath: "/Portfolio",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
