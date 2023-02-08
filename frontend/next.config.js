/** @type {import('next').NextConfig} */

const withExportImages = require('next-export-optimize-images')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = withExportImages(nextConfig);
