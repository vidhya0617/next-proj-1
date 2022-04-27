/* eslint-disable import/no-extraneous-dependencies */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  i18n: {
    locales: ["en-in", "hi-in", "mr-in"],
    defaultLocale: "en-in",
  },
};
module.exports = withBundleAnalyzer(nextConfig);
