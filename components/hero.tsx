'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Play } from 'lucide-react';
import { useBrand } from './brand-provider';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  showSecondaryButton?: boolean;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  description,
  showSecondaryButton = false,
  secondaryButtonText = "En savoir plus",
  secondaryButtonHref = "/a-propos"
}: HeroProps) {
  const { brand } = useBrand();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  
  const ctaClass = brand === 'villa' ? 'btn-primary-villa' : 'btn-primary-laser';

  // Détection mobile pour optimiser l'affichage
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lazy load vidéo après interaction ou délai pour améliorer LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 2000); // Délai 2s pour permettre LCP optimal

    const handleInteraction = () => {
      setShouldLoadVideo(true);
      clearTimeout(timer);
    };

    // Déclenche le chargement sur interaction
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background avec overlay adaptatif */}
      <div className="absolute inset-0">
        {/* Fond dégradé médical professionnel */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />

        {/* Overlay gradients adaptatifs */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10" />
      </div>
      
      <div className="container relative z-10 py-20 sm:py-24 lg:py-32">
        {/* Titre principal centré avec typographie fluide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Fond coloré doux responsive */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100/40 via-purple-50/30 to-blue-100/40 rounded-3xl blur-3xl transform -rotate-1 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-amber-50/30 via-rose-50/40 to-indigo-50/30 rounded-3xl blur-2xl transform rotate-1 scale-105"></div>
            
            <h1 className="relative font-outfit font-light tracking-tight leading-tight text-center" style={{fontSize: 'clamp(1.8rem, 6vw, 3.5rem)'}}>
              {/* Première ligne */}
              <div className="block">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  Médecine esthétique & régénérative
                </span>
              </div>
              
              {/* Deuxième ligne */}
              <div className="block mt-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  l'innovation au service de votre
                </span>
                <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent ml-3">
                  beauté naturelle.
                </span>
              </div>
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          {/* Contenu texte - Responsive */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {description && (
                <p 
                  className="text-neutral-500 mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                    lineHeight: 'clamp(1.6, 1.7, 1.8)'
                  }}
                >
                  {description}
                </p>
              )}
            </motion.div>

            {/* Boutons CTA - Style Apple épuré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12"
            >
              <a
                href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-hover text-white font-medium rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'hero_doctolib',
                      value: 1
                    });
                  }
                }}
              >
                Prendre RDV
              </a>
              
              {showSecondaryButton && (
                <a
                  href={secondaryButtonHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-neutral-700 font-medium rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {secondaryButtonText}
                </a>
              )}
            </motion.div>

            {/* Trust indicators - Responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 lg:gap-8 text-sm justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                <span className="text-neutral-600 font-medium">Dr Nadine Baron</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                <span className="text-neutral-600 font-medium">Toulouse Lardenne</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                <span className="text-neutral-600 font-medium">Équipements de pointe</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                <span className="text-neutral-600 font-medium">Suivi personnalisé</span>
              </div>
            </motion.div>
          </div>

          {/* Vidéo responsive - Aspect ratio maintenu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
              {/* Container avec aspect-ratio responsive */}
              <div className="relative aspect-video bg-gradient-to-br from-brand-subtle/50 to-laser-subtle/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                {!shouldLoadVideo ? (
                  /* Placeholder optimisé pour LCP */
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-subtle to-laser-subtle flex items-center justify-center cursor-pointer"
                       onClick={() => setShouldLoadVideo(true)}>
                    <div className="text-center text-neutral-700">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                        <Play className="w-8 h-8 text-brand ml-1" />
                      </div>
                      <div className="text-sm font-medium">Découvrir la Villa Esthétique</div>
                      <div className="text-xs text-neutral-500 mt-1">Cliquez pour charger la vidéo</div>
                    </div>
                  </div>
                ) : (
                  <>
                    {!videoLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-subtle to-laser-subtle flex items-center justify-center z-10">
                        <div className="text-center text-neutral-700">
                          <div className="animate-spin w-8 h-8 border-2 border-brand border-t-transparent rounded-full mx-auto mb-4"></div>
                          <div className="text-sm font-medium">Chargement de la vidéo...</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Iframe YouTube responsive - Chargement différé */}
                    <iframe
                      src="https://www.youtube.com/embed/f7sHblqQ-W8?enablejsapi=1&origin=https://cheery-quokka-7f67a2.netlify.app&autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&playsinline=1"
                      title="Découvrez La Villa Esthétique - Dr Nadine Baron"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                      loading="lazy"
                      onLoad={() => setVideoLoaded(true)}
                      onError={() => setVideoLoaded(true)}
                    />
                  </>
                )}
              </div>
              
              {/* Éléments décoratifs adaptatifs */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-brand/20 to-laser/20 rounded-full blur-xl" />
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tr from-laser/10 to-brand/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}