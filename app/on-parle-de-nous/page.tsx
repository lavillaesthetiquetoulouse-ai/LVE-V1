import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { GoogleReviews } from '@/components/google-reviews';
import { ExternalLink, Award, Newspaper, Mic, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'On parle de nous | Villa Esthétique & Docteur Laser Toulouse',
  description: 'Découvrez ce que les médias et nos patients disent de Villa Esthétique et du Dr Nadine Baron. Témoignages, articles de presse et reconnaissance professionnelle.',
  keywords: 'Villa Esthétique, Dr Nadine Baron, témoignages, avis patients, presse, médias, reconnaissance',
};


const mediaAppearances = [
  {
    type: 'Site Web',
    outlet: 'Multiesthetique.fr',
    title: 'Dr Nadine Baron - Spécialiste médecine morphologique et anti-âge',
    date: '2024',
    description: 'Ce site met en lumière le professionnalisme du Docteur Nadine Baron, spécialiste de la médecine morphologique, anti-âge, nutrition et mésothérapie, qui reçoit chaque patient avec une approche globale centrée sur le bien-vieillir, la beauté et le bien-être.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://www.multiesthetique.fr/cabinets/dr-nadine-baron-centre-laser-et-anti-age-du-grand-toulouse',
  },
  {
    type: 'Témoignages',
    outlet: 'Wheree.com',
    title: 'Témoignages patients - Dr Nadine Baron',
    date: '2024',
    description: 'Les témoignages d\'anciens patients saluent l\'expertise du Dr Nadine Baron, la qualité des équipements et le soin apporté à chaque personne, soulignant ainsi son excellente réputation dans le secteur de la médecine esthétique.',
    icon: <Users className="w-6 h-6" />,
    url: 'https://drnadine-baron-mdecin-esthtique.wheree.com/',
  },
  {
    type: 'Profil',
    outlet: 'Lemedecin.fr',
    title: 'Cabinet du Dr Nadine Baron - Médecin généraliste',
    date: '2024',
    description: 'Ce site décrit le vaste champ de compétences du Dr Baron : médecine esthétique, injections, lasers, cryolipolyse, épilation laser, nutrition, sport, réparation corporelle et traumatologie. Sa formation reconnue et ses distinctions illustrent une exigence élevée au service du patient.',
    icon: <Award className="w-6 h-6" />,
    url: 'https://lemedecin.fr/toulouse/cabinet-du-dr-nadine-baron/medecin-generaliste/docteur-baron-nadine/650c5a8db4a242cbe6a4f31c07e5664d/pro/',
  },
  {
    type: 'Article',
    outlet: 'Anti Age Magazine',
    title: 'Microneedling et radiofréquence',
    date: '2024',
    description: 'Publication spécialisée qui met en avant la maîtrise du microneedling et de la radiofréquence par le Dr Baron, soulignant son engagement pour des techniques innovantes et peu invasives au service du rajeunissement naturel et progressif de la peau.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://www.anti-age-magazine.com/baron-microneedling/',
  },
  {
    type: 'Article',
    outlet: 'Anti-Age Magazine',
    title: 'Hyperpigmentation génitale',
    date: '2024',
    description: 'Le Dr Nadine Baron signe un article pédagogique sur l\'hyperpigmentation intime : causes fréquentes, prise en charge dépigmentante dédiée (type peelings ciblés) et accompagnement en toute discrétion, pour tous phototypes.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://en.anti-age-magazine.com/genital-hyperpigmentation-nadine-baron/',
  },
  {
    type: 'Article',
    outlet: 'Anti-Age Magazine',
    title: 'Remodelage corporel global avec EVOLVE (TRIM / TITE / TONE)',
    date: '2024',
    description: 'Une approche globale du remodelage corporel non invasif qui agit sur la peau, la graisse et le muscle grâce à la radiofréquence et l\'EMS, pour des zones plus fermes et dessinées, sans éviction sociale.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://en.anti-age-magazine.com/body-contouring-evolve-nadine-baron/',
  },
  {
    type: 'Article',
    outlet: 'Anti-Age Magazine',
    title: 'Un décolleté impeccable grâce aux traitements combinés',
    date: '2024',
    description: 'Focus sur la poitrine, le décolleté et le cou : le Dr Baron explique l\'intérêt des traitements combinés (inducteurs tissulaires + acide hyaluronique) pour lisser, hydrater et redonner du maintien, avec un rendu naturel.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://en.anti-age-magazine.com/flawless-bust-hyaluronic-acid/',
  },
  {
    type: 'Article',
    outlet: 'Anti-Age Magazine',
    title: 'Nos experts – Numéro 37 d\'Anti Age Magazine',
    date: '2024',
    description: 'Le Dr Nadine Baron figure parmi les experts d\'Anti Age Magazine, gage de sérieux éditorial et d\'expérience en médecine morphologique et anti-âge.',
    icon: <Award className="w-6 h-6" />,
    url: 'https://en.anti-age-magazine.com/our-experts-issue-37-anti-age-magazine/',
  },
  {
    type: 'Article',
    outlet: 'Anti-Age Magazine',
    title: 'Renouveler sa peau après l\'été',
    date: '2024',
    description: 'Après l\'été, le Dr Baron détaille une stratégie combinée (biorevitalisation PRX-T33, mésothérapie, LED) adaptée à tous les phototypes pour raviver l\'éclat, lisser le grain de peau et corriger les taches.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://en.anti-age-magazine.com/renew-your-skin-after-the-summer/',
  },
  {
    type: 'Article',
    outlet: 'Anti-Age Magazine',
    title: 'Dites adieu aux vergetures !',
    date: '2024',
    description: 'Explications claires sur l\'apport de la photobiomodulation par LED associée à des peelings pour atténuer l\'aspect des vergetures, dans une démarche progressive et non invasive.',
    icon: <Newspaper className="w-6 h-6" />,
    url: 'https://en.anti-age-magazine.com/say-goodbye-to-stretch-marks/',
  },
];

const qualifications = [
  {
    title: 'Médecin généraliste',
    organization: 'Exercice depuis 1990',
    year: '30+ ans',
    description: 'Plus de 30 ans d\'expérience en médecine générale et formation médicale continue.',
    category: 'experience'
  },
  {
    title: 'CAPEDOC - Major de promotion',
    organization: 'Paris',
    year: '2016-2017',
    description: 'Diplômée du CAPEDOC avec distinction - Major de la promotion 2016-2017.',
    category: 'formation'
  },
  {
    title: 'Médecine Morphologique et Anti-Âge',
    organization: 'Paris',
    year: 'Diplômée',
    description: 'Spécialisation en médecine esthétique et techniques de rajeunissement.',
    category: 'formation'
  },
  {
    title: 'Médecine et Biologie du Sport',
    organization: 'Toulouse',
    year: 'Diplômée',
    description: 'Formation spécialisée en médecine du sport et biologie de l\'effort.',
    category: 'formation'
  },
  {
    title: 'Réparation Juridique du Dommage Corporel',
    organization: 'Toulouse',
    year: 'Diplômée',
    description: 'Expertise en évaluation et réparation des dommages corporels.',
    category: 'formation'
  },
  {
    title: 'Mésothérapie',
    organization: 'Bordeaux',
    year: 'Diplômée',
    description: 'Techniques d\'injection intradermique pour traitements esthétiques et thérapeutiques.',
    category: 'formation'
  },
  {
    title: 'Nutrition et Diabétologie',
    organization: 'Montpellier',
    year: 'Diplômée',
    description: 'Double spécialisation en nutrition médicale et prise en charge du diabète.',
    category: 'formation'
  },
  {
    title: 'Expert médical multi-compagnies',
    organization: 'AVIVA, AXA, GENERALI, GMF, GROUPAMA et autres',
    year: 'Depuis 1990',
    description: 'Médecin conseil reconnu par les principales compagnies d\'assurance françaises.',
    category: 'experience'
  },
];

export default function OnParleDeNousPage() {
  return (
    <div>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'On parle de nous - Villa Esthétique Toulouse',
              description: 'Témoignages, avis patients et reconnaissance média de Villa Esthétique',
              url: 'https://lavillaesthetique-toulouse.com/on-parle-de-nous',
              about: {
                '@type': 'MedicalBusiness',
                name: 'Villa Esthétique',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.6',
                  reviewCount: '176',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
            }),
          }}
        />
      </div>

      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'On parle de nous' }]} />
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-outfit font-bold text-neutral-900 mb-6">
                <span className="apple-title-hero text-neutral-900">
                  On parle de nous
                </span>
              </h1>
              <p className="apple-subtitle text-neutral-700 mb-8">
                Découvrez ce que nos patients et les médias disent de Villa Esthétique. 
                Votre confiance et votre satisfaction sont notre plus belle récompense.
              </p>
              <div className="max-w-3xl mx-auto">
                <p className="text-base leading-relaxed text-neutral-700 font-medium">
                  Nous avons le privilège de pouvoir dire que des <strong>milliers de patientes et patients nous font confiance</strong> depuis toutes ces années. 
                </p>
                <p className="text-base leading-relaxed text-neutral-700 mt-4">
                  À toutes celles et tous ceux qui ont franchi la porte de La Villa Esthétique, qui reviennent avec confiance et qui nous recommandent, nous tenons à travers cette page à vous témoigner toute notre <strong>gratitude sincère</strong>. Car pour chaque membre de La Villa Esthétique, c'est bien plus qu'un métier : <strong>c'est une véritable passion au service de votre beauté</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Google Reviews */}
        <GoogleReviews />

        {/* Apparitions médias */}
        <section className="py-16 bg-neutral-100">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="apple-title-section mb-6">
                  Reconnaissance médiatique
                </h2>
                <p className="text-lg text-neutral-600">
                  Le Dr Nadine Baron partage son expertise dans les médias locaux et spécialisés.
                </p>
              </div>

              <div className="space-y-4">
                {mediaAppearances.map((media, index) => (
                  <a
                    key={index}
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group block"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        {media.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                          <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-1 group-hover:text-brand transition-colors duration-300">
                            {media.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-neutral-500 flex-shrink-0">
                            <span className="text-brand font-medium">{media.outlet}</span>
                            <span>•</span>
                            <span>{media.date}</span>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                          {media.description}
                        </p>
                        <div className="flex items-center text-brand text-sm font-medium">
                          Lire l'article
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications et expertise */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="apple-title-section mb-6">
                  Qualifications du Dr Nadine Baron
                </h2>
                <p className="text-lg text-neutral-600">
                  Plus de 30 ans d'expérience médicale et une expertise reconnue par les professionnels.
                </p>
              </div>

              {/* Formations */}
              <div className="mb-8">
                <h3 className="text-xl font-outfit font-semibold text-neutral-900 mb-6 text-center">
                  Formations et diplômes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {qualifications.filter(q => q.category === 'formation').map((qualification, index) => (
                    <div key={index} className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-brand-subtle rounded-xl text-brand flex-shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="font-outfit font-semibold text-base text-neutral-900">
                              {qualification.title}
                            </h4>
                            <div className="text-brand font-medium text-sm">
                              {qualification.year}
                            </div>
                          </div>
                          <div className="text-neutral-600 mb-2 text-sm">
                            {qualification.organization}
                          </div>
                          <p className="text-xs text-neutral-700 leading-relaxed">
                            {qualification.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expérience professionnelle */}
              <div>
                <h3 className="text-xl font-outfit font-semibold text-neutral-900 mb-6 text-center">
                  Expérience professionnelle
                </h3>
                <div className="space-y-4">
                  {qualifications.filter(q => q.category === 'experience').map((qualification, index) => (
                    <div key={index} className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-laser-subtle rounded-xl text-laser flex-shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="font-outfit font-semibold text-base text-neutral-900">
                              {qualification.title}
                            </h4>
                            <div className="text-laser font-medium text-sm">
                              {qualification.year}
                            </div>
                          </div>
                          <div className="text-neutral-600 mb-2 text-sm">
                            {qualification.organization}
                          </div>
                          <p className="text-xs text-neutral-700 leading-relaxed">
                            {qualification.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Note sur l'expertise */}
              <div className="mt-12 bg-brand-subtle/30 rounded-xl p-6 border border-brand/20">
                <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-3 text-center">
                  Médecin expert reconnu
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed text-center">
                  Le Dr Nadine Baron est médecin conseil pour de nombreuses compagnies d'assurance : 
                  <strong> AVIVA, PJ, AIG, AXA, CIPRES, GAN, GENERALI, GMF, GROUPAMA, SOGESSUR, VERLINGUE, MUTUELLE DES SPORTIFS</strong>.
                  Cette reconnaissance par les professionnels témoigne de son expertise et de sa rigueur médicale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-brand-subtle to-neutral-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="apple-title-section mb-6">
                Rejoignez nos patients satisfaits
              </h2>
              <p className="apple-description text-neutral-700 mb-8">
                Découvrez pourquoi tant de personnes nous font confiance pour leurs soins esthétiques. 
                Prenez rendez-vous dès maintenant pour votre première consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa"
                >
                  Prendre rendez-vous
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  Poser une question
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}