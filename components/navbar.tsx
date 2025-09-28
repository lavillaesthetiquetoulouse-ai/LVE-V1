'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, ArrowRight, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand } from './brand-provider';
import { OptimizedImage } from './OptimizedImage';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/actes', label: 'Soins' },
  { href: '/docteur-laser', label: 'Laser pas cher', isNew: true },
  { href: '/la-villa-esthetique', label: 'La Villa' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/on-parle-de-nous', label: 'On parle de nous' },
  { href: '/contact', label: 'Contact' },
];

// Composant Burger Menu Animé - Style iOS/Android moderne
function BurgerMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-11 h-11 flex items-center justify-center rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 touch-manipulation"
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isOpen}
      style={{ minHeight: '44px', minWidth: '44px' }} // Touch target minimum
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center relative">
        <motion.span
          className="absolute block h-0.5 w-6 bg-neutral-800 rounded-full origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.span
          className="absolute block h-0.5 w-6 bg-neutral-800 rounded-full origin-center"
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.8 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute block h-0.5 w-6 bg-neutral-800 rounded-full origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 6,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { brand } = useBrand();

  const brandName = brand === 'villa' ? 'La villa Esthetique' : 'Laser pas cher';
  const ctaClass = brand === 'villa' ? 'btn-primary-villa' : 'btn-primary-laser';

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      // Empêcher le scroll sur le body et le html
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restaurer le scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Fermer le menu avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200/30 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Responsive */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg text-neutral-900 hover:scale-105 transition-all duration-300"
            >
              <OptimizedImage
                src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-32.png"
                alt="Logo La Villa Esthétique"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
                priority
              />
              <span className="hidden xs:block sm:whitespace-nowrap text-sm sm:text-base">
                {brandName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      item.isNew
                        ? 'bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-900 font-semibold border border-neutral-300 hover:from-neutral-200 hover:to-neutral-300 hover:border-neutral-400 hover:scale-105 shadow-sm hover:shadow-md'
                        : pathname === item.href
                        ? 'text-neutral-900 bg-neutral-100/50'
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/30'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.isNew && (
                    <div className="absolute -top-4 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg animate-pulse">
                      NEW
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a
                href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} text-sm`}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'navbar_doctolib',
                      value: 1
                    });
                  }
                }}
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile CTA + Burger */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* CTA Mobile Compact */}
              <a
                href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xs:inline-flex items-center gap-1 px-3 py-2 bg-brand text-white rounded-full text-xs font-medium hover:bg-brand-hover transition-colors shadow-md"
              >
                <Calendar className="w-3 h-3" />
                <span className="hidden sm:inline">RDV</span>
              </a>
              
              {/* Burger Menu */}
              <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Style Apple Fullscreen Optimisé */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-white/98 backdrop-blur-2xl z-40 lg:hidden"
            style={{
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
              height: 'calc(100dvh - 64px)', // Commence sous la navbar (64px = h-16)
            }}
          >
            {/* Contenu principal - Optimisé pour éviter superposition navbar et navigation système */}
            <div className="h-full flex flex-col px-4 py-6"
              style={{
                paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 40px)', // +40px pour éviter navigation système
              }}
            >
              {/* Navigation Links - Texte réduit et espacement optimisé */}
              <div className="w-full max-w-sm space-y-0.5 flex-shrink-0 flex-1 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group block w-full px-4 py-2.5 text-center transition-all duration-300 min-h-[40px] flex items-center justify-center relative overflow-hidden rounded-lg ${
                        item.isNew
                          ? 'text-brand font-bold text-base bg-brand/5'
                          : pathname === item.href
                          ? 'text-neutral-900 font-semibold text-base bg-neutral-100'
                          : 'text-neutral-700 hover:text-neutral-900 font-medium text-base hover:bg-neutral-50 hover:scale-[1.02]'
                      }`}
                    >
                      {/* Effet de survol subtil */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                      <div className="relative flex items-center justify-center gap-2">
                        <span>{item.label}</span>
                        {item.isNew && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.05 + 0.15, type: 'spring', stiffness: 300 }}
                            className="bg-gradient-to-r from-brand to-laser text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                          >
                            NEW
                          </motion.span>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Principal - Repositionné pour éviter la navigation système */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navItems.length * 0.05 + 0.1,
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="mt-6 w-full max-w-sm flex-shrink-0"
                style={{
                  marginBottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)', // +16px pour remonter de 0,4cm environ
                }}
              >
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaClass} w-full justify-center text-sm font-semibold min-h-[48px] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300`}
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_click', {
                        event_category: 'engagement',
                        event_label: 'mobile_fullscreen_doctolib',
                        value: 1
                      });
                    }
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  Prendre RDV sur Doctolib
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Contact rapide - Repositionné et taille réduite */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 + 0.2 }}
                  className="mt-3 text-center"
                >
                  <p className="text-xs text-neutral-500 mb-1">Ou appelez-nous directement</p>
                  <a
                    href="tel:+33562140410"
                    className="text-sm text-brand font-semibold hover:text-brand-hover transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    05 62 14 04 10
                  </a>
                </motion.div>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}