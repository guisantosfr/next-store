import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://i.imgur.com/**'), 
      new URL('https://placeimg.com/**'), 
      new URL('https://pravatar.cc/**'),
      new URL('https://picsum.photos/**'),
      new URL('https://assets.stickpng.com/**'),
      new URL('https://plus.unsplash.com/**'),
      new URL('https://dosi-in.com/**'),
      new URL('https://api.escuelajs.co/**'),
      new URL('https://th.bing.com/**'),
    ]
  }
  /* config options here */
};

export default nextConfig;
