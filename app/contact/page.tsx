'use client';

import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FAQ } from '@/components/faq';
import { Calendar, ArrowRight, MapPin, Phone, Mail, Clock, Send, MessageCircle, User, FileText } from 'lucide-react';
import { useState } from 'react';

const contactInfo = {
  address: {
    name: 'La villa Esthetique',
    doctor: 'Dr Nadine Baron',
    street: '286 avenue de Lardenne',
    city: '31100 Toulouse',
  },
  phone: '05 62 14 04 10',
  email: 'dr.baron.nadine@gmail.com',
  hours: {
    weekdays: 'Lundi - Vendredi : 8h - 19h',
    saturday: 'Samedi - Dimanche : Fermé',
  },
};

const faqItems = [
  {
    question: 'Comment prendre rendez-vous ?',
    answer: 'Vous pouvez prendre rendez-vous directement sur Doctolib 24h/24, par téléphone aux heures d\'ouverture, ou via notre formulaire de contact.',
  },
  {
    question: 'Quels sont les délais pour obtenir un rendez-vous ?',
    answer: 'Les créneaux sont généralement disponibles sous 2 à 3 semaines. Pour les consultations d\'urgence, contactez-nous directement par téléphone.',
  },
  {
    question: 'Acceptez-vous les nouveaux patients ?',
    answer: 'Oui, nous accueillons régulièrement de nouveaux patients. Une consultation initiale est nécessaire avant tout traitement.',
  },
  {
    question: 'Faut-il une ordonnance pour consulter ?',
    answer: 'Non, aucune ordonnance n\'est nécessaire pour une consultation de médecine esthétique. Vous pouvez prendre rendez-vous directement.',
  },
  {
    question: 'Proposez-vous des consultations à distance ?',
    answer: 'Pour certains suivis ou conseils, nous proposons des téléconsultations. Cependant, un examen physique reste nécessaire pour la plupart des traitements.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact - Villa Esthétique Dr Nadine Baron Toulouse',
            description: 'Contactez le Dr Nadine Baron pour vos soins de médecine esthétique à Toulouse Lardenne',
            url: 'https://villa-esthetique-toulouse.fr/contact',
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'La villa Esthetique',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '286 avenue de Lardenne',
                addressLocality: 'Toulouse',
                postalCode: '31100',
                addressCountry: 'FR',
              },
              telephone: '+33500000000',
              email: 'dr.baron.nadine@gmail.com',
              openingHours: ['Mo-Fr 08:00-19:00'],
            },
          }),
        }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="apple-title-hero">
                <span className="bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent">
                  Nous Contacter
                </span>
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Une question sur nos soins ? Besoin de conseils personnalisés ? 
                Le Dr Nadine Baron et son équipe sont à votre écoute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <a href="tel:+33500000000" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact info */}
                <div>
                  <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-8">
                    Informations pratiques
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl flex-shrink-0">
                          <MapPin className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                          <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-2">
                            Adresse du cabinet
                          </h3>
                          <div className="text-neutral-700 space-y-1">
                            <div>{contactInfo.address.name}</div>
                            <div>{contactInfo.address.doctor}</div>
                            <div>{contactInfo.address.street}</div>
                            <div>{contactInfo.address.city}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl flex-shrink-0">
                          <Phone className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                          <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-2">
                            Téléphone
                          </h3>
                          <a 
                            href="tel:+33562140410"
                            className="text-neutral-700 hover:text-brand transition-colors"
                          >
                            {contactInfo.phone}
                          </a>
                          <p className="text-sm text-neutral-500 mt-1">
                            Répondeur en dehors des heures d'ouverture
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl flex-shrink-0">
                          <Mail className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                          <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-2">
                            Email
                          </h3>
                          <a 
                            href={`mailto:${contactInfo.email}`}
                            className="text-neutral-700 hover:text-brand transition-colors"
                          >
                            {contactInfo.email}
                          </a>
                          <p className="text-sm text-neutral-500 mt-1">
                            Réponse sous 48h ouvrées
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-subtle rounded-xl flex-shrink-0">
                          <Clock className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                          <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-2">
                            Horaires d'ouverture
                          </h3>
                          <div className="text-neutral-700 space-y-1 text-sm">
                            <div>{contactInfo.hours.weekdays}</div>
                            <div>{contactInfo.hours.saturday}</div>
                          </div>
                          <p className="text-sm text-neutral-500 mt-2">
                            Sur rendez-vous uniquement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact form */}
                <div>
                  <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-8">
                    Formulaire de contact
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="card space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                          Nom complet *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                          Téléphone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-900 mb-2">
                        Sujet *
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Choisissez un sujet</option>
                          <option value="consultation">Demande de consultation</option>
                          <option value="epilation">Épilation laser</option>
                          <option value="injections">Injections esthétiques</option>
                          <option value="soins">Soins du visage</option>
                          <option value="tarifs">Informations tarifaires</option>
                          <option value="autre">Autre demande</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-vertical"
                          placeholder="Décrivez votre demande, vos attentes ou posez vos questions..."
                        />
                      </div>
                    </div>

                    <div className="text-xs text-neutral-500 leading-relaxed">
                      En soumettant ce formulaire, vous acceptez que vos données personnelles 
                      soient utilisées pour vous recontacter dans le cadre de votre demande. 
                      Consultez notre{' '}
                      <a href="/politique-de-confidentialite" className="text-brand hover:underline">
                        politique de confidentialité
                      </a>.
                    </div>

                    <button
                      type="submit"
                      className="btn-primary-villa w-full justify-center"
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur les rendez-vous" />

        {/* Map placeholder */}
        <section className="py-16 bg-neutral-100">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                Nous trouver
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Cabinet situé au 286 avenue de Lardenne à Toulouse, facilement accessible 
                en voiture avec parking à proximité.
              </p>
              
              {/* Google Maps */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                  <img
                    src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Google%20maps-%20286-avenue-de-lardenne-lavillaesthetique.png"
                    alt="Plan d'accès au cabinet La villa Esthetique - 286 avenue de Lardenne, 31100 Toulouse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-6">
                  <a
                    href="https://maps.app.goo.gl/DuYuq3wjKzrBGrSk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MapPin className="w-5 h-5" />
                    Ouvrir dans Google Maps
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <h4 className="font-medium text-neutral-900 mb-1">🚗 En voiture</h4>
                    <p className="text-neutral-600">Parking gratuit à proximité</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium text-neutral-900 mb-1">🚌 En transport</h4>
                    <p className="text-neutral-600">Arrêt de bus à 200m</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium text-neutral-900 mb-1">♿ Accessibilité</h4>
                    <p className="text-neutral-600">Cabinet accessible PMR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="py-8 bg-neutral-900 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Informations générales :</strong> Ce formulaire de contact ne remplace pas 
                une consultation médicale. Pour toute urgence médicale, contactez le 15 (SAMU) ou 
                rendez-vous aux urgences les plus proches.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}