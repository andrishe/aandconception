import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'optwtfjlxkxfegfevyio.supabase.co',
        pathname: '/storage/v1/object/public/posts-images/**',
      },
    ],
  },
};

export default nextConfig;
