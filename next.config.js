/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['package-name'],
  },
};

module.exports = nextConfig;