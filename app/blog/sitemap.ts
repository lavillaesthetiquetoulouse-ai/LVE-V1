import { MetadataRoute } from 'next';
import { getBlogPosts, getBlogCategories } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const [posts, categories] = await Promise.all([
      getBlogPosts(),
      getBlogCategories()
    ]);

    const baseUrl = 'https://lavillaesthetique-toulouse.com';
    const now = new Date();

    // Page principale du blog
    const blogMainPage = {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    };

    // Articles de blog avec priorités basées sur la fraîcheur et la catégorie
    const blogPosts = posts.map((post) => {
      const postDate = new Date(post.published_at);
      const daysSincePublished = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));

      // Priorité plus élevée pour les articles récents et certaines catégories importantes
      let priority = 0.8;
      if (daysSincePublished <= 30) priority = 0.9; // Articles récents
      else if (daysSincePublished <= 90) priority = 0.8;
      else if (daysSincePublished <= 180) priority = 0.7;
      else priority = 0.6;

      // Boost pour certaines catégories importantes pour le business
      const importantCategories = ['Injections', 'Laser', 'Morpheus 8', 'Radiofréquence'];
      if (importantCategories.includes(post.category)) {
        priority = Math.min(priority + 0.1, 1.0);
      }

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at),
        changeFrequency: daysSincePublished <= 30 ? 'weekly' as const : 'monthly' as const,
        priority: Math.round(priority * 10) / 10, // Arrondir à 1 décimale
      };
    });

    // Pages de catégories du blog (si applicable)
    const categoryPages = categories
      .filter(cat => cat !== 'Tous les articles')
      .map((category) => ({
        url: `${baseUrl}/blog?category=${encodeURIComponent(category)}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    return [
      blogMainPage,
      ...blogPosts,
      ...categoryPages,
    ];

  } catch (error) {
    console.error('Erreur lors de la génération du sitemap blog:', error);

    // Fallback en cas d'erreur
    return [
      {
        url: 'https://lavillaesthetique-toulouse.com/blog',
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }
    ];
  }
}