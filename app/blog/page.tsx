import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Médecine Esthétique | Conseils & Actualités - Villa Esthétique Toulouse',
  description: 'Blog du Dr Nadine Baron : conseils en médecine esthétique, actualités épilation laser, soins anti-âge. Expertise à Toulouse Lardenne.',
  keywords: 'blog médecine esthétique, conseils épilation laser, soins anti-âge, acné, Toulouse',
};

const blogPosts = [
  {
    slug: 'traitement-acne-adulte-solutions-medicales',
    title: 'Traitement de l\'acné adulte : solutions médicales efficaces',
    excerpt: 'L\'acné adulte touche de nombreuses personnes après 25 ans. Découvrez les traitements médicaux disponibles : LED, peelings, conseils dermocosmétiques.',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Dermatologie',
    author: 'Dr Nadine Baron',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'melasma-post-ete-prevention-traitement',
    title: 'Mélasma post-été : prévention et traitement',
    excerpt: 'Le mélasma s\'aggrave souvent après l\'été. Comment le prévenir et quels traitements proposer ? Peelings, protection solaire, routine adaptée.',
    date: '2024-01-08',
    readTime: '4 min',
    category: 'Pigmentation',
    author: 'Dr Nadine Baron',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'peelings-superficiels-guide-complet',
    title: 'Peelings superficiels : guide complet pour une peau éclatante',
    excerpt: 'Tout savoir sur les peelings superficiels : indications, déroulement, suites, résultats. Une solution douce pour améliorer l\'éclat du teint.',
    date: '2023-12-22',
    readTime: '6 min',
    category: 'Soins du visage',
    author: 'Dr Nadine Baron',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = [
  'Tous les articles',
  'Épilation laser',
  'Injections esthétiques',
  'Soins du visage',
  'Dermatologie',
  'Pigmentation',
  'Anti-âge',
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blog La villa Esthetique - Dr Nadine Baron',
            description: 'Blog médecine esthétique : conseils, actualités et expertise du Dr Nadine Baron à Toulouse',
            url: 'https://villa-esthetique-toulouse.fr/blog',
            author: {
              '@type': 'Person',
              name: 'Dr Nadine Baron',
              jobTitle: 'Médecin esthétique',
            },
            publisher: {
              '@type': 'Organization',
              name: 'La villa Esthetique',
              url: 'https://villa-esthetique-toulouse.fr',
            },
            blogPost: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              url: `https://villa-esthetique-toulouse.fr/blog/${post.slug}`,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author,
              },
            })),
          }),
        }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-outfit font-bold text-neutral-900 mb-6">
                <span className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent tracking-tight">
                  Blog Médecine Esthétique
                </span>
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Conseils d'expert, actualités et guides pratiques par le Dr Nadine Baron. 
                Tout ce qu'il faut savoir sur la médecine esthétique à Toulouse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre RDV
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/contact" className="btn-secondary">
                  Poser une question
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-neutral-200">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'Tous les articles'
                      ? 'bg-brand text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog posts */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="card group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-neutral-100 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-brand-subtle text-brand text-xs font-medium rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-outfit font-semibold text-xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
                    >
                      Lire la suite
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Charger plus d'articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-neutral-100">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-4">
                Restez informé(e)
              </h2>
              <p className="text-neutral-600 mb-8">
                Recevez nos derniers conseils et actualités en médecine esthétique directement dans votre boîte mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary-villa whitespace-nowrap"
                >
                  S'abonner
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-neutral-500 mt-3">
                Pas de spam, désinscription possible à tout moment.
              </p>
            </div>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="py-8 bg-neutral-900 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Informations générales :</strong> Le contenu de ce blog est informatif 
                et ne remplace pas une consultation médicale personnalisée. Seul le Dr Nadine Baron 
                peut établir un diagnostic et recommander un traitement adapté à votre situation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}