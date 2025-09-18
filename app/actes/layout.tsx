import { Metadata } from 'next';

// Métadonnées SEO optimisées pour la page
export const metadata: Metadata = {
  title: 'Soins de Médecine Esthétique à Toulouse - Dr Nadine Baron | Villa Esthétique',
  description: 'Découvrez tous les soins de médecine esthétique du Dr Nadine Baron à Toulouse : injections acide hyaluronique, épilation laser, Morpheus 8, HydraFacial, peelings médicaux. Consultation personnalisée.',
  keywords: 'médecine esthétique Toulouse, injections acide hyaluronique, épilation laser Toulouse, Morpheus 8, HydraFacial, peelings médicaux, Dr Nadine Baron, soins esthétiques Toulouse, Villa Esthétique',
  openGraph: {
    title: 'Soins de Médecine Esthétique à Toulouse - Dr Nadine Baron',
    description: 'Découvrez tous les soins de médecine esthétique du Dr Nadine Baron : injections, épilation laser, soins anti-âge. Expertise et équipements de pointe à Toulouse.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cheery-quokka-7f67a2.netlify.app/actes',
    siteName: 'Villa Esthétique',
    images: [
      {
        url: '/logo-villa-esthetique.png',
        width: 1200,
        height: 630,
        alt: 'Soins de médecine esthétique - Villa Esthétique Toulouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soins de Médecine Esthétique à Toulouse - Dr Nadine Baron',
    description: 'Injections, épilation laser, soins anti-âge. Expertise médicale et équipements de pointe.',
    images: ['/logo-villa-esthetique.png'],
  },
  alternates: {
    canonical: 'https://cheery-quokka-7f67a2.netlify.app/actes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ActesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}