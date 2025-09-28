import './globals.css';
import type { Metadata } from 'next';
import { BrandProvider } from '@/components/brand-provider';
import { CookieBanner } from '@/components/cookie-banner';
import { StickyCTA } from '@/components/sticky-cta';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';

export const metadata: Metadata = {
  metadataBase: new URL('https://lavillaesthetique-toulouse.com'),
  title: 'Dr Nadine Baron - Villa Esthétique & Laser pas cher | Médecine Esthétique Toulouse',
  description: '✨ Dr Nadine Baron vous accueille à La Villa Esthétique, votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels. Révélez votre beauté en toute sérénité.',
  keywords: 'médecine esthétique, épilation laser, Toulouse, Lardenne, Dr Nadine Baron, injections, botox, acide hyaluronique, peeling',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon.ico'
  },
  openGraph: {
    title: 'Dr Nadine Baron - Villa Esthétique & Laser pas cher | Médecine Esthétique Toulouse',
    description: '✨ Dr Nadine Baron vous accueille à La Villa Esthétique, votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels.',
    url: 'https://lavillaesthetique-toulouse.com',
    siteName: 'La Villa Esthétique',
    images: [
      {
        url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'La Villa Esthétique - Dr Nadine Baron - Médecine Esthétique Toulouse',
      },
      {
        url: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/og-image-square.jpg',
        width: 400,
        height: 400,
        alt: 'La Villa Esthétique - Dr Nadine Baron',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Nadine Baron - Villa Esthétique & Laser pas cher | Médecine Esthétique Toulouse',
    description: '✨ Dr Nadine Baron vous accueille à La Villa Esthétique, votre refuge beauté à Toulouse. Expertise médicale, technologies de pointe et résultats naturels.',
    images: ['https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/og-image.jpg'],
  }
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
        <link rel="manifest" href="/manifest.json" />
        {/* CSP de fallback - les en-têtes Netlify prennent la priorité */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.youtube.com https://s.ytimg.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'self' https://www.google.com https://www.doctolib.fr https://www.youtube.com https://youtube.com; object-src 'none'; base-uri 'self';" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="permissions-policy" content="camera=(), microphone=(), geolocation=(), payment=()" />
        {/* Optimisation fonts - Preload fonts critiques avec font-display:swap optimisé */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" media="print" onLoad="this.media='all'" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" />
        </noscript>
        
        {/* Preconnect ressources tierces */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://fbslsxzirjpyzgqbdkfe.supabase.co" />
        <link rel="preconnect" href="https://www.doctolib.fr" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://fbslsxzirjpyzgqbdkfe.supabase.co" />
        <link rel="dns-prefetch" href="https://www.doctolib.fr" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        
        {/* Favicon complet pour tous les appareils */}
        <link rel="icon" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/apple-touch-icon.png" />
        <link rel="shortcut icon" href="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon.ico" />

        {/* Métadonnées avancées pour les réseaux sociaux */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="theme-color" content="#1d1d1f" />

        {/* Métadonnées spécifiques pour WhatsApp */}
        <meta property="whatsapp:image" content="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Social%20Media/La-villa-esthetique-toulouse-lardenne-dr-baron-medecin-esthetique-social-media-2.png" />

        {/* Métadonnées pour LinkedIn */}
        <meta property="linkedin:image" content="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Social%20Media/La-villa-esthetique-toulouse-lardenne-dr-baron-medecin-esthetique-social-media-1.png" />

        {/* Métadonnées pour Instagram et TikTok (via Open Graph) */}
        <meta property="og:video" content="" />
        <meta property="og:video:type" content="video/mp4" />

        {/* Métadonnées pour Telegram */}
        <meta name="telegram:image" content="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Social%20Media/La-villa-esthetique-toulouse-lardenne-dr-baron-medecin-esthetique-social-media-1.png" />
        <meta name="telegram:channel" content="@lavillaesthetique" />

        {/* PWA et manifest pour installation sur mobile */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="La Villa Esthétique" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#1d1d1f" />
        <meta name="msapplication-TileImage" content="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/mstile-150x150.png" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <BrandProvider brand="villa">
          <PerformanceOptimizer />
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
              "alternateName": "Laser pas cher Toulouse",
              "description": "Cabinet de médecine esthétique à Toulouse dirigé par le Dr Nadine Baron. Spécialiste en injections esthétiques, épilation laser, soins anti-âge et traitements corporels.",
              "url": "https://lavillaesthetique-toulouse.com",
              "logo": "https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Logo-la-villa-esthetique-toulouse-lardenne-dr-baron-medecin-black2.png",
              "image": "https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Social%20Media/La-villa-esthetique-toulouse-lardenne-dr-baron-medecin-esthetique-social-media-1.png",
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