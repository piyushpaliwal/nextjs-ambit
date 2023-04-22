/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ambitkpo.com',
  generateRobotsTxt: true,
  autoLastmod: false,
  exclude: ['/thank-you']
}
