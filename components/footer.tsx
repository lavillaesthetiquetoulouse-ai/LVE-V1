'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, ChevronDown, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

// Composant Accordion pour mobile
function AccordionSection({ 
  title, 
  icon, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-inset rounded-lg"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="text-neutral-400">{icon}</div>
          <h3 className="font-outfit font-semibold text-lg text-white">
            {title}
          </h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-8 sm:py-12">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Coordonnées */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-4">
              <div className="flex items-center gap-3">
                <OptimizedImage
                  src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-32.png"
                  alt="Logo La Villa Esthétique"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain flex-shrink-0"
                />
                La villa Esthetique
              </div>
            </h3>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Dr Nadine Baron</div>
                  <div>286 avenue de Lardenne</div>
                  <div>31100 Toulouse</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+33562140410" className="hover:text-white transition-colors">
                  05 62 14 04 10
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:dr.baron.nadine@gmail.com" className="hover:text-white transition-colors">
                  dr.baron.nadine@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-4">
              <Clock className="w-4 h-4 inline mr-2" />
              Horaires
            </h3>
            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-4">
                <span className="w-20 flex-shrink-0">Lun - Ven</span>
                <span>8h - 19h</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 flex-shrink-0">Sam - Dim</span>
                <span>Fermé</span>
              </div>
              <div className="text-xs text-neutral-400 mt-3">
                Sur rendez-vous uniquement
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-4">
              Navigation
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/actes" className="block text-neutral-300 hover:text-white transition-colors">
                Nos soins
              </Link>
              <Link href="/docteur-laser" className="block text-neutral-300 hover:text-white transition-colors">
                Docteur Laser
              </Link>
              <Link href="/blog" className="block text-neutral-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/a-propos" className="block text-neutral-300 hover:text-white transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="block text-neutral-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/on-parle-de-nous" className="block text-neutral-300 hover:text-white transition-colors">
                On parle de nous
              </Link>
            </nav>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-4">
              Informations
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/mentions-legales" className="block text-neutral-300 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="block text-neutral-300 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cookies" className="block text-neutral-300 hover:text-white transition-colors">
                Gestion des cookies
              </Link>
              <Link href="/accessibilite" className="block text-neutral-300 hover:text-white transition-colors">
                Accessibilité
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-neutral-700">
              <a
                href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                Prendre RDV sur Doctolib
              </a>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h4 className="font-outfit font-semibold text-sm mb-3 text-white">
                Suivez-nous
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/docteurnadinebaron/?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/la_villa_esthetique/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@docteurnadinebaron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nadine-baron-0b644a54/?originalSubdomain=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden">
          {/* Logo et info principale */}
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <OptimizedImage
                src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-32.png"
                alt="Logo La Villa Esthétique"
                width={24}
                height={24}
                className="w-6 h-6 object-contain flex-shrink-0"
              />
              <span className="font-outfit font-semibold text-lg text-white">
                La villa Esthetique
              </span>
            </div>
            <p className="text-sm text-neutral-300">
              Dr Nadine Baron - Médecine Esthétique
            </p>
          </div>

          {/* Sections Accordion */}
          <div className="space-y-0">
            <AccordionSection 
              title="Contact" 
              icon={<Phone className="w-4 h-4" />}
              defaultOpen={true}
            >
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>286 avenue de Lardenne</div>
                    <div>31100 Toulouse</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+33562140410" className="hover:text-white transition-colors">
                    05 62 14 04 10
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:dr.baron.nadine@gmail.com" className="hover:text-white transition-colors break-all">
                    dr.baron.nadine@gmail.com
                  </a>
                </div>
              </div>
            </AccordionSection>

            <AccordionSection 
              title="Horaires" 
              icon={<Clock className="w-4 h-4" />}
            >
              <div className="space-y-2 text-sm text-neutral-300">
                <div className="flex items-center gap-4">
                  <span className="w-20 flex-shrink-0">Lun - Ven</span>
                  <span>8h - 19h</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-20 flex-shrink-0">Sam - Dim</span>
                  <span>Fermé</span>
                </div>
                <div className="text-xs text-neutral-400 mt-3">
                  Sur rendez-vous uniquement
                </div>
              </div>
            </AccordionSection>

            <AccordionSection 
              title="Navigation" 
              icon={<MapPin className="w-4 h-4" />}
            >
              <nav className="space-y-3 text-sm">
                <Link href="/actes" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Nos soins
                </Link>
                <Link href="/docteur-laser" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Docteur Laser
                </Link>
                <Link href="/blog" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Blog
                </Link>
                <Link href="/a-propos" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  À propos
                </Link>
                <Link href="/contact" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Contact
                </Link>
                <Link href="/on-parle-de-nous" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  On parle de nous
                </Link>
              </nav>
            </AccordionSection>

            <AccordionSection 
              title="Informations légales" 
              icon={<Mail className="w-4 h-4" />}
            >
              <nav className="space-y-3 text-sm">
                <Link href="/mentions-legales" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Mentions légales
                </Link>
                <Link href="/politique-de-confidentialite" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Politique de confidentialité
                </Link>
                <Link href="/cookies" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Gestion des cookies
                </Link>
                <Link href="/accessibilite" className="block text-neutral-300 hover:text-white transition-colors py-1">
                  Accessibilité
                </Link>
              </nav>
            </AccordionSection>
          </div>

          {/* CTA et Réseaux sociaux mobile */}
          <div className="mt-6 pt-6 border-t border-neutral-700 text-center">
            <a
              href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors mb-6 min-h-[44px]"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV sur Doctolib
            </a>
            
            <div>
              <h4 className="font-outfit font-semibold text-sm mb-4 text-white">
                Suivez-nous
              </h4>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/docteurnadinebaron/?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/la_villa_esthetique/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@docteurnadinebaron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nadine-baron-0b644a54/?originalSubdomain=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-xs sm:text-sm text-neutral-400 text-center lg:text-left">
              © 2024 La villa Esthetique & Docteur Laser - Dr Nadine Baron. Tous droits réservés.
            </div>
            <div className="text-xs text-neutral-500 max-w-md text-center lg:text-right">
              <strong>Avertissement médical :</strong> Les informations présentes sur ce site 
              sont à titre informatif et ne remplacent pas une consultation médicale personnalisée. 
              Seul un médecin peut établir un diagnostic et prescrire un traitement adapté.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}