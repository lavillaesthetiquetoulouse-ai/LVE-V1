'use client';

import { createContext, useContext, ReactNode } from 'react';

type Brand = 'villa' | 'laser';

interface BrandContextValue {
  brand: Brand;
  colors: {
    primary: string;
    hover: string;
    subtle: string;
    focus: string;
  };
}

const BrandContext = createContext<BrandContextValue | undefined>(undefined);

interface BrandProviderProps {
  brand: Brand;
  children: ReactNode;
}

export function BrandProvider({ brand, children }: BrandProviderProps) {
  const colors = brand === 'villa' 
    ? {
        primary: 'bg-brand',
        hover: 'hover:bg-brand-hover',
        subtle: 'bg-brand-subtle',
        focus: 'focus:ring-brand',
      }
    : {
        primary: 'bg-laser',
        hover: 'hover:bg-laser-hover',
        subtle: 'bg-laser-subtle',
        focus: 'focus:ring-laser',
      };

  return (
    <BrandContext.Provider value={{ brand, colors }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}