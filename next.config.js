const preact = require('preact');
const withPreact = require('next-plugin-preact');

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control', // Allows browsers to prefetch external links/images/etc. Reduces latency when a user clicks
    value: 'on'
  },
  {
    key: 'X-XSS-Protection', // Legacy protection against XSS attacks
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options', // Prevents click hijacking via iframes, could use frame-ancestors in CSP
    value: 'SAMEORIGIN'
  },
  // {
  //   key: 'Permissions-Policy', // Controls what APIs can be controlled Todo: Look into this
  //   value: 'camera=(), microphone=(), geolocate=()'
  // },
  {
    key: 'X-Content-Type-Options', // Controls whether the content type can be inferred // Todo: look into this
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy', // Controls information communicated to other origins. // Todo: look into this
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy', // Protects against XSS
    value: '' // Todo: Add 
  },
];
module.exports = withPreact({
  experimental: {
    modern: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { dev, isServer }) => {
    require('./utilities/generateRSS');
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in the application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
});