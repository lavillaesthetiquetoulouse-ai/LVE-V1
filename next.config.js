/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['framer-motion'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['fbslsxzirjpyzgqbdkfe.supabase.co', 'www.youtube.com', 'youtube.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fbslsxzirjpyzgqbdkfe.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: '*.youtube.com',
        pathname: '/**',
      }
    ]
  },
};

module.exports = nextConfig;
