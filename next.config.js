const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static export
  basePath: process.env.NODE_ENV === 'production' ? '/zakteck' : '',
  trailingSlash: true,  
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
