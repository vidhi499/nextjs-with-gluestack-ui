/** @type {import('next').NextConfig} */
const { withGluestackUI } = require("@gluestack/ui-next-adapter");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui-compiled"],
};

module.exports = withGluestackUI(nextConfig);
