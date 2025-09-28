import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog Médecine Esthétique | Dr Nadine Baron Toulouse',
    template: '%s | Blog Villa Esthétique'
  },
  description: 'Blog expert en médecine esthétique du Dr Nadine Baron à Toulouse. Conseils épilation laser, injections anti-âge, soins visage. Articles scientifiques et guides pratiques.',
  keywords: [
    'blog médecine esthétique',
    'conseils épilation laser', 
    'injections esthétiques',
    'soins anti-âge',
    'Dr Nadine Baron',
    'Toulouse Lardenne',
    'dermatologie esthétique',
    'peelings médicaux',
    'acné adulte traitement',
    'morpheus 8',
    'hydrafacial'
  ].join(', '),
  authors: [{ name: 'Dr Nadine Baron', url: 'https://lavillaesthetique-toulouse.com/a-propos' }],
  creator: 'Dr Nadine Baron',
  publisher: 'La Villa Esthétique',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lavillaesthetique-toulouse.com/blog',
    siteName: 'Villa Esthétique & Laser pas cher',
    title: 'Blog Médecine Esthétique - Conseils Expert Dr Nadine Baron',
    description: 'Articles d\'expert en médecine esthétique : épilation laser, injections, soins anti-âge. Conseils scientifiques du Dr Nadine Baron à Toulouse.',
    images: [
      {
        url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/og/blog-medecine-esthetique.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Médecine Esthétique Dr Nadine Baron Toulouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Médecine Esthétique - Dr Nadine Baron Toulouse',
    description: 'Conseils expert en épilation laser, injections esthétiques, soins anti-âge. Articles scientifiques et guides pratiques.',
    images: ['https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/og/blog-medecine-esthetique.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/blog',
    types: {
      'application/rss+xml': [
        { url: 'https://lavillaesthetique-toulouse.com/blog/feed.xml', title: 'Blog Villa Esthétique RSS Feed' }
      ],
    },
  },
  category: 'Médecine Esthétique',
  classification: 'Health & Medical',
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification',
    // Optimisation spécifique pour les IA
    'ai-content-declaration': 'human-authored',
    'content-type': 'educational-medical',
    'expertise-level': 'expert-professional',
    'medical-disclaimer': 'true',
    'author-credentials': 'MD-aesthetic-medicine',
    'content-freshness': 'regularly-updated',
    'fact-checked': 'medical-professional',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}