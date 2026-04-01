import type { NextConfig } from "next";

/**
 * KTech Portfolio — Next.js Configuration (Sprint 2.0 Revision)
 * Focus: Webpack bundler, Standalone output for Docker, MUI compatibility
 */
const nextConfig: NextConfig = {
  // Required for Docker multi-stage build (Dockerfile Stage 3)
  output: "standalone",
  
  // MUI v7 Transpilation §lib-theme config
  transpilePackages: ["@mui/material", "@mui/system", "@emotion/react", "@emotion/styled"],

  // Image performance §3.10 metadata. check domain later.
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  
  // Experimental flags could go here
};

export default nextConfig;
