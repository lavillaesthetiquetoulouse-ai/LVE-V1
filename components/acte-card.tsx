'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActeCardProps {
  title: string;
  description: string;
  duration?: string;
  priceFrom?: string;
  rating?: number;
  href: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function ActeCard({ 
  title, 
  description, 
  duration, 
  priceFrom, 
  rating,
  href, 
  icon,
  delay = 0 
}: ActeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <Link href={href}>
        <div className="card group-hover:shadow-2xl group-hover:border-brand/20 transition-all duration-500">
          {/* Icon */}
          {icon && (
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-2xl mb-6 text-3xl group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
          )}
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-xl text-neutral-900 mb-3 group-hover:text-brand transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-neutral-600 leading-relaxed mb-6">
              {description}
            </p>
            
            {/* Meta info */}
            <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-6">
              {duration && (
                <div className="flex items-center gap-1">
                  <span>⏰</span>
                  <span>{duration}</span>
                </div>
              )}
              {rating && (
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{rating}/5</span>
                </div>
              )}
              {priceFrom && (
                <div className="text-brand font-semibold">
                  À partir de {priceFrom}
                </div>
              )}
            </div>
            
            {/* CTA */}
            <div className="flex items-center text-neutral-700 font-medium group-hover:text-brand transition-colors duration-300">
              <span>Découvrir</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}