'use client'

import { useEffect } from 'react'

export function usePerformance() {
  useEffect(() => {
    // Optimiser les écouteurs d'événements passifs
    const addPassiveEventListener = () => {
      const originalAddEventListener = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(type, listener, options) {
        const opts = typeof options === 'object' ? options : { passive: false }

        // Rendre passifs les événements de scroll et touch
        if (['touchstart', 'touchmove', 'wheel', 'mousewheel'].includes(type)) {
          opts.passive = true
        }

        return originalAddEventListener.call(this, type, listener, opts)
      }
    }

    // Optimiser le layout thrashing
    const optimizeLayoutThrashing = () => {
      // Regrouper les lectures et écritures DOM
      let readBatch: (() => void)[] = []
      let writeBatch: (() => void)[] = []
      let isScheduled = false

      const flushBatches = () => {
        // Toutes les lectures d'abord
        readBatch.forEach(read => read())
        readBatch = []

        // Puis toutes les écritures
        writeBatch.forEach(write => write())
        writeBatch = []

        isScheduled = false
      }

      // Exposer les fonctions globalement pour l'utilisation
      ;(window as any).batchRead = (fn: () => void) => {
        readBatch.push(fn)
        if (!isScheduled) {
          isScheduled = true
          requestAnimationFrame(flushBatches)
        }
      }

      ;(window as any).batchWrite = (fn: () => void) => {
        writeBatch.push(fn)
        if (!isScheduled) {
          isScheduled = true
          requestAnimationFrame(flushBatches)
        }
      }
    }

    // Lazy loading pour les modules non critiques
    const setupLazyLoading = () => {
      // Précharger les modules importants en idle
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Précharger les composants non critiques
          import('../components/ui/dialog').catch(() => {})
          import('../components/ui/tooltip').catch(() => {})
        })
      }
    }

    // Optimiser les images hors écran
    const setupImageOptimization = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute('data-src')
                imageObserver.unobserve(img)
              }
            }
          })
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        })

        // Observer toutes les images avec data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img)
        })
      }
    }

    addPassiveEventListener()
    optimizeLayoutThrashing()
    setupLazyLoading()
    setupImageOptimization()

  }, [])
}