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

  // Configuration d'images optimisée pour Supabase
  images: {
    domains: [
      'fbslsxzirjpyzgqbdkfe.supabase.co',
      'images.unsplash.com'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },

  // Optimisation expérimentale
  experimental: {
    isrMemoryCacheSize: 50 * 1024 * 1024, // 50MB
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },

  // Headers de sécurité
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
