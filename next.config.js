/** @type {import('next').NextConfig} */
const withPurgeCss = require("next-purgecss");
const nextConfig = {
  swcMinify: true
  // reactStrictMode: true,
};

module.exports = withPurgeCss(nextConfig);
