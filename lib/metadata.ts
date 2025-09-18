import { Metadata } from 'next';

const SITE_URL = 'https://lavillaesthetique-toulouse.com';
const SITE_NAME = 'La villa Esthetique & Docteur Laser';
const DOCTOR_NAME = 'Dr Nadine Baron';

const SOCIAL_IMAGES = {
  primary: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Social%20Media/La-villa-esthetique-toulouse-lardenne-dr-baron-medecin-esthetique-social-media-1.png',
  secondary: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Social%20Media/La-villa-esthetique-toulouse-lardenne-dr-baron-medecin-esthetique-social-media-2.png',
  logo: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Logo-la-villa-esthetique-toulouse-lardenne-dr-baron-medecin-black2.png'
};

export interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path = '',
    image = SOCIAL_IMAGES.primary,
    imageAlt = `${SITE_NAME} - ${DOCTOR_NAME} - Médecine Esthétique Toulouse Lardenne`,
    keywords = [],
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section
  } = options;

  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  const baseKeywords = [
    'médecine esthétique',
    'épilation laser',
    'Toulouse',
    'Lardenne',
    'Dr Nadine Baron',
    'injections',
    'botox',
    'acide hyaluronique',
    'peeling',
    'soins anti-âge',
    'traitement corporel'
  ];

  const allKeywords = [...baseKeywords, ...keywords].join(', ');

  const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    keywords: allKeywords,
    robots: 'index, follow',
    openGraph: {
      type,
      locale: 'fr_FR',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: 'image/png',
        },
        {
          url: SOCIAL_IMAGES.secondary,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Cabinet médecine esthétique Toulouse`,
          type: 'image/png',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@lavillaesthetique',
      creator: '@drnadinebaron',
      title: fullTitle,
      description,
      images: {
        url: image,
        alt: imageAlt,
        width: 1200,
        height: 630,
      },
    },
    alternates: {
      canonical: url,
    },
    other: {
      'geo.region': 'FR-31',
      'geo.placename': 'Toulouse',
      'geo.position': '43.6047;1.4442',
      'ICBM': '43.6047, 1.4442',

      // WhatsApp optimizations
      'whatsapp:image': SOCIAL_IMAGES.secondary,
      'whatsapp:title': fullTitle,
      'whatsapp:description': description,

      // Telegram optimizations
      'telegram:image': image,
      'telegram:title': fullTitle,
      'telegram:description': description,
      'telegram:channel': '@lavillaesthetique',

      // LinkedIn optimizations
      'linkedin:image': image,
      'linkedin:title': fullTitle,
      'linkedin:description': description,

      // Facebook specific (fallback to og:)
      'fb:app_id': '',
      'fb:admins': '',

      // Instagram & TikTok (use Open Graph)
      'instagram:image': image,
      'tiktok:image': image,

      // Pinterest
      'pinterest:image': image,
      'pinterest:description': description,

      // Apple-specific
      'apple-mobile-web-app-title': 'La Villa Esthétique',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',

      // Microsoft-specific
      'msapplication-TileColor': '#1d1d1f',
      'msapplication-TileImage': SOCIAL_IMAGES.logo,
      'application-name': 'La Villa Esthétique',

      // Mobile optimization
      'mobile-web-app-capable': 'yes',
      'format-detection': 'telephone=no',

      // SEO enhancements
      'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      'googlebot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      'bingbot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
  };

  // Ajouter les métadonnées d'article si c'est un article
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: author ? [author] : [`${DOCTOR_NAME}`],
      section,
    };
  }

  return metadata;
}

// Métadonnées pour les pages principales
export const homePageMetadata = generatePageMetadata({
  title: `${DOCTOR_NAME} - Villa Esthétique & Docteur Laser | Médecine Esthétique Toulouse`,
  description: '✨ Dr Nadine Baron vous accueille à La Villa Esthétique, votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels. Révélez votre beauté en toute sérénité.',
  path: '/',
  keywords: ['médecin esthétique toulouse', 'cabinet esthétique lardenne', 'dr nadine baron']
});

export const servicesMetadata = generatePageMetadata({
  title: 'Nos Soins & Traitements Esthétiques',
  description: 'Découvrez nos traitements de médecine esthétique : épilation laser Clarity 2, injections anti-âge, Morpheus 8, HydraFacial. Technologies de pointe pour des résultats naturels.',
  path: '/actes',
  keywords: ['traitements esthétiques', 'épilation laser clarity', 'morpheus 8', 'hydrafacial', 'injections botox']
});

export const doctorLaserMetadata = generatePageMetadata({
  title: 'Docteur Laser - Épilation Définitive Toulouse',
  description: 'Épilation laser nouvelle génération avec Clarity 2. Technologie révolutionnaire pour tous phototypes de peau. Résultats durables et confort optimal.',
  path: '/docteur-laser',
  keywords: ['épilation laser toulouse', 'clarity 2', 'épilation définitive', 'laser alexandrite', 'laser nd yag']
});

export const aboutMetadata = generatePageMetadata({
  title: 'À propos du Dr Nadine Baron - Médecin Esthétique',
  description: 'Découvrez le Dr Nadine Baron, médecin esthétique à Toulouse Lardenne. Formation médicale, expertise en injections et lasers, équipements dernière génération.',
  path: '/a-propos',
  keywords: ['dr nadine baron', 'médecin esthétique toulouse', 'formation médecine esthétique', 'lardenne']
});

export const villaMetadata = generatePageMetadata({
  title: 'La Villa Esthétique - Cabinet Dr Nadine Baron',
  description: 'Découvrez La Villa Esthétique, cabinet de médecine esthétique dirigé par le Dr Nadine Baron à Toulouse Lardenne. Expertise, technologies de pointe et accompagnement personnalisé.',
  path: '/la-villa-esthetique',
  keywords: ['cabinet médecine esthétique', 'villa esthétique toulouse', 'médecin esthétique lardenne', 'cabinet moderne']
});

export const contactMetadata = generatePageMetadata({
  title: 'Contact & Rendez-vous - La Villa Esthétique',
  description: 'Prenez rendez-vous avec le Dr Nadine Baron à La Villa Esthétique Toulouse. 286 Avenue de Lardenne, 31100 Toulouse. Tél: 05 62 14 04 10',
  path: '/contact',
  keywords: ['rendez-vous médecine esthétique', 'contact dr baron', 'toulouse lardenne', 'doctolib']
});

export const blogMetadata = generatePageMetadata({
  title: 'Blog & Actualités Médecine Esthétique',
  description: 'Conseils, actualités et guides sur la médecine esthétique par le Dr Nadine Baron. Découvrez nos derniers articles sur les soins anti-âge et traitements esthétiques.',
  path: '/blog',
  keywords: ['blog médecine esthétique', 'conseils beauté', 'actualités esthétique', 'guides soins']
});