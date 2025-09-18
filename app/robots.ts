import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/.*',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/',
        ],
      },
      {
        userAgent: 'CCBot',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/',
        ],
      },
      {
        userAgent: 'anthropic-ai',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/blog/',
          '/actes/',
          '/a-propos',
          '/contact',
          '/',
        ],
      },
    ],
    sitemap: [
      'https://cheery-quokka-7f67a2.netlify.app/sitemap.xml',
      'https://cheery-quokka-7f67a2.netlify.app/blog/sitemap.xml',
    ],
    host: 'https://cheery-quokka-7f67a2.netlify.app',
  };
}