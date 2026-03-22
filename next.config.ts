import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/portfolio-chatbot/:path*',
        destination: 'http://portfolio-chatbot.hidayatmauluddin.my.id:50271/:path*',
      },
    ];
  },
  // You can also add other configurations here if needed
};

export default nextConfig;