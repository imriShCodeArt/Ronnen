/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    // localeDetection: false,
  },
  env: {
    NAVBAR_INLINE: 'NAVBAR_INLINE',
    NAVBAR_TOP: 'NAVBAR_TOP',
    NAVBAR_DRAWER: 'NAVBAR_DRAWER',
    NEXT_PUBLIC_WORDPRESS_API_URL: 'http://nextexample.local',
  },
}

module.exports = nextConfig
