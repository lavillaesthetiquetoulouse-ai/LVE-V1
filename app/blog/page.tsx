import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Calendar, ArrowRight, Clock, User, BookOpen, TrendingUp, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { getBlogPosts, getBlogCategories, BlogPost } from '@/lib/supabase';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Metadata } from 'next';
import BlogClientFilters from './blog-client-filters';

export const metadata: Metadata = {
  title: 'Blog Médecine Esthétique - Dr Nadine Baron | La Villa Esthétique',
  description: 'Articles médicaux vérifiés sur l\'épilation laser, injections anti-âge, soins du visage. Conseils d\'expert par le Dr Nadine Baron, médecin esthétique à Toulouse.',
  keywords: 'blog médecine esthétique, épilation laser, injections anti-âge, Dr Nadine Baron, Toulouse, dermatologie esthétique'
};

// Configuration ISR : régénération automatique toutes les 60 secondes
export const revalidate = 60;

async function getBlogData() {
  try {
    const [posts, categories] = await Promise.all([
      getBlogPosts(),
      getBlogCategories()
    ]);
    return { posts, categories };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return { posts: [], categories: ['Tous les articles'] };
  }
}

export default async function BlogPage() {
  const { posts, categories } = await getBlogData();

  // Schema.org ultra-optimisé pour IA et référencement
  const generateAdvancedSchema = () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://lavillaesthetique-toulouse.com/blog#blog',
        name: 'Blog Médecine Esthétique - Dr Nadine Baron',
        description: 'Blog expert en médecine esthétique : épilation laser, injections anti-âge, soins du visage, dermatologie. Articles scientifiques et conseils pratiques du Dr Nadine Baron à Toulouse.',
        url: 'https://lavillaesthetique-toulouse.com/blog',
        inLanguage: 'fr-FR',
        copyrightYear: 2024,
        copyrightHolder: {
          '@type': 'Person',
          '@id': 'https://lavillaesthetique-toulouse.com/a-propos#nadine-baron'
        },
        author: {
          '@type': 'Person',
          '@id': 'https://lavillaesthetique-toulouse.com/a-propos#nadine-baron'
        },
        publisher: {
          '@type': 'MedicalOrganization',
          '@id': 'https://lavillaesthetique-toulouse.com#organization'
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: posts.length,
          itemListElement: posts.map((post, index) => ({
            '@type': 'BlogPosting',
            '@id': `https://lavillaesthetique-toulouse.com/blog/${post.slug}`,
            position: index + 1,
            headline: post.title,
            description: post.excerpt,
            datePublished: post.published_at,
            dateModified: post.updated_at || post.published_at,
            wordCount: post.content?.split(' ').length || 500,
            timeRequired: `PT${post.read_time}M`,
            articleSection: post.category,
            keywords: post.keywords || post.category,
          }))
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://lavillaesthetique-toulouse.com/a-propos#nadine-baron',
        name: 'Dr Nadine Baron',
        givenName: 'Nadine',
        familyName: 'Baron',
        honorificPrefix: 'Dr',
        jobTitle: 'Médecin Esthétique',
        description: 'Docteur en médecine esthétique spécialisée en épilation laser, injections anti-âge et soins du visage à Toulouse.',
        url: 'https://lavillaesthetique-toulouse.com/a-propos',
        sameAs: [
          'https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron',
          'https://www.facebook.com/docteurnadinebaron',
          'https://www.instagram.com/la_villa_esthetique'
        ],
        worksFor: {
          '@type': 'MedicalOrganization',
          '@id': 'https://lavillaesthetique-toulouse.com#organization'
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Medical Degree',
            educationalLevel: 'Doctorate',
            competencyRequired: 'Aesthetic Medicine'
          }
        ],
        knowsAbout: [
          'Médecine Esthétique',
          'Épilation Laser',
          'Injections Anti-âge',
          'Dermatologie Esthétique',
          'Peelings Médicaux',
          'Morpheus 8',
          'HydraFacial'
        ]
      },
      {
        '@type': 'MedicalOrganization',
        '@id': 'https://lavillaesthetique-toulouse.com#organization',
        name: 'La Villa Esthétique & Laser pas cher',
        alternateName: ['Villa Esthétique', 'Laser pas cher'],
        description: 'Cabinet de médecine esthétique à Toulouse spécialisé en épilation laser, injections anti-âge, soins du visage et dermatologie esthétique.',
        url: 'https://lavillaesthetique-toulouse.com',
        logo: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Logo-la-villa-esthetique-toulouse-lardenne-dr-baron-medecin-%20black2.png',
        image: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/SALLE%20CLARITY%202%20DR%20LASER.jpg',
        telephone: '+33562140410',
        email: 'dr.baron.nadine@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '286 avenue de Lardenne',
          addressLocality: 'Toulouse',
          postalCode: '31100',
          addressRegion: 'Occitanie',
          addressCountry: 'FR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.6047,
          longitude: 1.4442
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '20:00'
          }
        ],
        medicalSpecialty: 'Aesthetic Medicine',
        availableService: [
          'Épilation Laser',
          'Injections Esthétiques',
          'Soins Anti-âge',
          'Peelings Médicaux',
          'Morpheus 8',
          'HydraFacial'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lavillaesthetique-toulouse.com#website',
        url: 'https://lavillaesthetique-toulouse.com',
        name: 'Villa Esthétique & Laser pas cher',
        description: 'Cabinet de médecine esthétique à Toulouse - Dr Nadine Baron',
        publisher: {
          '@id': 'https://lavillaesthetique-toulouse.com#organization'
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://lavillaesthetique-toulouse.com/blog?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        ]
      }
    ]
  });

  return (
    <>
      {/* Schema.org optimisé pour IA et SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateAdvancedSchema())
        }}
      />
      
      {/* Balises Meta spécifiques pour les IA */}
      <script
        type="application/ld+json"
        data-purpose="ai-training-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Medical Aesthetic Blog Content - Dr Nadine Baron',
            description: 'Expert medical content on aesthetic medicine, laser treatments, anti-aging procedures',
            creator: {
              '@type': 'Person',
              name: 'Dr Nadine Baron',
              credential: 'Medical Doctor - Aesthetic Medicine Specialist'
            },
            license: 'Educational Use Only',
            contentRating: 'Medical Professional Content',
            inLanguage: 'fr-FR',
            about: [
              'Aesthetic Medicine',
              'Laser Hair Removal', 
              'Anti-aging Treatments',
              'Dermatology',
              'Medical Skincare'
            ],
            keywords: 'medical aesthetics, evidence-based treatments, professional expertise, patient education'
          })
        }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
        </div>

        {/* Hero avec E-A-T indicators */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              {/* Medical Expertise Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-neutral-200 mb-6">
                <Award className="w-4 h-4 text-brand" />
                <span className="text-sm font-medium text-neutral-700">
                  Contenu médical expertisé par le Dr Nadine Baron
                </span>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              
              <h1 className="apple-title-hero" itemProp="name">
                <span className="bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent">
                  Blog Médecine Esthétique
                </span>
              </h1>
              
              <div itemScope itemType="https://schema.org/Article" className="hidden">
                <meta itemProp="author" content="Dr Nadine Baron" />
                <meta itemProp="publisher" content="La Villa Esthétique" />
                <meta itemProp="inLanguage" content="fr-FR" />
              </div>
              
              <p className="text-xl text-neutral-700 leading-relaxed mb-6" itemProp="description">
                <strong>Articles médicaux vérifiés</strong> : conseils d'expert, actualités et guides pratiques 
                par le Dr Nadine Baron, médecin esthétique diplômé. Informations scientifiques sur 
                l'épilation laser, soins anti-âge et dermatologie à Toulouse.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand" />
                  <span><strong>{posts.length}</strong> articles experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand" />
                  <span>Mis à jour régulièrement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand" />
                  <span>Contenu certifié médical</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client-side filters and content */}
        <BlogClientFilters posts={posts} categories={categories} />

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-br from-brand-subtle to-neutral-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                Restez informée des dernières actualités
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Recevez nos conseils d'expert et nos derniers articles directement dans votre boîte mail.
              </p>
              <a
                href="/contact"
                className="btn-primary-villa"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}