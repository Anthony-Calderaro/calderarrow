const preact = require('preact');
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  experimental: {
    modern: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { dev, isServer }) => {
    require('./lib/generateRSS');
    return config;
  }
});