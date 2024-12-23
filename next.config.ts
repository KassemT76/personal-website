import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'carleton.ca',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'marketplace.canva.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'robotics.nasa.gov',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        search: '',
      },
    ],
  },
}

export default nextConfig;
