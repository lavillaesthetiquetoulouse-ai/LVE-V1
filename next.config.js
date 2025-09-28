/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode serveur pour ISR et blog temps réel
  output: 'standalone',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // Configuration d'images optimisée pour Netlify
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fbslsxzirjpyzgqbdkfe.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
    minimumCacheTTL: 31536000, // 1 an
  },

  // Optimisation expérimentale
  experimental: {
    isrMemoryCacheSize: 50 * 1024 * 1024, // 50MB
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },

  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Cache optimisé pour les images Supabase
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache pour les assets statiques
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Variables d'environnement publiques
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://lavillaesthetique-toulouse.com',
    NEXT_PUBLIC_SITE_NAME: 'La Villa Esthétique',
  },

  compress: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
