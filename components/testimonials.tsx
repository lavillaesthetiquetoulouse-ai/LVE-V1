'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  initials: string;
  text: string;
  date: string;
  source: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export function Testimonials({ testimonials, title = "Témoignages de patients" }: TestimonialsProps) {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-4">
              {title}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Découvrez les expériences de nos patients avec nos soins de médecine esthétique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-neutral-400" />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-warning fill-current'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-neutral-700 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-700 text-sm font-medium">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-400">
                    Source: {testimonial.source}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-neutral-500">
              Témoignages authentiques et vérifiables de patients ayant consenti à leur publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}