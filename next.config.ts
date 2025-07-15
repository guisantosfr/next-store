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
      new URL('https://imgs.search.brave.com/**'),
      new URL('https://giftdev.ru/**'),
      new URL('https://upload.wikimedia.org/**'),
      new URL('https://i.dailymail.co.uk/**'),
      new URL('https://m.media-amazon.com/**'),
      new URL('https://labyby.shop/**'),
      new URL('https://image.stern.de/**'),
      new URL('https://image.stern.de/**'),
      new URL('https://pisces.bbystatic.com/**'),
      new URL('https://placehold.co/**'),
      new URL('https://snocks.com/**'),
      new URL('https://gas-kvas.com/**'),
      new URL('https://www.eibabo.de/**'),
      new URL('https://pm1.aminoapps.com/**'),
      new URL('https://www.buildingourzoo.com/**'),
      new URL('https://images.firma-gamma.ru/**'),
      new URL('https://i0.wp.com/**'),
      new URL('https://gummy.com.ua/**'),
      new URL('https://books.goalkicker.com/**'),
      new URL('https://cdn.example.com/**'),
      new URL('https://i0.wp.com/**'),

    ]
  }
  /* config options here */
};

export default nextConfig;
