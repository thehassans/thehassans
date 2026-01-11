import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udemy-certificate.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
