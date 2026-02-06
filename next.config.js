/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  swcMinify: true,
  // reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/marketing-agency-bookkeeping-service.php',
        destination: '/services/accounting-bookkeeping',
        permanent: true
      },
      {
        source: '/super-stores-bookkeeping-service.php',
        destination: '/services/accounting-bookkeeping',
        permanent: true
      },
      {
        source: '/chiropracters-bookkeeping-service.php',
        destination: '/services/accounting-bookkeeping',
        permanent: true
      },
      {
        source: '/laundry-bookkeeping-service.php',
        destination: '/services/accounting-bookkeeping',
        permanent: true
      },
      {
        source: '/job-openings.php',
        destination: '/contact',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
