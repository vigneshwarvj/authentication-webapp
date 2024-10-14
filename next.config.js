/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    async rewrites() {
      return [
        {
          source: '/auth/reset-password',
          destination: '/auth/reset-password',
        },
      ];
    },
  };
