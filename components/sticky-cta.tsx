'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand } from './brand-provider';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const { brand } = useBrand();

  const ctaClass = brand === 'villa' ? 'btn-primary-villa' : 'btn-primary-laser';

  useEffect(() => {
    // Hide on contact page
    setIsVisible(!pathname.includes('/contact'));

    const handleScroll = () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-neutral-200 shadow-lg md:hidden"
        >
          <a
            href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaClass} w-full justify-center`}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'cta_click', {
                  event_category: 'engagement',
                  event_label: 'sticky_doctolib',
                  value: 1
                });
              }
            }}
          >
            <Calendar className="w-5 h-5" />
            Prendre RDV sur Doctolib
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}