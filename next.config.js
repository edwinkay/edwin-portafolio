const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
};




