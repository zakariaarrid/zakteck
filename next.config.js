const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //output: "export", // Enables static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/zakteck' : '', // Only if deploying to GitHub Pages in a repo that's not username.github.io
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
