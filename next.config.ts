/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // مهم: خروجی استاتیک
  basePath: isProd ? "/myprtfolio" : "",
  assetPrefix: isProd ? "/myprtfolio/" : "",
};

module.exports = nextConfig;
