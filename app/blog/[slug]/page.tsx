import { getBlogPostBySlug, getBlogPosts, BlogPost } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ShareButtons from './share-buttons'

// Générer les métadonnées dynamiques pour chaque article
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) {
      return {
        title: 'Article non trouvé - La Villa Esthétique',
        description: 'L\'article demandé n\'existe pas.',
      }
    }

    const baseUrl = 'https://lavillaesthetique-toulouse.com'

    return {
      title: post.meta_title || `${post.title} - La Villa Esthétique`,
      description: post.meta_description || post.excerpt,
      keywords: post.keywords || `médecine esthétique, ${post.category.toLowerCase()}, Dr Nadine Baron, Toulouse`,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.published_at,
        modifiedTime: post.updated_at,
        authors: [post.author],
        url: `${baseUrl}/blog/${post.slug}`,
        images: post.image_url ? [
          {
            url: post.image_url,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
        siteName: 'La Villa Esthétique',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.image_url ? [post.image_url] : [],
      },
      alternates: {
        canonical: `${baseUrl}/blog/${post.slug}`,
      },
      other: {
        'article:author': post.author,
        'article:published_time': post.published_at,
        'article:modified_time': post.updated_at,
        'article:section': post.category,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Erreur - La Villa Esthétique',
      description: 'Une erreur est survenue lors du chargement de l\'article.',
    }
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Composant pour afficher le contenu de l'article (statique)
function BlogPostContent({ post }: { post: BlogPost }) {
  const publishedDate = new Date(post.published_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-rose-600 hover:text-rose-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
          
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b pb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{publishedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.read_time} min de lecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image_url && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-lg prose-gray max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
            className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-left [&>p]:md:text-justify [&>ul]:mb-6 [&>li]:mb-2 [&>strong]:text-gray-900 [&>strong]:font-semibold"
          />
        </div>

        {/* Boutons de partage */}
        <div className="border-t border-gray-200 mt-12">
          <ShareButtons post={post} />
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé(e) par ce traitement ?
            </h3>
            <p className="text-gray-600 mb-6">
              Consultez le Dr Nadine Baron à La Villa Esthétique pour une évaluation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.doctolib.fr/medecin-esthetique/toulouse/nadine-baron"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all duration-300"
              >
                Prendre RDV sur Doctolib
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-rose-600 text-rose-600 font-semibold rounded-xl hover:bg-rose-600 hover:text-white transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image_url,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://lavillaesthetique-toulouse.com/docteur-laser"
            },
            "publisher": {
              "@type": "Organization",
              "name": "La Villa Esthétique",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lavillaesthetique-toulouse.com/logo-villa-esthetique.png"
              }
            },
            "datePublished": post.published_at,
            "dateModified": post.updated_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://lavillaesthetique-toulouse.com/blog/${post.slug}`
            }
          })
        }}
      />
    </div>
  )
}

// Générer les paramètres statiques pour tous les articles
export async function generateStaticParams() {
  try {
    console.log('🔧 Generating static params...')
    const posts = await getBlogPosts()
    console.log('📋 Found posts for static generation:', posts.length)
    console.log('🔗 Generated slugs:', posts.map(p => p.slug))

    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}