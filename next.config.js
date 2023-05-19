/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn3d.iconscout.com", "static.vecteezy.com"],
  },
};

module.exports = nextConfig;
