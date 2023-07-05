/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/strategija',
        destination: 'https://calendly.com/rjsaulitis/strategijas-sesija',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig
