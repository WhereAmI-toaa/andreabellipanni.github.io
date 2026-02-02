/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\\/+|\\/+$/g, '')}`
  : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
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
