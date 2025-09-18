'use client';

import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Calendar, ArrowRight, Heart, Shield, Star, Sparkles, Users, Award, Eye, Camera, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/0E1E67EE-A9F2-48E7-A223-6C673EEC7BB8.webp',
    alt: 'Cabinet La Villa Esthétique - Vue intérieure',
    title: 'Espace Cabinet',
    description: 'Vue intérieure du cabinet La Villa Esthétique'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/A54A2811-HDR.webp',
    alt: 'Cabinet La Villa Esthétique - Salle de soins',
    title: 'Salle de Soins',
    description: 'Salle de soins équipée avec matériel médical de pointe'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/A54A2886-HDR.webp',
    alt: 'Cabinet La Villa Esthétique - Espace de consultation',
    title: 'Espace Consultation',
    description: 'Espace de consultation moderne et confortable'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/acceuil.webp',
    alt: 'Accueil La Villa Esthétique',
    title: 'Accueil',
    description: 'Hall d\'accueil chaleureux et moderne'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/BD219FEC-091F-47F1-ACF0-EF894EF8B006.webp',
    alt: 'Cabinet La Villa Esthétique - Salle d\'attente',
    title: 'Salle d\'Attente',
    description: 'Salle d\'attente confortable et apaisante'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/cristal%20fit%202.jpg',
    alt: 'Équipement Cristal Fit - La Villa Esthétique',
    title: 'Cristal Fit',
    description: 'Équipement Cristal Fit pour soins corporels avancés'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/CRISTAL%20FIT.jpg',
    alt: 'Salle Cristal Fit - La Villa Esthétique',
    title: 'Salle Cristal Fit',
    description: 'Salle dédiée aux traitements Cristal Fit'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/cryolipolyse%20et%20morpheus%208%20salle.jpg',
    alt: 'Salle Cryolipolyse et Morpheus 8 - La Villa Esthétique',
    title: 'Cryolipolyse & Morpheus 8',
    description: 'Salle équipée pour cryolipolyse et traitements Morpheus 8'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/EC202BCC-9FB3-4081-B2C0-12E1B2578C06.webp',
    alt: 'Cabinet La Villa Esthétique - Vue d\'ensemble',
    title: 'Vue d\'Ensemble',
    description: 'Vue d\'ensemble des espaces du cabinet'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/mon%20bureau%201.jpg',
    alt: 'Bureau Dr Nadine Baron - La Villa Esthétique',
    title: 'Bureau Dr Baron',
    description: 'Bureau de consultation du Dr Nadine Baron'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/SALLE%20CLARITY%202%20DR%20LASER.jpg',
    alt: 'Salle Clarity 2 - Docteur Laser',
    title: 'Salle Clarity 2',
    description: 'Salle équipée du laser Clarity pour épilation et traitements'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/salle%20d%20attente%20dr%20laser%202.jpg',
    alt: 'Salle d\'attente Docteur Laser',
    title: 'Attente Docteur Laser',
    description: 'Salle d\'attente dédiée aux patients Docteur Laser'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/SALLE%20DETATOUAGE%20DOCTEUR%20LASER.jpg',
    alt: 'Salle Détatouage - Docteur Laser',
    title: 'Salle Détatouage',
    description: 'Salle spécialisée pour les traitements de détatouage laser'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/SALLE%20LED%201.jpg',
    alt: 'Salle LED - La Villa Esthétique',
    title: 'Salle LED',
    description: 'Salle équipée pour les traitements LED thérapie'
  },
  {
    src: 'https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Le%20cabinet/Salle-de-soin-injection-cabinet-docteur-baron-la-villa-esthetique.webp',
    alt: 'Salle de soin injection - Cabinet Dr Baron La Villa Esthétique',
    title: 'Salle Injections',
    description: 'Salle dédiée aux injections esthétiques dans un environnement stérilisé'
  }
];

const conceptValues = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Approche Humaine',
    description: 'Une écoute attentive et bienveillante pour comprendre vos attentes et vous accompagner dans votre parcours beauté.',
    details: [
      'Consultation approfondie personnalisée',
      'Respect de vos souhaits et limites',
      'Suivi post-traitement attentif',
      'Disponibilité pour vos questions'
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Excellence Médicale',
    description: 'Des protocoles médicaux stricts et des équipements certifiés pour votre sécurité et des résultats optimaux.',
    details: [
      'Matériel médical certifié CE',
      'Protocoles de stérilisation rigoureux',
      'Formation continue aux dernières techniques',
      'Respect des normes ANSM'
    ]
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Résultats Naturels',
    description: 'Une philosophie axée sur l\'harmonie et la subtilité pour révéler votre beauté naturelle sans artifice.',
    details: [
      'Respect de vos traits naturels',
      'Résultats harmonieux et équilibrés',
      'Techniques douces et progressives',
      'Effet "bonne mine" privilégié'
    ]
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Innovation Technologique',
    description: 'Les équipements les plus avancés pour des traitements efficaces, confortables et sécurisés.',
    details: [
      'Technologies laser dernière génération',
      'Équipements premium reconnus',
      'Mise à jour régulière du matériel',
      'Recherche constante d\'innovation'
    ]
  }
];

const cabinetFeatures = [
  {
    title: 'Accueil Chaleureux',
    description: 'Un espace d\'accueil moderne et apaisant pour vous mettre à l\'aise dès votre arrivée.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Salles de Soins Dédiées',
    description: 'Chaque soin dispose de son espace optimisé avec l\'équipement spécialisé nécessaire.',
    icon: <Award className="w-6 h-6" />
  },
  {
    title: 'Environnement Stérilisé',
    description: 'Protocoles d\'hygiène et de stérilisation conformes aux normes médicales les plus strictes.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Intimité Préservée',
    description: 'Espaces conçus pour garantir votre intimité et votre confort pendant les soins.',
    icon: <Eye className="w-6 h-6" />
  }
];

export default function VillaEsthetiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'La Villa Esthétique - Cabinet Dr Nadine Baron Toulouse',
            description: 'Présentation du cabinet La Villa Esthétique, concept, ambiance et équipements',
            url: 'https://villa-esthetique-toulouse.fr/la-villa-esthetique',
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'La Villa Esthétique',
              description: 'Cabinet de médecine esthétique',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '286 avenue de Lardenne',
                addressLocality: 'Toulouse',
                postalCode: '31100',
                addressCountry: 'FR',
              },
              physician: {
                '@type': 'Physician',
                name: 'Dr Nadine Baron',
                medicalSpecialty: 'Aesthetic Medicine',
              },
            },
          }),
        }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'La Villa Esthétique' }]} />
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="apple-title-hero">
                  <span className="bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent">
                    La Villa Esthétique
                  </span>
                </h1>
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  Bien plus qu'un cabinet médical, La Villa Esthétique est un véritable cocon de bien-être 
                  où excellence médicale et douceur se rencontrent pour révéler votre beauté naturelle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-villa"
                  >
                    <Calendar className="w-5 h-5" />
                    Découvrir nos soins
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="/contact" className="btn-secondary">
                    Nous rendre visite
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre Concept */}
        <section className="py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                Notre Concept Unique
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                La Villa Esthétique incarne une vision moderne de la médecine esthétique : 
                allier expertise médicale, technologies de pointe et approche humaine dans un cadre exceptionnel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conceptValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-brand-subtle/20 rounded-2xl p-8 border border-brand/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl text-brand">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-outfit font-bold text-neutral-900">
                      {value.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* L'Ambiance du Cabinet */}
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-brand-subtle/20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                L'Ambiance de La Villa
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Chaque détail a été pensé pour créer une atmosphère apaisante et rassurante, 
                où vous vous sentirez en confiance pour votre parcours beauté.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cabinetFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl mb-4 mx-auto text-brand">
                    {feature.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie Photos */}
        <section className="py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Camera className="w-8 h-8 text-brand" />
                <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900">
                  Galerie du Cabinet
                </h2>
              </div>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez en images l'atmosphère unique de La Villa Esthétique et nos espaces 
                dédiés à votre bien-être et à votre beauté.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-subtle/50 to-laser-subtle/50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay avec informations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-outfit font-bold text-xl mb-2">
                        {image.title}
                      </h3>
                      <p className="text-sm text-neutral-200 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Badge numéro */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand font-semibold text-sm">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note sur les photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="bg-brand-subtle/30 rounded-xl p-6 border border-brand/20 max-w-2xl mx-auto">
                <p className="text-sm text-neutral-700 leading-relaxed">
                  <strong>Photos authentiques :</strong> Toutes les images présentées sont des photos réelles 
                  de nos espaces de soins. Nous privilégions la transparence pour que vous puissiez découvrir 
                  l'environnement dans lequel vous serez accueilli(e).
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Informations Pratiques */}
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-brand-subtle/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                  Informations Pratiques
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Tout ce qu'il faut savoir pour votre visite à La Villa Esthétique.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-brand" />
                    <h3 className="font-outfit font-semibold text-xl text-neutral-900">
                      Localisation
                    </h3>
                  </div>
                  <div className="space-y-2 text-neutral-700">
                    <div className="font-medium">La Villa Esthétique</div>
                    <div>Dr Nadine Baron</div>
                    <div>286 avenue de Lardenne</div>
                    <div>31100 Toulouse</div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <div className="text-sm text-neutral-600">
                      <div>🚗 Parking gratuit à proximité</div>
                      <div>🚌 Arrêt "Lardenne" - Lignes 37, 59, 67</div>
                      <div>♿ Cabinet accessible PMR</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-brand" />
                    <h3 className="font-outfit font-semibold text-xl text-neutral-900">
                      Horaires
                    </h3>
                  </div>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">8h - 19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600">
                      <strong>Sur rendez-vous uniquement</strong><br />
                      Consultations et soins programmés pour votre confort
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-br from-brand-subtle/30 to-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                Prêt(e) à découvrir La Villa Esthétique ?
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Venez découvrir notre univers unique où votre bien-être et votre beauté 
                sont notre priorité. Le Dr Nadine Baron vous accueille dans un cadre exceptionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
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
    </>
  );
}