import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'globalinfoedge.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thetechuniqueacademy.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'enclave-studios.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unifiedmentor.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'canvaschrome.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'alaguts.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;