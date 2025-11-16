/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🟢 Required for static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // 🟢 Required for export to work without Image Optimization errors
  },
};

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}
