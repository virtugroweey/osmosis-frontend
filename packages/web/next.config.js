/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'app.osmosis.zone'],
  },
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
