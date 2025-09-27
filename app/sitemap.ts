import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lavillaesthetique-toulouse.com'
  
  // Pages principales du site
  const routes = [
    '',
    '/actes',
    '/docteur-laser',
    '/la-villa-esthetique',
    '/blog',
    '/a-propos',
    '/on-parle-de-nous',
    '/contact'
  ]

  // Pages de soins spécifiques
  const treatmentRoutes = [
    '/actes/injections-anti-age',
    '/actes/morpheus-8',
    '/actes/hydrafacial',
    '/actes/epilation-laser-clarity',
    '/actes/cryolipolyse',
    '/actes/lumiere-pulsee-lumecca',
    '/actes/laser-co2-deka',
    '/actes/cristal-fit'
  ]

  // Génération du sitemap
  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : route.startsWith('/actes') ? 0.8 : 0.7,
  }))

  const treatmentPages = treatmentRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...treatmentPages
  ]
}