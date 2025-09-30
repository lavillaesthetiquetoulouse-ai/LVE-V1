import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { ActeCard } from '@/components/acte-card';
import { FAQ } from '@/components/faq';
import { Calendar, ArrowRight, Zap, Target, Shield, Clock, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Laser pas cher Toulouse | Épilation & Lasers Médicaux - Dr Nadine Baron',
  description: 'Laser pas cher à Toulouse Lardenne. Épilation laser définitive, détatouage, lasers vasculaires. Dr Nadine Baron, équipements dernière génération.',
  keywords: 'laser pas cher, épilation laser, Toulouse, Lardenne, détatouage, lasers vasculaires, Dr Nadine Baron'
};

const epilationZones = [
  {
    title: 'Épilation Laser Aisselles',
    description: 'Zone rapide et efficace. Résultats excellents en 6-8 séances. Confort optimal avec refroidissement.',
    duration: '15-20 min',
    priceFrom: '80€',
    rating: 5,
    href: '/actes/epilation-laser-aisselles',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Épilation Laser Maillot',
    description: 'Maillot classique, intégral ou brésilien. Protocole adapté aux zones sensibles.',
    duration: '20-45 min',
    priceFrom: '120€',
    rating: 5,
    href: '/actes/epilation-laser-maillot',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Épilation Laser Jambes',
    description: 'Demi-jambes ou jambes complètes. Traitement rapide des grandes surfaces.',
    duration: '30-60 min',
    priceFrom: '150€',
    rating: 5,
    href: '/actes/epilation-laser-jambes',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Épilation Laser Visage',
    description: 'Duvet, moustache, menton. Précision maximale pour les zones délicates.',
    duration: '15-30 min',
    priceFrom: '100€',
    rating: 4,
    href: '/actes/epilation-laser-visage',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Épilation Laser Bras',
    description: 'Avant-bras ou bras complets. Idéal pour un confort quotidien.',
    duration: '20-40 min',
    priceFrom: '120€',
    rating: 4,
    href: '/actes/epilation-laser-bras',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Épilation Laser Dos',
    description: 'Traitement des zones difficiles d\'accès. Résultats durables.',
    duration: '30-45 min',
    priceFrom: '180€',
    rating: 4,
    href: '/actes/epilation-laser-dos',
    icon: <Shield className="w-6 h-6" />,
  },
];

const autresLasers = [
  {
    title: 'Détatouage Laser',
    description: 'Effacement progressif par laser Q-switched. Toutes couleurs d\'encre.',
    duration: '15-45 min',
    priceFrom: '120€',
    rating: 4,
    href: '/blog/precautions-avant-et-apres-detatouage-laser',
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: 'Lasers Vasculaires',
    description: 'Couperose, télangiectasies, angiomes. Laser KTP et colorant pulsé.',
    duration: '30 min',
    priceFrom: '150€',
    rating: 5,
    href: '/actes/lasers-vasculaires',
    icon: <Shield className="w-6 h-6" />,
  },
];

const faqItems = [
  {
    question: 'L\'épilation laser fonctionne-t-elle sur les peaux mates ?',
    answer: 'Oui, notre laser diode 755 Nm est adapté aux phototypes I à V. Pour les peaux très foncées (phototype VI), nous adaptons les paramètres et évaluons au cas par cas lors de la consultation.',
  },
  {
    question: 'Peut-on faire de l\'épilation laser en été ?',
    answer: 'C\'est possible avec des précautions renforcées : éviter l\'exposition solaire 4 semaines avant/après, utiliser une protection SPF50+ quotidiennement, et porter des vêtements couvrants.',
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer: 'En moyenne 6 à 8 séances espacées de 6 à 8 semaines. Le nombre varie selon la zone, la densité pilaire, la couleur des poils et les facteurs hormonaux.',
  },
  {
    question: 'Y a-t-il un entretien après le traitement complet ?',
    answer: 'Une séance de retouche annuelle peut être nécessaire pour 5 à 10% de repousse, notamment due aux changements hormonaux ou à l\'activation de nouveaux follicules.',
  },
  {
    question: 'L\'épilation laser est-elle douloureuse ?',
    answer: 'La sensation varie selon les zones. Notre laser dispose d\'un système de refroidissement intégré qui améliore significativement le confort. La plupart des patients tolèrent bien le traitement.',
  },
  {
    question: 'Quelles sont les contre-indications ?',
    answer: 'Grossesse, allaitement, prise d\'anticoagulants, infections cutanées actives, bronzage récent, certains traitements photosensibilisants. Tout est évalué lors de la consultation.',
  },
];

export default function DocteurLaserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Laser pas cher Toulouse - Épilation et Lasers Médicaux',
            description: 'Spécialiste épilation laser et traitements laser médicaux à Toulouse. Dr Nadine Baron.',
            url: 'https://villa-esthetique-toulouse.fr/docteur-laser',
            mainEntity: {
              '@type': 'MedicalBusiness',
              name: 'Laser pas cher',
              alternateName: 'La villa Esthetique - Laser pas cher',
              description: 'Spécialiste épilation laser et traitements laser médicaux',
              medicalSpecialty: 'Laser Medicine',
              physician: {
                '@type': 'Physician',
                name: 'Dr Nadine Baron',
                medicalSpecialty: 'Aesthetic Medicine, Laser Treatments',
              },
            },
          }),
        }}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section Laser pas cher */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-white via-brand-subtle/20 to-laser-subtle/30">
          <div className="container relative">
            {/* Titre centré */}
            <div className="text-center mb-12 relative">
              <h1 className="apple-title-hero">
                <span className="block text-neutral-600 font-outfit font-medium text-lg lg:text-xl mb-6 tracking-normal">
                  Bienvenue dans notre nouveau cabinet
                </span>
                <span className="bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent">
                  Laser pas cher
                </span>
              </h1>
            </div>

            {/* Contenu principal avec image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texte à gauche */}
              <div className="text-left">
                <p className="text-xl lg:text-2xl text-neutral-600 mb-12 leading-relaxed font-light max-w-lg mt-6">
                  L'épilation laser définitive redéfinie. Technologie de pointe, expertise médicale, résultats exceptionnels.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-16 mt-6">
                  <a
                    href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-laser text-white rounded-full font-medium hover:from-brand-hover hover:to-laser-hover transition-all duration-300 text-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="w-5 h-5" />
                    Prendre rendez-vous
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand/30 text-brand rounded-full font-medium hover:border-brand hover:bg-brand/5 transition-all duration-300 text-center justify-center"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>

              {/* Image plus grande à droite */}
              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-gradient-to-r from-brand/40 to-laser/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-gradient-to-br from-brand/5 to-laser/5">
                  <img
                    src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Docteur%20Laser.png"
                    alt="Cabinet Laser pas cher - Équipement d'épilation laser"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Caractéristiques laser centrées en bas */}
            <div className="text-center mt-16">
              <div className="flex flex-wrap justify-center gap-12 text-sm text-brand/70 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-brand to-laser rounded-full" />
                  <span>Laser Diode 755 Nm</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-brand to-laser rounded-full" />
                  <span>Tous phototypes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-brand to-laser rounded-full" />
                  <span>Refroidissement intégré</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-brand to-laser rounded-full" />
                  <span>95% des poils en moins</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Laser pas cher */}
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-brand-subtle/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-outfit font-light bg-gradient-to-r from-neutral-900 to-brand bg-clip-text text-transparent mb-6 tracking-tight">
                Pourquoi choisir Laser pas cher ?
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed font-light max-w-2xl mx-auto">
                Une expertise reconnue, des équipements de dernière génération, un suivi personnalisé.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl mb-6 mx-auto shadow-md border border-brand/20">
                  <Zap className="w-7 h-7 text-brand" />
                </div>
                <h3 className="font-outfit font-medium text-lg text-neutral-900 mb-3">
                  Technologie Avancée
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Laser diode 755 Nm dernière génération avec refroidissement intégré
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl mb-6 mx-auto shadow-md border border-brand/20">
                  <Shield className="w-7 h-7 text-brand" />
                </div>
                <h3 className="font-outfit font-medium text-lg text-neutral-900 mb-3">
                  Sécurité Maximale
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Protocoles médicaux stricts, évaluation personnalisée de chaque cas
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl mb-6 mx-auto shadow-md border border-brand/20">
                  <Users className="w-7 h-7 text-brand" />
                </div>
                <h3 className="font-outfit font-medium text-lg text-neutral-900 mb-3">
                  Tous Phototypes
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Traitement adapté aux peaux claires et mates (phototypes I à V)
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl mb-6 mx-auto shadow-md border border-brand/20">
                  <Clock className="w-7 h-7 text-brand" />
                </div>
                <h3 className="font-outfit font-medium text-lg text-neutral-900 mb-3">
                  Résultats Durables
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  90-95% des poils en moins après traitement complet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs Épilation Laser */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-outfit font-light text-neutral-900 mb-6 tracking-tight">
                Tarifs Épilation Laser
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed font-light max-w-3xl mx-auto">
                Découvrez nos tarifs transparents pour l'épilation laser définitive. Protocoles personnalisés selon votre phototype et vos besoins.
              </p>
            </div>

            {/* Tarifs Femme */}
            <div className="mb-20">
              <h3 className="text-2xl lg:text-3xl font-outfit font-light text-center bg-gradient-to-r from-neutral-900 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-12 tracking-tight">
                Tarifs Femme
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Visage Femme */}
                <div className="bg-gradient-to-br from-white to-pink-50/30 rounded-3xl p-8 border border-pink-200/30 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                      <Target className="w-7 h-7 text-pink-600" />
                    </div>
                    <h4 className="text-xl font-outfit font-medium text-neutral-900">Visage</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-pink-100">
                      <span className="text-neutral-700">Lèvre sup ou menton ou narines ou pommettes ou nez</span>
                      <span className="font-medium text-pink-600">30 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-pink-100">
                      <span className="text-neutral-700">Favoris</span>
                      <span className="font-medium text-pink-600">40 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-pink-100">
                      <span className="text-neutral-700">Visage (lèvre, menton, ovale)</span>
                      <span className="font-medium text-pink-600">95 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-pink-100">
                      <span className="text-neutral-700">Visage</span>
                      <span className="font-medium text-pink-600">100 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-pink-100">
                      <span className="text-neutral-700">Cou, nuque</span>
                      <span className="font-medium text-pink-600">50 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-pink-100">
                      <span className="text-neutral-700">Oreilles</span>
                      <span className="font-medium text-pink-600">25 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-neutral-700">Ovale</span>
                      <span className="font-medium text-pink-600">50 €</span>
                    </div>
                  </div>
                </div>

                {/* Corps Femme */}
                <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-8 border border-purple-200/30 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-outfit font-medium text-neutral-900">Corps</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Aisselles</span>
                      <span className="font-medium text-purple-600">40 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Avant-bras + mains inclus</span>
                      <span className="font-medium text-purple-600">80 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Bras entiers + mains inclus</span>
                      <span className="font-medium text-purple-600">145 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Mains et doigts</span>
                      <span className="font-medium text-purple-600">35 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Aréoles mammaires</span>
                      <span className="font-medium text-purple-600">30 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Poitrine</span>
                      <span className="font-medium text-purple-600">60 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Ventre</span>
                      <span className="font-medium text-purple-600">60 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Ligne ombilico-pubienne</span>
                      <span className="font-medium text-purple-600">30 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Haut du dos</span>
                      <span className="font-medium text-purple-600">50 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Bas du dos</span>
                      <span className="font-medium text-purple-600">50 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Dos complet</span>
                      <span className="font-medium text-purple-600">110 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Maillot Classique (de propreté)</span>
                      <span className="font-medium text-purple-600">40 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Maillot Brésilien</span>
                      <span className="font-medium text-purple-600">70 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Maillot Américain</span>
                      <span className="font-medium text-purple-600">80 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Maillot Intégral</span>
                      <span className="font-medium text-purple-600">90 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Sillon Inter-Fessier</span>
                      <span className="font-medium text-purple-600">20 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Fesses</span>
                      <span className="font-medium text-purple-600">60 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Jambes entières + pieds</span>
                      <span className="font-medium text-purple-600">260 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Demi-jambes + pieds</span>
                      <span className="font-medium text-purple-600">130 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Face interne des cuisses</span>
                      <span className="font-medium text-purple-600">70 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Face postérieure des cuisses</span>
                      <span className="font-medium text-purple-600">95 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="text-neutral-700">Pieds et orteils</span>
                      <span className="font-medium text-purple-600">30 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-neutral-700">Cuisses</span>
                      <span className="font-medium text-purple-600">130 €</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forfaits Femme */}
              <div className="mt-12 bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-3xl p-8 border border-rose-200/30">
                <h5 className="text-lg font-outfit font-medium text-center text-rose-600 mb-6">Forfaits Femme - Économisez jusqu'à 15%</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Aisselles + Maillot classique + sif</span>
                      <span className="font-medium text-rose-600">85 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Aisselles + Maillot brésilien + sif</span>
                      <span className="font-medium text-rose-600">105 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Aisselles + Maillot Américain + sif</span>
                      <span className="font-medium text-rose-600">115 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Aisselles + Maillot Intégral + sif</span>
                      <span className="font-medium text-rose-600">125 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-neutral-700">Demi-jambes + Aisselles + sif</span>
                      <span className="font-medium text-rose-600">165 €</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Demi-jambes + Maillot classique + sif + pieds</span>
                      <span className="font-medium text-rose-600">175 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Demi-jambes + Maillot brésilien + sif + pieds</span>
                      <span className="font-medium text-rose-600">195 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Demi-jambes + Maillot Américain + sif + pieds</span>
                      <span className="font-medium text-rose-600">205 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Demi-jambes + Maillot Intégral + sif + pieds</span>
                      <span className="font-medium text-rose-600">215 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-neutral-700">Jambes entières + Aisselles + pieds</span>
                      <span className="font-medium text-rose-600">295 €</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Jambes entières + Maillot classique + Sif + pieds</span>
                      <span className="font-medium text-rose-600">305 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Jambes entières + Maillot brésilien + sif + pieds</span>
                      <span className="font-medium text-rose-600">325 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Jambes entières + Maillot Américain + sif + pieds</span>
                      <span className="font-medium text-rose-600">335 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-rose-100">
                      <span className="text-sm text-neutral-700">Jambes entières + Maillot Intégral + sif + pieds</span>
                      <span className="font-medium text-rose-600">345 €</span>
                    </div>
                    <div className="space-y-3 mt-6">
                      <h6 className="text-sm font-medium text-rose-600">Forfaits 3 zones</h6>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Demi-jambes + Aisselles + Maillot simple + sif + pieds</span>
                        <span className="font-medium text-rose-600">190 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Demi-jambes + Aisselles + Maillot Brésilien + sif + pieds</span>
                        <span className="font-medium text-rose-600">220 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Demi-jambes + Aisselles + Maillot Américain + sif + pieds</span>
                        <span className="font-medium text-rose-600">240 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Demi-jambes + Aisselles + Maillot Intégral + sif + pieds</span>
                        <span className="font-medium text-rose-600">250 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Jambes entières + Aisselles + Maillot simple + sif + pieds</span>
                        <span className="font-medium text-rose-600">290 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Jambes entières + Aisselles + Maillot Brésilien + sif + pieds</span>
                        <span className="font-medium text-rose-600">360 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-rose-100">
                        <span className="text-xs text-neutral-700">Jambes entières + Aisselles + Maillot Americain + sif + pieds</span>
                        <span className="font-medium text-rose-600">365 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-xs text-neutral-700">Jambes entières + Aisselles + Maillot Intégal + sif + pieds</span>
                        <span className="font-medium text-rose-600">370 €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarifs Homme */}
            <div className="mb-12">
              <h3 className="text-2xl lg:text-3xl font-outfit font-light text-center bg-gradient-to-r from-neutral-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-12 tracking-tight">
                Tarifs Homme
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Visage Homme */}
                <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 border border-blue-200/30 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                      <Target className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-outfit font-medium text-neutral-900">Visage</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="text-neutral-700">Lèvre sup ou menton ou narines ou pommettes ou nez</span>
                      <span className="font-medium text-blue-600">40 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="text-neutral-700">Visage</span>
                      <span className="font-medium text-blue-600">100 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="text-neutral-700">Col de chemise</span>
                      <span className="font-medium text-blue-600">40 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="text-neutral-700">Nuque</span>
                      <span className="font-medium text-blue-600">50 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-neutral-700">Oreilles/nez</span>
                      <span className="font-medium text-blue-600">35 €</span>
                    </div>
                  </div>
                </div>

                {/* Corps Homme */}
                <div className="bg-gradient-to-br from-white to-cyan-50/30 rounded-3xl p-8 border border-cyan-200/30 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-cyan-600" />
                    </div>
                    <h4 className="text-xl font-outfit font-medium text-neutral-900">Corps</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Aisselles</span>
                      <span className="font-medium text-cyan-600">50 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Avant-bras + mains</span>
                      <span className="font-medium text-cyan-600">90 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Bras entiers + mains</span>
                      <span className="font-medium text-cyan-600">150 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Mains</span>
                      <span className="font-medium text-cyan-600">35 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Épaules</span>
                      <span className="font-medium text-cyan-600">60 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Torse</span>
                      <span className="font-medium text-cyan-600">100 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Ventre</span>
                      <span className="font-medium text-cyan-600">120 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Torse et ventre</span>
                      <span className="font-medium text-cyan-600">220 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Haut du dos</span>
                      <span className="font-medium text-cyan-600">120 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Bas du dos</span>
                      <span className="font-medium text-cyan-600">80 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Dos complet</span>
                      <span className="font-medium text-cyan-600">170 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Maillot Classique (de propreté)</span>
                      <span className="font-medium text-cyan-600">100 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Maillot Intégral (SIF)</span>
                      <span className="font-medium text-cyan-600">150 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Sillon Inter-Fessier (SIF)</span>
                      <span className="font-medium text-cyan-600">70 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Fesses</span>
                      <span className="font-medium text-cyan-600">140 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Jambes entières</span>
                      <span className="font-medium text-cyan-600">340 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Demi-jambes</span>
                      <span className="font-medium text-cyan-600">180 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cyan-100">
                      <span className="text-neutral-700">Pieds</span>
                      <span className="font-medium text-cyan-600">40 €</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-neutral-700">Cuisses</span>
                      <span className="font-medium text-cyan-600">175 €</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forfaits Homme */}
              <div className="mt-12 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl p-8 border border-blue-200/30">
                <h5 className="text-lg font-outfit font-medium text-center text-blue-600 mb-6">Forfaits Homme - Économisez jusqu'à 20%</h5>

                <div className="mb-8">
                  <h6 className="text-md font-outfit font-medium text-blue-600 mb-4">Forfaits 2 zones</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Fesses + SIF</span>
                        <span className="font-medium text-blue-600">140 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Torse + ventre</span>
                        <span className="font-medium text-blue-600">176 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Visage + Oreilles</span>
                        <span className="font-medium text-blue-600">105 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-700">Visage + nez</span>
                        <span className="font-medium text-blue-600">115 €</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot simple + Aisselles</span>
                        <span className="font-medium text-blue-600">120 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot Intégral + Aisselles</span>
                        <span className="font-medium text-blue-600">160 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot Simple + Demi-Jambes</span>
                        <span className="font-medium text-blue-600">224 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-700">Maillot Intégral + Demi-Jambes</span>
                        <span className="font-medium text-blue-600">264 €</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot Simple + Jambes Entières</span>
                        <span className="font-medium text-blue-600">352 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-700">Maillot Intégral + Jambes Entières</span>
                        <span className="font-medium text-blue-600">392 €</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h6 className="text-md font-outfit font-medium text-blue-600 mb-4">Forfaits 3 zones</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Dos + épaules + nuque</span>
                        <span className="font-medium text-blue-600">248 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Torse + Ventre + cou</span>
                        <span className="font-medium text-blue-600">203 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-700">Visage + Oreilles + Nez</span>
                        <span className="font-medium text-blue-600">132 €</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot Simple + Aisselles + Demi-Jambes</span>
                        <span className="font-medium text-blue-600">248 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot Intégral + Aisselles + Demi-Jambes</span>
                        <span className="font-medium text-blue-600">285 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-700">Maillot Simple + Aisselles + Jambes Entières</span>
                        <span className="font-medium text-blue-600">368 €</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Maillot Intégral + Aisselles + Jambes Entières</span>
                        <span className="font-medium text-blue-600">405 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Fesses + Maillot Intégral + Aisselles</span>
                        <span className="font-medium text-blue-600">255 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm text-neutral-700">Fesses + Maillot Intégral + Jambes Entières</span>
                        <span className="font-medium text-blue-600">473 €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-700">Fesses + Maillot Intégral + Demi-Jambes</span>
                        <span className="font-medium text-blue-600">353 €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations importantes */}
            <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl p-8 border border-amber-200/30 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h5 className="text-lg font-outfit font-medium text-amber-700">Informations importantes</h5>
              </div>
              <div className="space-y-4 text-sm text-amber-700/80">
                <p><strong>SIF :</strong> Sillon Inter-Fessier</p>
                <p><strong>Protocole :</strong> 6 à 8 séances en moyenne, espacées de 6 à 8 semaines</p>
                <p><strong>Consultation :</strong> Évaluation personnalisée obligatoire avant tout traitement</p>
                <p><strong>Efficacité :</strong> 90 à 95% de réduction pilaire après traitement complet</p>
                <p><strong>Séances d'entretien :</strong> Une séance annuelle peut être nécessaire (5-10% de repousse)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Autres traitements laser */}
        <section className="py-24 bg-gradient-to-br from-laser-subtle/20 to-brand-subtle/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-outfit font-light bg-gradient-to-r from-neutral-900 to-laser bg-clip-text text-transparent mb-6 tracking-tight">
                Autres Traitements Laser
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed font-light max-w-2xl mx-auto">
                Au-delà de l'épilation, nous proposons d'autres applications laser médicales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {autresLasers.map((traitement, index) => (
                <ActeCard
                  key={traitement.title}
                  {...traitement}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="bg-white">
          <FAQ items={faqItems} title="Questions fréquentes sur les traitements laser" />
        </div>

        {/* CTA final */}
        <section className="py-24 bg-gradient-to-br from-brand-subtle/30 to-laser-subtle/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-outfit font-light bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent mb-6 tracking-tight">
                Prêt(e) pour votre traitement laser ?
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed mb-12 font-light max-w-2xl mx-auto">
                Consultation personnalisée pour évaluer vos besoins et définir le protocole le plus adapté.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-laser text-white rounded-full font-medium hover:from-brand-hover hover:to-laser-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand/30 text-brand rounded-full font-medium hover:border-brand hover:bg-brand/5 transition-all duration-300"
                >
                  Poser une question
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}