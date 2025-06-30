import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://i.imgur.com/**'), 
      new URL('https://placeimg.com/**'), 
      new URL('https://pravatar.cc/**'),
      new URL('https://picsum.photos/**')
    ]
  }
  /* config options here */
};

export default nextConfig;
