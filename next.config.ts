import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/myprtfolio" : "",
  assetPrefix: isProd ? "/myprtfolio/" : "",
};
const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
};

export default nextConfig;
