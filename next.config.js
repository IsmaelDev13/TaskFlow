/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["cloud.appwrite.io", "links.papareact.com"],
  },
};

module.exports = nextConfig;
