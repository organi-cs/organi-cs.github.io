/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for SEO and GitHub Pages
}

module.exports = nextConfig
