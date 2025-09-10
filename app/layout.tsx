import './globals.css';
import type { Metadata } from 'next';
import { BrandProvider } from '@/components/brand-provider';
import { CookieBanner } from '@/components/cookie-banner';
import { StickyCTA } from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Dr Nadine Baron - Villa Esthétique & Docteur Laser | Médecine Esthétique Toulouse',
  description: 'Cabinet de médecine esthétique à Toulouse (Lardenne). Dr Nadine Baron propose épilation laser, injections anti-âge, peelings. Consultations sur rendez-vous.',
  keywords: 'médecine esthétique, épilation laser, Toulouse, Lardenne, Dr Nadine Baron, injections, botox, acide hyaluronique, peeling',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'La villa Esthetique & Docteur Laser',
    title: 'Dr Nadine Baron - Médecine Esthétique Toulouse Lardenne',
    description: 'Cabinet de médecine esthétique à Toulouse. La villa Esthetique & Docteur Laser.',
  },
  alternates: {
    canonical: 'https://villa-esthetique-toulouse.fr',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://fbslsxzirjpyzgqbdkfe.supabase.co" />
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
      </body>
    </html>
  );
}