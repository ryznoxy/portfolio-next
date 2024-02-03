/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxgsqxdi3/**",
      },
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "cdn.sanity.io",
      }
    ],
  },
};

module.exports = nextConfig;
