'use client';

import { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...preferences,
      timestamp: Date.now(),
    }));
    setIsVisible(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-xl"
      >
        <div className="container py-4">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Gestion des cookies
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser notre audience. 
                  Consultez notre{' '}
                  <a href="/politique-de-confidentialite" className="text-brand hover:underline">
                    politique de confidentialité
                  </a>{' '}
                  pour plus d'informations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="btn-secondary text-sm"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser
                </button>
                <button
                  onClick={rejectAll}
                  className="btn-secondary text-sm"
                >
                  Refuser
                </button>
                <button
                  onClick={acceptAll}
                  className="btn-primary-villa text-sm"
                >
                  <Check className="w-4 h-4" />
                  Tout accepter
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-neutral-900">
                  Préférences des cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  aria-label="Fermer les paramètres"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-900">Cookies nécessaires</h4>
                    <p className="text-sm text-neutral-600">
                      Indispensables au fonctionnement du site
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="rounded border-neutral-300"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-900">Cookies d'analyse</h4>
                    <p className="text-sm text-neutral-600">
                      Nous aident à comprendre l'utilisation du site
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="rounded border-neutral-300 text-brand focus:ring-brand"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-900">Cookies marketing</h4>
                    <p className="text-sm text-neutral-600">
                      Utilisés pour personnaliser la publicité
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="rounded border-neutral-300 text-brand focus:ring-brand"
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={acceptSelected}
                  className="btn-primary-villa text-sm"
                >
                  Enregistrer mes préférences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}