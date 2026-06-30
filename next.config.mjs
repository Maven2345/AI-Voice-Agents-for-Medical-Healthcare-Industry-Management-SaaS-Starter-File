/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to successfully complete
    // even with unused boilerplate parameters present
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keeps type safety on, only skipping the linter formatting rules
    ignoreBuildErrors: false,
  }
};

export default nextConfig;