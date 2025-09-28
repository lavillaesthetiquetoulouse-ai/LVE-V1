import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Calendar, ArrowRight, Award, Users, Shield, Heart, Clock, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos du Dr Nadine Baron | Villa Esthétique & Laser pas cher Toulouse',
  description: 'Découvrez le Dr Nadine Baron, médecin esthétique à Toulouse Lardenne. Formation, expertise, équipements de pointe pour votre sécurité et votre beauté.',
  keywords: 'Dr Nadine Baron, médecin esthétique, Toulouse, Lardenne, formation, expertise, équipements'
};

const formations = [
  'Diplôme de Docteur en Médecine',
  'DU de Médecine Esthétique et Anti-âge',
  'Formation Épilation Laser Médicale',
  'Certification Injections Esthétiques',
  'Formation continue Dermatologie Esthétique',
];

const equipements = [
  {
    name: 'Laser Diode 808nm',
    manufacturer: 'Candela',
    description: 'Épilation laser définitive, tous phototypes',
    specs: 'Refroidissement intégré, spot 12x20mm',
  },
  {
    name: 'Laser KTP 532nm',
    manufacturer: 'Cutera',
    description: 'Traitement lésions vasculaires',
    specs: 'Couperose, télangiectasies, angiomes',
  },
  {
    name: 'Laser Q-switched',
    manufacturer: 'Quanta System',
    description: 'Détatouage et pigmentation',
    specs: 'Multi-longueurs d\'onde, toutes couleurs',
  },
  {
    name: 'LED Médicale',
    manufacturer: 'Dermalux',
    description: 'Photothérapie anti-acné et cicatrisation',
    specs: '415nm, 633nm, 830nm',
  },
];

const valeurs = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Sécurité avant tout',
    description: 'Protocoles médicaux stricts, matériel certifié CE, formation continue pour votre sécurité.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Approche naturelle',
    description: 'Résultats harmonieux respectant votre beauté naturelle, sans artifice ni excès.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Écoute personnalisée',
    description: 'Consultation approfondie, conseils adaptés, suivi personnalisé pour chaque patient.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence technique',
    description: 'Équipements de dernière génération, techniques innovantes, formation permanente.',
  },
];

export default function AProposPage() {
  return (
    <div>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'À propos du Dr Nadine Baron - Villa Esthétique Toulouse',
              description: 'Présentation du Dr Nadine Baron, médecin esthétique à Toulouse Lardenne',
              url: 'https://villa-esthetique-toulouse.fr/a-propos',
              mainEntity: {
                '@type': 'Physician',
                name: 'Dr Nadine Baron',
                jobTitle: 'Médecin esthétique',
                medicalSpecialty: 'Aesthetic Medicine',
                worksFor: {
                  '@type': 'MedicalClinic',
                  name: 'Villa Esthétique',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Quartier Lardenne',
                    addressLocality: 'Toulouse',
                    postalCode: '31100',
                    addressCountry: 'FR',
                  },
                },
              },
            }),
          }}
        />
      </div>

      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'À propos' }]} />
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-outfit font-bold text-neutral-900 mb-6">
                <span className="apple-title-hero text-neutral-900">
                  Dr Nadine Baron
                </span>
              </h1>
              <p className="apple-subtitle text-neutral-700 mb-8">
                Médecin esthétique passionnée, je vous accompagne dans votre quête de bien-être 
                et de beauté naturelle au cœur de Toulouse Lardenne.
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
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portrait et mission */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Photo du Dr Baron */}
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="aspect-[4/5] bg-gradient-to-br from-brand-subtle/50 to-laser-subtle/50 rounded-3xl overflow-hidden shadow-xl">
                      <img
                        src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/DR%20BARON/Dr-Baron-Morpheus8-soin-skin.jpg"
                        alt="Dr Nadine Baron - Médecin esthétique à Toulouse"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Éléments décoratifs */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand/20 to-laser/20 rounded-full blur-xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-laser/10 to-brand/10 rounded-full blur-xl" />
                    
                    {/* Badge professionnel */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-neutral-900">Dr Nadine Baron</div>
                        <div className="text-xs text-neutral-600">Médecin Esthétique</div>
                        <div className="text-xs text-brand font-medium">Toulouse Lardenne</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:order-1">
                  <h2 className="apple-title-section mb-6">
                    Ma mission
                  </h2>
                  <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                      Diplômée en médecine esthétique et anti-âge, j'ai créé Villa Esthétique 
                      et Laser pas cher pour offrir à Toulouse des soins esthétiques médicaux 
                      de haute qualité dans un environnement sécurisé et bienveillant.
                    </p>
                    <p>
                      Ma philosophie repose sur une approche naturelle et personnalisée : 
                      chaque patient est unique, chaque traitement est adapté. Je privilégie 
                      toujours l'harmonie et la subtilité pour révéler votre beauté naturelle.
                    </p>
                    <p>
                      Installée dans le quartier Lardenne, je mets mon expertise au service 
                      de votre bien-être avec des équipements de dernière génération et 
                      une formation continue aux techniques les plus innovantes.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Coordonnées du cabinet - Pleine largeur */}
            <div className="mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="font-outfit font-semibold text-xl text-neutral-900 mb-6 text-center">
                  Coordonnées du cabinet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-outfit font-semibold text-xl text-neutral-900 mb-6">
                      Adresse
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-neutral-900">La villa Esthetique</div>
                          <div className="text-neutral-600">Dr Nadine Baron</div>
                          <div className="text-neutral-600">286 avenue de Lardenne</div>
                          <div className="text-neutral-600">31100 Toulouse</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-outfit font-semibold text-xl text-neutral-900 mb-6">
                      Contact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                        <a href="tel:+33562140410" className="text-neutral-700 hover:text-brand transition-colors">
                          05 62 14 04 10
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                        <a href="mailto:dr.baron.nadine@gmail.com" className="text-neutral-700 hover:text-brand transition-colors">
                          dr.baron.nadine@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-outfit font-semibold text-xl text-neutral-900 mb-6">
                      Horaires
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-brand flex-shrink-0" />
                        <div className="text-neutral-700">
                          <div className="font-medium">Lun-Ven : 8h-19h</div>
                          <div className="text-sm text-neutral-500">Sam-Dim : Fermé</div>
                          <div className="text-sm text-neutral-500 mt-2">Sur rendez-vous uniquement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-16 bg-neutral-100">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                Mes valeurs
              </h2>
              <p className="text-lg text-neutral-600">
                Quatre piliers guident ma pratique quotidienne de la médecine esthétique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((valeur, index) => (
                <div key={valeur.title} className="card text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl mb-4 mx-auto text-brand">
                    {valeur.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-3">
                    {valeur.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-8 text-center">
                Formation et expertise
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="font-outfit font-semibold text-xl text-neutral-900 mb-4">
                    Diplômes et formations
                  </h3>
                  <ul className="space-y-3">
                    {formations.map((formation) => (
                      <li key={formation} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{formation}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">
                      Formation continue obligatoire : 40h/an minimum selon la réglementation médicale.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-outfit font-semibold text-xl text-neutral-900 mb-4">
                    Domaines d'expertise
                  </h3>
                  <div className="space-y-3 text-sm text-neutral-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span>Épilation laser définitive (tous phototypes)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span>Injections esthétiques (toxine botulique, acide hyaluronique)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span>Peelings médicaux et soins du visage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span>Lasers vasculaires et détatouage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span>Traitement de l'acné et des cicatrices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span>Mésothérapie et revitalisation cutanée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Équipements */}
        <section className="py-16 bg-neutral-100">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-8 text-center">
                Équipements de pointe
              </h2>
              <p className="text-lg text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
                J'investis dans les technologies les plus avancées pour vous garantir 
                sécurité, efficacité et confort optimal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {equipements.map((equipement) => (
                  <div key={equipement.name} className="card">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-outfit font-semibold text-lg text-neutral-900">
                        {equipement.name}
                      </h3>
                      <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                        {equipement.manufacturer}
                      </span>
                    </div>
                    <p className="text-neutral-700 mb-3">
                      {equipement.description}
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Spécifications :</strong> {equipement.specs}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-info/10 rounded-xl p-6 border border-info/20">
                <h3 className="font-semibold text-lg text-info mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Certifications et sécurité
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-700">
                  <div>• Tous les équipements sont certifiés CE médical</div>
                  <div>• Maintenance préventive trimestrielle</div>
                  <div>• Protocoles de désinfection stricts</div>
                  <div>• Formation fabricant pour chaque appareil</div>
                  <div>• Assurance responsabilité civile professionnelle</div>
                  <div>• Respect des normes ANSM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-br from-brand-subtle to-neutral-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="apple-title-section mb-6">
                Prenons rendez-vous
              </h2>
              <p className="apple-description text-neutral-700 mb-8">
                Je serais ravie de vous rencontrer pour discuter de vos attentes 
                et vous proposer un protocole personnalisé adapté à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre RDV sur Doctolib
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  Poser une question
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="py-8 bg-neutral-900 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Informations générales :</strong> Le contenu de cette page est informatif 
                et ne remplace pas une consultation médicale personnalisée. Seul le Dr Nadine Baron 
                peut établir un diagnostic et recommander un traitement adapté à votre situation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}