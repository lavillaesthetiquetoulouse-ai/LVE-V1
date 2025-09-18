import './globals.css';
import type { Metadata } from 'next';
import { BrandProvider } from '@/components/brand-provider';
import { CookieBanner } from '@/components/cookie-banner';
import { StickyCTA } from '@/components/sticky-cta';

export const metadata: Metadata = {
  metadataBase: new URL('https://cheery-quokka-7f67a2.netlify.app'),
  title: 'Dr Nadine Baron - Villa Esthétique & Docteur Laser | Médecine Esthétique Toulouse',
  description: '✨ Dr Nadine Baron vous accueille à La Villa Esthétique, votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels. Révélez votre beauté en toute sérénité.',
  keywords: 'médecine esthétique, épilation laser, Toulouse, Lardenne, Dr Nadine Baron, injections, botox, acide hyaluronique, peeling',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cheery-quokka-7f67a2.netlify.app',
    siteName: 'La villa Esthetique & Docteur Laser',
    title: 'Dr Nadine Baron - La Villa Esthétique Toulouse',
    description: '✨ Dr Nadine Baron vous accueille à La Villa Esthétique, votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels.',
    images: [
      {
        url: '/logo-villa-esthetique.png',
        width: 1200,
        height: 630,
        alt: 'Logo La villa Esthetique - Dr Nadine Baron - Toulouse Lardenne',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Nadine Baron - La Villa Esthétique',
    description: '✨ Votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels.',
    images: [
      '/logo-villa-esthetique.png'
    ],
  },
  alternates: {
    canonical: 'https://cheery-quokka-7f67a2.netlify.app',
  },
  other: {
    'geo.region': 'FR-31',
    'geo.placename': 'Toulouse',
    'geo.position': '43.6047;1.4442',
    'ICBM': '43.6047, 1.4442',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.youtube.com https://s.ytimg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'self' https://www.google.com https://www.doctolib.fr https://www.youtube.com https://youtube.com;" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="permissions-policy" content="camera=(), microphone=(), geolocation=(), payment=()" />
        {/* Optimisation fonts - Preload fonts critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" />
        
        {/* Preconnect ressources tierces */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://fbslsxzirjpyzgqbdkfe.supabase.co" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://fbslsxzirjpyzgqbdkfe.supabase.co" />
        
        {/* Favicon et icônes */}
        <link rel="icon" href="/logo-villa-esthetique.png" />
        <link rel="apple-touch-icon" href="/logo-villa-esthetique.png" />
        <link rel="shortcut icon" href="/logo-villa-esthetique.png" />
        
        {/* Métadonnées supplémentaires pour les réseaux sociaux */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#1d1d1f" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <BrandProvider brand="villa">
          {children}
          <StickyCTA />
          <CookieBanner />
        </BrandProvider>
        
        {/* Schema JSON-LD pour l'organisation médicale */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "La Villa Esthétique",
              "alternateName": "Docteur Laser Toulouse",
              "description": "Cabinet de médecine esthétique à Toulouse dirigé par le Dr Nadine Baron. Spécialiste en injections esthétiques, épilation laser, soins anti-âge et traitements corporels.",
              "url": "https://cheery-quokka-7f67a2.netlify.app",
              "logo": "https://cheery-quokka-7f67a2.netlify.app/logo-villa-esthetique.png",
              "image": "https://cheery-quokka-7f67a2.netlify.app/logo-villa-esthetique.png",
              "telephone": "+33562140410",
              "email": "contact@lavillaesthetique.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "286 Avenue de Lardenne",
                "addressLocality": "Toulouse",
                "postalCode": "31100",
                "addressRegion": "Occitanie",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.6047",
                "longitude": "1.4442"
              },
              "openingHours": [
                "Mo-Fr 08:00-19:00"
              ],
              "priceRange": "€€€",
              "paymentAccepted": ["Cash", "Credit Card"],
              "currenciesAccepted": "EUR",
              "hasMap": "https://maps.google.com/?q=286+Avenue+de+Lardenne,+31100+Toulouse",
              "founder": {
                "@type": "Person",
                "name": "Dr Nadine Baron",
                "jobTitle": "Médecin Esthétique",
                "worksFor": {
                  "@type": "MedicalBusiness",
                  "name": "La Villa Esthétique"
                }
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "43.6047",
                  "longitude": "1.4442"
                },
                "geoRadius": "50000"
              },
              "serviceType": [
                "Médecine Esthétique",
                "Épilation Laser",
                "Injections Anti-âge",
                "Soins du Visage",
                "Traitements Corporels"
              ],
              "medicalSpecialty": [
                "Aesthetic Medicine",
                "Dermatology"
              ],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Injections d'Acide Hyaluronique",
                  "description": "Traitement anti-âge pour restaurer les volumes du visage"
                },
                {
                  "@type": "MedicalProcedure", 
                  "name": "Épilation Laser Clarity 2",
                  "description": "Épilation définitive pour tous phototypes de peau"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Morpheus 8",
                  "description": "Technologie de microneedling RF pour raffermir la peau"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "HydraFacial",
                  "description": "Soin du visage révolutionnaire combinant nettoyage et hydratation"
                }
              ],
              "sameAs": [
                "https://www.doctolib.fr/medecin-esthetique/toulouse/nadine-baron"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}