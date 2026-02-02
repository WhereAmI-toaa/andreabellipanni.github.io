/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly configure Turbopack to avoid the Next.js 16 warning when a webpack config exists.
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb$/,
      type: 'asset/resource'
    })

    return config
  }
}

module.exports = nextConfig
