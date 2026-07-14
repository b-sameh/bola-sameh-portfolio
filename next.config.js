/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/bola-sameh-portfolio',
  assetPrefix: '/bola-sameh-portfolio/',
};

module.exports = nextConfig;
