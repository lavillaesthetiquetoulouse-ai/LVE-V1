'use client';

import { Hero } from '@/components/hero';
import { ActeCard } from '@/components/acte-card';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Calendar, ArrowRight, Zap, Droplets, Sparkles, Heart, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredActes = [
  {
    title: 'Injections Esthétiques',
    description: 'Injection des rides du front, acide hyaluronique, polynucléotides et exosomes pour un rajeunissement naturel.',
    duration: '30-45 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/injections-anti-age',
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    title: 'Morpheus 8 Visage & Body',
    description: 'Technologie révolutionnaire de microneedling RF pour raffermir et retendre la peau.',
    duration: '60-90 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/morpheus-8',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Morpheus8%20machine-dr-baron-la-villa-esthetique.png" alt="Morpheus 8" className="w-6 h-6" />,
  },
  {
    title: 'HydraFacial',
    description: 'Soin révolutionnaire combinant nettoyage, exfoliation et hydratation profonde.',
    duration: '60 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/hydrafacial',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Épilation Laser Clarity 2',
    description: 'Épilation définitive avec le laser Clarity 2, technologie de pointe pour tous phototypes.',
    duration: '15-60 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/epilation-laser-clarity',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Cryolipolyse',
    description: 'Destruction des cellules graisseuses par le froid pour sculpter la silhouette.',
    duration: '60-90 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/cryolipolyse',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Lumière Pulsée LUMECCA',
    description: 'Traitement des taches pigmentaires et lésions vasculaires par IPL dernière génération.',
    duration: '30-45 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/lumiere-pulsee-lumecca',
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: 'Laser CO2 DEKA',
    description: 'Resurfaçage cutané et traitement des cicatrices par laser CO2 fractionné.',
    duration: '45-60 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/laser-co2-deka',
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: 'Cristal Fit',
    description: 'Remodelage corporel par ondes électromagnétiques pour tonifier et sculpter.',
    duration: '30 min',
    priceFrom: 'Sur consultation',
    rating: 5,
    href: '/actes/cristal-fit',
    icon: <Star className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    initials: 'ML',
    text: 'Très satisfaite de mon épilation laser. Le Dr Baron est professionnelle et rassurante. Résultats excellents après 6 séances.',
    date: '15 janv. 2024',
    source: 'Doctolib',
    rating: 5,
  },
  {
    initials: 'PC',
    text: 'Cabinet moderne et accueillant. Les injections ont été réalisées avec délicatesse. Résultat très naturel, exactement ce que je souhaitais.',
    date: '08 janv. 2024',
    source: 'Google',
    rating: 5,
  },
  {
    initials: 'AS',
    text: 'Excellent suivi pour mon traitement de couperose. Le Dr Baron prend le temps d\'expliquer chaque étape. Je recommande vivement.',
    date: '22 déc. 2023',
    source: 'Doctolib',
    rating: 5,
  },
];

const faqItems = [
  {
    question: 'Quels sont les délais pour obtenir un rendez-vous ?',
    answer: 'Les créneaux sont généralement disponibles sous 2 à 3 semaines. Pour les consultations d\'urgence, contactez-nous directement par téléphone.',
  },
  {
    question: 'Les soins de médecine esthétique sont-ils douloureux ?',
    answer: 'La plupart des soins sont bien tolérés. Nous utilisons des techniques d\'anesthésie topique et des équipements dernière génération pour optimiser votre confort.',
  },
  {
    question: 'Combien de séances sont nécessaires pour l\'épilation laser ?',
    answer: 'En moyenne 6 à 8 séances sont nécessaires pour une épilation définitive, espacées de 6 à 8 semaines. Le nombre varie selon la zone traitée et le type de poil.',
  },
  {
    question: 'Acceptez-vous les paiements en plusieurs fois ?',
    answer: 'Oui, nous proposons des facilités de paiement pour les traitements complets. Les modalités sont discutées lors de la consultation.',
  },
  {
    question: 'Quelles sont les contre-indications aux traitements laser ?',
    answer: 'Les principales contre-indications incluent la grossesse, certains traitements médicaux, les infections cutanées actives. Une consultation préalable permet d\'évaluer votre éligibilité.',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Villa Esthétique & Docteur Laser - Dr Nadine Baron',
            description: 'Cabinet de médecine esthétique à Toulouse, quartier Lardenne. Épilation laser, injections anti-âge, peelings médicaux.',
            url: 'https://villa-esthetique-toulouse.fr',
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'La villa Esthetique',
              alternateName: 'Docteur Laser',
              description: 'Cabinet de médecine esthétique',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Quartier Lardenne',
                addressLocality: 'Toulouse',
                postalCode: '31100',
                addressCountry: 'FR',
              },
              telephone: '+33500000000',
              email: 'dr.baron.nadine@gmail.com',
              url: 'https://villa-esthetique-toulouse.fr',
              priceRange: '€€',
              paymentAccepted: 'Cash, Credit Card',
              currenciesAccepted: 'EUR',
              openingHours: ['Mo-Fr 08:00-20:00'],
              medicalSpecialty: 'Dermatology',
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
      
      <main>
        <Hero 
          title="Révélez votre beauté."
          subtitle="Naturellement."
          description="Un regard médical sur votre beauté. Le Dr Nadine Baron vous accompagne pour révéler le meilleur de vous-même. La Villa Esthétique : le naturel en priorité."
          showSecondaryButton={true}
          secondaryButtonText="Découvrir l'expérience"
          secondaryButtonHref="/actes"
        />
        
        {/* Featured Services */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <h2 
                className="font-bold text-neutral-900 mb-4 sm:mb-6 tracking-tight"
                style={{ fontSize: 'var(--text-4xl)' }}
              >
                Pensé pour vous.
              </h2>
              <p 
                className="text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed"
                style={{ fontSize: 'var(--text-lg)' }}
              >
                Chaque traitement est une œuvre d'art pour des résultats naturels et une expérience exceptionnelle.
              </p>
            </motion.div>


            {/* Injections Esthétiques - Droite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24"
            >
              <div className="lg:order-2 space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center hover-scale">
                    <img
                      src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/traitement-facial.png"
                      alt="Icône traitement facial"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-outfit font-bold text-neutral-900"
                      style={{ fontSize: 'var(--text-2xl)' }}
                    >
                      Injections Esthétiques
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 mt-2">
                      <span>⏰ 20-45 min</span>
                      <span>⭐ 5/5</span>
                      <span className="text-neutral-900 font-semibold">Prix sur consultation</span>
                    </div>
                  </div>
                </div>
                <p 
                  className="text-neutral-600 leading-relaxed mb-6"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Toxine botulique et acide hyaluronique pour un rajeunissement naturel. 
                  Traitement des rides d'expression, augmentation des lèvres, 
                  restauration des volumes. Résultats harmonieux et subtils. 
                  Tarifs personnalisés selon la zone traitée, évalués lors de la consultation médicale.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="/actes"
                    className="btn-primary-villa justify-center sm:justify-start"
                  >
                    Découvrir
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="btn-secondary justify-center sm:justify-start"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100/50 to-neutral-200/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover-lift">
                  <img
                    src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Salle-de-soin-injection-cabinet-docteur-baron-la-villa-esthetique.webp"
                    alt="Salle de soin injection - Cabinet Dr Baron La Villa Esthétique"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-neutral-900">15j</div>
                    <div className="text-xs text-neutral-600">Réflexion</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soins du Visage - Gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24"
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl flex items-center justify-center hover-scale">
                    <img
                      src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/traitement-facial%20(1).png"
                      alt="Icône traitement facial"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-outfit font-bold text-neutral-900"
                      style={{ fontSize: 'var(--text-2xl)' }}
                    >
                      Soins du Visage & Peelings
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 mt-2">
                      <span>⏰ 45-60 min</span>
                      <span>⭐ 5/5</span>
                      <span className="text-brand font-semibold">Prix sur consultation</span>
                    </div>
                  </div>
                </div>
                <p 
                  className="text-neutral-600 leading-relaxed mb-6"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Peelings médicaux superficiels et moyens, soins personnalisés anti-âge, 
                  traitement de l'acné par LED. Amélioration de la texture, de l'éclat 
                  et hydratation profonde pour tous types de peau. 
                  Tarifs adaptés selon le protocole choisi, déterminés en consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="/actes/peelings-medicaux"
                    className="btn-primary-villa justify-center sm:justify-start"
                  >
                    Découvrir
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/actes/soins-visage"
                    className="btn-secondary justify-center sm:justify-start"
                  >
                    Soins visage
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-subtle/50 to-laser-subtle/50 rounded-2xl sm:rounded-3xl overflow-hidden hover-lift">
                  <img
                    src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Traitement%20visage.png"
                    alt="Traitement visage - Cabinet Dr Baron La Villa Esthétique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm sm:text-lg font-bold text-brand">Soin</div>
                    <div className="text-xs text-neutral-600">Hydrafacial</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lasers Médicaux - Droite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
            >
              <div className="lg:order-2 space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl flex items-center justify-center hover-scale">
                    <img
                      src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/laser%20(1).png"
                      alt="Icône laser médical"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-outfit font-bold text-neutral-900"
                      style={{ fontSize: 'var(--text-2xl)' }}
                    >
                      Lasers Médicaux Spécialisés
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 mt-2">
                      <span>⏰ 15-45 min</span>
                      <span>⭐ 4-5/5</span>
                      <span className="text-brand font-semibold">Prix sur consultation</span>
                    </div>
                  </div>
                </div>
                <p 
                  className="text-neutral-600 leading-relaxed mb-6"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Lasers vasculaires pour couperose et télangiectasies, détatouage 
                  par laser Q-switched. Technologies avancées pour des traitements 
                  précis et sécurisés avec des résultats durables. 
                  Devis personnalisé établi après évaluation médicale de la zone à traiter.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="/actes/lasers-vasculaires"
                    className="btn-primary-villa justify-center sm:justify-start"
                  >
                    Découvrir
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/actes/detatouage-laser"
                    className="btn-secondary justify-center sm:justify-start"
                  >
                    Détatouage
                  </a>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-subtle/50 to-laser-subtle/50 rounded-2xl sm:rounded-3xl overflow-hidden hover-lift">
                  <img
                    src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/LED-%20peau-skin-esthetic-medecine.png"
                    alt="LED thérapie - Traitement peau esthétique médecine - Cabinet Dr Baron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-brand">KTP</div>
                    <div className="text-xs text-neutral-600">Laser</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-center mt-8 sm:mt-12"
            >
              <a
                href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                className="btn-primary-villa"
              >
                Explorer l'innovation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Dr Baron */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-neutral-100/20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 
                  className="mb-6 sm:mb-8 font-outfit font-bold text-neutral-900"
                  style={{ fontSize: 'var(--text-3xl)' }}
                >
                  L'art de la perfection.
                </h2>
                <p 
                  className="text-neutral-600 mb-6 sm:mb-8 leading-relaxed"
                  style={{ fontSize: 'var(--text-lg)' }}
                >
                  Le Dr Nadine Baron redéfinit l'excellence en médecine esthétique. 
                  Chaque geste est pensé, chaque résultat sublimé par une expertise sans compromis.
                </p>
                <div className="space-y-3 text-neutral-600 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-900 to-neutral-700 rounded-full" />
                    <span style={{ fontSize: 'var(--text-base)' }}>Excellence médicale certifiée</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-900 to-neutral-700 rounded-full" />
                    <span style={{ fontSize: 'var(--text-base)' }}>A la pointe des nouvelles techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-brand to-laser rounded-full" />
                    <span style={{ fontSize: 'var(--text-base)' }}>Équipements révolutionnaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-brand to-laser rounded-full" />
                    <span style={{ fontSize: 'var(--text-base)' }}>Résultats sur-mesure</span>
                  </div>
                </div>
                <a
                  href="/a-propos"
                  className="btn-secondary"
                >
                  À propos du Dr Baron
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <div className="glass-card">
                  <h3 
                    className="gradient-text mb-4 sm:mb-6 font-outfit font-bold"
                    style={{ fontSize: 'var(--text-xl)' }}
                  >
                    L'expérience La Villa Esthétique
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🛡️</div>
                      <div>
                        <h4 
                          className="font-light text-neutral-900"
                          style={{ fontSize: 'var(--text-base)' }}
                        >
                          À l'écoute de chaque patient
                        </h4>
                        <p className="text-neutral-600">Attentive à vos attentes et besoins</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💖</div>
                      <div>
                        <h4 
                          className="font-light text-neutral-900"
                          style={{ fontSize: 'var(--text-base)' }}
                        >
                          Sur-mesure intégral
                        </h4>
                        <p className="text-neutral-600">Chaque traitement unique</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⭐</div>
                      <div>
                        <h4 
                          className="font-light text-neutral-900"
                          style={{ fontSize: 'var(--text-base)' }}
                        >
                          Innovation pure
                        </h4>
                        <p className="text-neutral-600">Technologies révolutionnaires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* FAQ */}
        <FAQ items={faqItems} />

        {/* Final CTA */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-neutral-100/30 via-neutral-50/30 to-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 
                className="mb-6 sm:mb-8 font-outfit font-bold text-neutral-900"
                style={{ fontSize: 'var(--text-3xl)' }}
              >
                Votre transformation commence ici.
              </h2>
              <p 
                className="text-neutral-600 mb-8 sm:mb-12 leading-relaxed"
                style={{ fontSize: 'var(--text-lg)' }}
              >
                Découvrez une nouvelle dimension de la beauté. 
                Consultation exclusive, résultats extraordinaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa w-full sm:w-auto justify-center"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_click', {
                        event_category: 'engagement',
                      });
                    }
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Prendre RDV sur Doctolib
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="btn-secondary w-full sm:w-auto justify-center"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}