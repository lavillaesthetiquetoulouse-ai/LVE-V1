'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, ArrowRight, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand } from './brand-provider';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/actes', label: 'Soins' },
  { href: '/docteur-laser', label: 'Docteur Laser', isNew: true },
  { href: '/la-villa-esthetique', label: 'La Villa' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

// Composant Burger Menu Animé
function BurgerMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          className="block h-0.5 w-6 bg-neutral-700 rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -4,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="block h-0.5 w-6 bg-neutral-700 rounded-full mt-1"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.span
          className="block h-0.5 w-6 bg-neutral-700 rounded-full mt-1"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 4,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { brand } = useBrand();

  const brandName = brand === 'villa' ? 'La villa Esthetique' : 'Docteur Laser';
  const ctaClass = brand === 'villa' ? 'btn-primary-villa' : 'btn-primary-laser';

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
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
              <img
                src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Logo-la-villa-esthetique-toulouse-lardenne-dr-baron-medecin-%20black2.png"
                alt="Logo La villa Esthetique"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <img
                    src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Logo-la-villa-esthetique-toulouse-lardenne-dr-baron-medecin-%20black2.png"
                    alt="Logo"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-bold text-neutral-900 text-sm">
                    {brandName}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5 text-neutral-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 min-h-[48px] ${
                        item.isNew
                          ? 'bg-gradient-to-r from-brand/10 to-laser/10 text-brand font-semibold border border-brand/20'
                          : pathname === item.href
                          ? 'text-neutral-900 bg-neutral-100'
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.isNew && (
                        <span className="bg-gradient-to-r from-brand to-laser text-white text-xs font-bold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Principal Mobile */}
              <div className="p-6 border-t border-neutral-200 mt-auto">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaClass} w-full justify-center text-base min-h-[48px]`}
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_click', {
                        event_category: 'engagement',
                        event_label: 'mobile_doctolib',
                        value: 1
                      });
                    }
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Prendre RDV sur Doctolib
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                {/* Contact rapide */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-neutral-500 mb-2">Ou contactez-nous</p>
                  <a
                    href="tel:+33562140410"
                    className="text-sm text-brand font-medium hover:underline"
                  >
                    05 62 14 04 10
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}