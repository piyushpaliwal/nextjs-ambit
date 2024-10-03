/** @type {import('next').NextConfig} */
const nextConfig = {
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
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
