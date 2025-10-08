import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lavillaesthetique-toulouse.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/_next/',
          '/static/',
          '/node_modules/',
          '/test-*',
          '/*.json$',
          '/*?*debug*',
          '/*?*dev*',
        ],
      },
      // Règles spécifiques pour les bots de moteurs de recherche principaux
      {
        userAgent: ['Googlebot', 'Bingbot', 'YandexBot', 'DuckDuckBot'],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
        crawlDelay: 1,
      },
      // Règles pour les bots d'IA - Autorise le contenu médical expert
      {
        userAgent: 'GPTBot',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/docteur-laser',
          '/la-villa-esthetique',
          '/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/docteur-laser',
          '/la-villa-esthetique',
          '/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'CCBot',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/docteur-laser',
          '/la-villa-esthetique',
          '/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: ['anthropic-ai', 'Claude-Web'],
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/docteur-laser',
          '/la-villa-esthetique',
          '/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/blog/sitemap.xml`,
    ],
    host: baseUrl,
  };
}