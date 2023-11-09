/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["links.papareact.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
