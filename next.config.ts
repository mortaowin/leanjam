import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Github Pages repository name is 'leanjam', so we need this base path for production
  basePath: process.env.NODE_ENV === 'production' ? '/leanjam' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/leanjam/' : '',
};

export default nextConfig;
