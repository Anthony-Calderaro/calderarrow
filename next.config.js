module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { dev, isServer }) => {
    require('./lib/generateRSS');
    return config;
  }
};