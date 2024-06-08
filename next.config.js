const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/edwin-portafolio' : '',
  assetPrefix: isProd ? '/edwin-portafolio/' : '',
};




