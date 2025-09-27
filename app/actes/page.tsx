'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Calendar, ArrowRight, Zap, Droplets, Sparkles, Heart, Shield, Star, Scissors, Eye, Sun, Users, Clock, CheckCircle, Target, Thermometer, Search, Filter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface SoinData {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  details: string[];
  duree: string;
  seances: string;
  resultats: string;
  icon_small: React.ReactElement;
  zones?: string[];
  categories?: string[];
  blogLink?: string;
}

const soinsData: Record<string, SoinData> = {
  // Tous les soins individualisés
  'injection-radiesse': {
    title: 'Injection de Radiesse',
    description: 'Inducteurs de collagène pour un rajeunissement naturel et durable',
    icon: <OptimizedImage src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(1).png" alt="Injection Radiesse" width={24} height={24} className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    details: [
      'Stimulation naturelle de la production de collagène',
      'Comblement des rides profondes et restauration des volumes',
      'Résultats immédiats et amélioration progressive',
      'Effet lifting naturel sans chirurgie',
      'Durée d\'action prolongée (6-12 mois)',
      'Produit résorbable et biocompatible'
    ],
    duree: '30 à 45 minutes',
    seances: 'Renouvellement tous les 6-12 mois',
    resultats: 'Effet immédiat, amélioration progressive sur 3 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(1).png" alt="Injection Radiesse" className="w-6 h-6" />
  },
  'injection-acide-hyaluronique': {
    title: 'Injection d\'Acide Hyaluronique',
    description: 'Hydratation profonde et restauration des volumes pour un visage harmonieux',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection.png" alt="Injection Acide Hyaluronique" className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    details: [
      'Comblement des rides et sillons nasogéniens',
      'Augmentation et redéfinition des lèvres',
      'Restauration des volumes des pommettes et du menton',
      'Hydratation profonde de la peau (skinboosters)',
      'Produits résorbables de haute qualité, certifiés CE',
      'Résultats immédiats avec amélioration progressive'
    ],
    duree: '30 à 45 minutes',
    seances: 'Durée 6 à 12 mois selon le produit',
    resultats: 'Effet immédiat, résultat optimal sous 15 jours',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection.png" alt="Injection Acide Hyaluronique" className="w-6 h-6" />
  },
  'injection-polynucleotides': {
    title: 'Injection de Polynucléotides',
    description: 'Régénération cellulaire avancée pour une peau revitalisée',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(2).png" alt="Injection Polynucléotides" className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Stimulation de la régénération cellulaire naturelle',
      'Amélioration de la qualité et texture de la peau',
      'Hydratation profonde et durable',
      'Réduction des signes de vieillissement',
      'Traitement des cernes et de la fatigue cutanée',
      'Protocole personnalisé selon les besoins'
    ],
    duree: '30 à 45 minutes',
    seances: '3 à 4 séances espacées de 3-4 semaines',
    resultats: 'Amélioration progressive de la qualité de peau',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(2).png" alt="Injection Polynucléotides" className="w-6 h-6" />
  },
  'injection-exosomes': {
    title: 'Injection d\'Exosomes',
    description: 'Thérapie régénérative de pointe pour un rajeunissement cellulaire optimal',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(2).png" alt="Injection Exosomes" className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-500',
    details: [
      'Thérapie régénérative de dernière génération',
      'Stimulation intense de la régénération cellulaire',
      'Amélioration de l\'élasticité et fermeté de la peau',
      'Réduction des rides et ridules',
      'Éclat et luminosité retrouvés',
      'Traitement anti-âge révolutionnaire'
    ],
    duree: '45 à 60 minutes',
    seances: '3 à 6 séances selon les besoins',
    resultats: 'Régénération visible dès 2-3 semaines',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Morpheus8%20machine-dr-baron-la-villa-esthetique.png" alt="Injection Exosomes" className="w-6 h-6" />
  },
  'morpheus-8': {
    title: 'Morpheus 8 Visage et Corps',
    description: 'Microneedling RF révolutionnaire pour raffermir et retendre la peau',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/morpheus%208.png" alt="Morpheus 8" className="w-6 h-6" />,
    color: 'from-purple-600 to-blue-600',
    details: [
      'Microneedling avec radiofréquence fractionnée',
      'Stimulation profonde du collagène et de l\'élastine',
      'Traitement visage et corps (3D pour le corps)',
      'Raffermissement et retension cutanée',
      'Amélioration de la texture et des cicatrices',
      'Résultats progressifs et durables'
    ],
    duree: '60 à 90 minutes',
    seances: '3 à 6 séances espacées de 4-6 semaines',
    resultats: 'Raffermissement progressif sur 3-6 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/morpheus%208.png" alt="Morpheus 8" className="w-6 h-6" />
  },
  'detatouage': {
    title: 'Détatouage Laser',
    description: 'Effacement progressif et sécurisé des tatouages par laser Q-switched',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/laser%20(1).png" alt="Détatouage Laser" className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    details: [
      'Laser Q-switched multi-longueurs d\'onde',
      'Traitement efficace sur toutes les couleurs d\'encre',
      'Protocole adapté selon la taille et l\'âge du tatouage',
      'Effacement progressif respectant l\'intégrité de la peau',
      'Suivi personnalisé tout au long du processus',
      'Conseils post-traitement pour optimiser la cicatrisation'
    ],
    duree: '15 à 45 minutes selon la taille',
    seances: '5 à 12 séances selon le tatouage',
    resultats: 'Éclaircissement progressif, effacement possible',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/laser%20(1).png" alt="Détatouage Laser" className="w-6 h-6" />
  },
  'hydrafacial': {
    title: 'HydraFacial',
    description: 'Soin révolutionnaire 3-en-1 : nettoyage, exfoliation et hydratation',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Hydrafacial%20machine.png" alt="HydraFacial" className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    details: [
      'Nettoyage en profondeur et exfoliation douce',
      'Extraction des impuretés par aspiration douce',
      'Infusion de sérums personnalisés selon votre peau',
      'Hydratation intense avec acide hyaluronique',
      'Résultats immédiats : peau éclatante et hydratée',
      'Aucune éviction sociale, reprise d\'activité immédiate'
    ],
    duree: '45 à 60 minutes',
    seances: 'Séance unique ou cure selon les besoins',
    resultats: 'Éclat immédiat, peau lissée et hydratée',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Hydrafacial%20machine.png" alt="HydraFacial" className="w-6 h-6" />
  },
  'cryolipolyse': {
    title: 'Cryolipolyse',
    description: 'Destruction des cellules graisseuses par le froid pour sculpter la silhouette',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/body-ache.png" alt="Cryolipolyse" className="w-6 h-6" />,
    color: 'from-blue-600 to-indigo-600',
    details: [
      'Destruction des cellules graisseuses par cristallisation à -10°C',
      'Traitement des bourrelets localisés : ventre, hanches, cuisses, bras',
      'Technique non invasive sans anesthésie ni éviction sociale',
      'Élimination naturelle des cellules détruites par le système lymphatique',
      'Résultats progressifs visibles dès 3 semaines',
      'Réduction de 20 à 25% de la masse graisseuse par séance'
    ],
    duree: '60 à 90 minutes par zone',
    seances: 'Une à quatre séances par zone selon les besoins',
    resultats: 'Réduction visible des bourrelets sous 2-3 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/body-ache.png" alt="Cryolipolyse" className="w-5 h-5" />
  },
  'cristal-fit': {
    title: 'Cristal Fit',
    description: 'Remodelage corporel par ondes électromagnétiques pour tonifier et sculpter',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Cristal%20fit%20machine.png" alt="Cristal Fit" className="w-6 h-6" />,
    color: 'from-green-500 to-teal-500',
    details: [
      'Stimulation musculaire par ondes électromagnétiques',
      'Tonification et renforcement musculaire',
      'Remodelage de la silhouette sans effort',
      'Traitement des zones : abdomen, fessiers, bras, cuisses',
      'Équivalent à 20 000 contractions musculaires par séance',
      'Résultats visibles dès les premières séances'
    ],
    duree: '30 minutes par zone',
    seances: '6 à 8 séances espacées de 2-3 jours',
    resultats: 'Tonification visible dès 2-3 semaines',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Cristal%20fit%20machine.png" alt="Cristal Fit" className="w-6 h-6" />
  },
  'epilation-clarity-2': {
    title: 'Épilation Laser Clarity 2',
    description: 'Épilation définitive avec le laser Clarity 2, technologie de pointe',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Laser Clarity 2" className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    details: [
      'Laser Clarity 2 dernière génération',
      'Traitement de toutes les zones du corps',
      'Efficace sur tous les phototypes de peau (I à VI)',
      'Réduction progressive de 90-95% de la pilosité',
      'Refroidissement intégré pour un confort optimal',
      'Protocole personnalisé selon votre type de peau'
    ],
    duree: '15 minutes à 1 heure selon la zone',
    seances: '6 à 8 séances en moyenne',
    resultats: 'Réduction progressive visible dès la 2ème séance',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Laser Clarity 2" className="w-5 h-5" />
  },
  'epilation-apilus': {
    title: 'Épilation Électrique APILUS',
    description: 'Épilation définitive de précision par électrolyse médicale',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Électrique APILUS" className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    details: [
      'Technique d\'épilation définitive par électrolyse',
      'Idéale pour les poils fins, blancs, blonds ou roux',
      'Traitement des zones sensibles : sourcils, lèvre supérieure',
      'Épilation des poils résiduels après traitement laser',
      'Précision maximale pour un résultat parfait',
      'Séances courtes et ciblées pour un confort optimal'
    ],
    duree: '15 à 30 minutes',
    seances: 'Variable selon la zone',
    resultats: 'Épilation définitive progressive',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Électrique APILUS" className="w-5 h-5" />
  },
  'lumiere-pulsee-lumecca': {
    title: 'Lumière Pulsée LUMECCA',
    description: 'Traitement des taches pigmentaires et lésions vasculaires par IPL',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Lumière Pulsée LUMECCA" className="w-6 h-6" />,
    color: 'from-yellow-400 to-orange-400',
    details: [
      'IPL LUMECCA dernière génération',
      'Traitement des taches pigmentaires et lentigos',
      'Élimination des lésions vasculaires superficielles',
      'Amélioration de la texture et de l\'éclat de la peau',
      'Protocole adapté selon le type de lésions',
      'Résultats visibles dès la première séance'
    ],
    duree: '30 à 45 minutes',
    seances: '1 à 3 séances selon les lésions',
    resultats: 'Amélioration visible dès la première séance',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Traitement%20laser%20carbone-CO2-machine-dr-baron-la-villa-esthetique.png" alt="Lumière Pulsée LUMECCA" className="w-5 h-5" />
  },
  'laser-co2-deka': {
    title: 'Laser CO2 DEKA',
    description: 'Resurfaçage cutané et traitement des cicatrices par laser CO2 fractionné',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Traitement%20laser%20carbone-CO2-machine-dr-baron-la-villa-esthetique.png" alt="Laser CO2 DEKA" className="w-6 h-6" />,
    color: 'from-red-600 to-pink-600',
    details: [
      'Laser CO2 fractionné DEKA dernière génération',
      'Resurfaçage cutané pour rajeunissement',
      'Traitement des cicatrices d\'acné et chirurgicales',
      'Amélioration des rides et ridules',
      'Stimulation profonde du collagène',
      'Résultats durables et spectaculaires'
    ],
    duree: '45 à 60 minutes',
    seances: '1 à 3 séances selon les besoins',
    resultats: 'Amélioration progressive sur 3-6 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Laser%20CO2%20machine%20-%20dr-%20baron.png" alt="Laser CO2 DEKA" className="w-5 h-5" />
  },
  'peelings-medicaux': {
    title: 'Peelings Médicaux',
    description: 'Renouvellement cellulaire par exfoliation contrôlée pour une peau éclatante',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/soin-de-la-peau.png" alt="Peelings Médicaux" className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Peelings superficiels et moyens adaptés à votre peau',
      'Amélioration de la texture et de l\'éclat du teint',
      'Traitement des taches pigmentaires et cicatrices d\'acné',
      'Stimulation du renouvellement cellulaire',
      'Protocole personnalisé selon votre phototype',
      'Suivi post-peeling pour optimiser les résultats'
    ],
    duree: '30 à 45 minutes',
    seances: '1 à 3 séances selon le type de peeling',
    resultats: 'Peau plus lisse et éclatante sous 7-15 jours',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/soin-de-la-peau.png" alt="Peelings Médicaux" className="w-5 h-5" />,
    zones: ['visage', 'cou', 'décolleté'],
    categories: ['soins-visage', 'anti-age'],
    blogLink: '/blog/peelings-superficiels-guide-complet'
  },
  'echographie': {
    title: 'Échographie Esthétique',
    description: 'Diagnostic et suivi des traitements par échographie haute résolution',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Echographie.png" alt="Échographie Esthétique" className="w-6 h-6" />,
    color: 'from-gray-500 to-blue-500',
    details: [
      'Échographie haute résolution pour diagnostic esthétique',
      'Évaluation de la qualité de la peau et des tissus',
      'Suivi de l\'évolution des traitements',
      'Mesure de l\'épaisseur cutanée et sous-cutanée',
      'Détection des zones à traiter en priorité',
      'Outil de précision pour optimiser les résultats'
    ],
    duree: '20 à 30 minutes',
    seances: 'Selon les besoins de diagnostic',
    resultats: 'Diagnostic précis pour traitement optimal',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Echographie.png" alt="Échographie Esthétique" className="w-5 h-5" />
  }
};

// Ajout des propriétés manquantes pour tous les soins
(Object.keys(soinsData) as Array<keyof typeof soinsData>).forEach(key => {
  if (!soinsData[key].zones) {
    soinsData[key].zones = ['visage', 'corps'];
  }
  if (!soinsData[key].categories) {
    soinsData[key].categories = ['tous'];
  }
  if (!soinsData[key].blogLink) {
    soinsData[key].blogLink = '/blog';
  }
});

const categories = [
  { id: 'tous', label: 'Tous les soins', icon: <Users className="w-4 h-4" /> },
  { id: 'injections', label: 'Injections', icon: <Droplets className="w-4 h-4" /> },
  { id: 'lasers', label: 'Lasers', icon: <Zap className="w-4 h-4" /> },
  { id: 'soins-visage', label: 'Soins Visage', icon: <Heart className="w-4 h-4" /> },
  { id: 'soins-corps', label: 'Soins Corps', icon: <Shield className="w-4 h-4" /> },
  { id: 'anti-age', label: 'Anti-âge', icon: <Star className="w-4 h-4" /> },
];

export default function SoinsPage() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSoins = useMemo(() => {
    return Object.entries(soinsData).filter(([key, soin]) => {
      const matchesCategory = activeCategory === 'tous' || 
        soin.categories?.includes(activeCategory) ||
        (activeCategory === 'injections' && soin.title.toLowerCase().includes('injection')) ||
        (activeCategory === 'lasers' && (soin.title.toLowerCase().includes('laser') || soin.title.toLowerCase().includes('épilation'))) ||
        (activeCategory === 'soins-visage' && (soin.zones?.includes('visage') || soin.title.toLowerCase().includes('visage') || soin.title.toLowerCase().includes('hydrafacial') || soin.title.toLowerCase().includes('peeling'))) ||
        (activeCategory === 'soins-corps' && (soin.zones?.includes('corps') || soin.title.toLowerCase().includes('corps') || soin.title.toLowerCase().includes('cryolipolyse') || soin.title.toLowerCase().includes('cristal'))) ||
        (activeCategory === 'anti-age' && (soin.title.toLowerCase().includes('morpheus') || soin.title.toLowerCase().includes('injection') || soin.title.toLowerCase().includes('co2')));
      
      const matchesSearch = searchTerm === '' || 
        soin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        soin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        soin.zones?.some(zone => zone.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);
  return (
    <>
      {/* Schema JSON-LD pour les services médicaux */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Soins de Médecine Esthétique - Villa Esthétique Toulouse',
            description: 'Découvrez tous nos soins de médecine esthétique à Toulouse : épilation laser, injections, peelings, soins visage.',
            url: 'https://cheery-quokka-7f67a2.netlify.app/actes',
            mainEntity: {
              '@type': 'MedicalBusiness',
              name: 'La Villa Esthétique',
              url: 'https://cheery-quokka-7f67a2.netlify.app',
              telephone: '+33562140410',
              email: 'contact@lavillaesthetique.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '286 Avenue de Lardenne',
                addressLocality: 'Toulouse',
                postalCode: '31100',
                addressCountry: 'FR'
              },
              founder: {
                '@type': 'Person',
                name: 'Dr Nadine Baron',
                jobTitle: 'Médecin Esthétique'
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services de Médecine Esthétique',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'MedicalProcedure',
                      name: 'Injections d\'Acide Hyaluronique',
                      description: 'Comblement des rides et augmentation des volumes pour un rajeunissement naturel'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'MedicalProcedure',
                      name: 'Épilation Laser Clarity 2',
                      description: 'Épilation définitive pour tous phototypes de peau avec laser de dernière génération'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'MedicalProcedure',
                      name: 'Morpheus 8',
                      description: 'Microneedling RF pour raffermir et retendre la peau du visage et du corps'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'MedicalProcedure',
                      name: 'HydraFacial',
                      description: 'Soin révolutionnaire 3-en-1 : nettoyage, exfoliation et hydratation'
                    }
                  }
                ]
              }
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Accueil',
                  item: 'https://cheery-quokka-7f67a2.netlify.app'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Soins',
                  item: 'https://cheery-quokka-7f67a2.netlify.app/actes'
                }
              ]
            }
          }),
        }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Soins' }]} />
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="text-center">
              <h1 className="apple-title-hero">
                <span className="bg-gradient-to-r from-neutral-900 via-brand to-laser bg-clip-text text-transparent">
                  Nos Soins de <br />Médecine Esthétique
                </span>
              </h1>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  Le <strong>Dr Nadine Baron</strong>, médecin esthétique expérimenté à <strong>Toulouse</strong>, vous propose une gamme complète de <strong>soins de médecine esthétique</strong> personnalisés. 
                  Découvrez nos <strong>injections d'acide hyaluronique</strong>, <strong>épilation laser définitive</strong>, soins <strong>anti-âge Morpheus 8</strong> et traitements <strong>HydraFacial</strong>, 
                  réalisés avec des équipements de dernière génération dans un environnement médical sécurisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-villa"
                  >
                    <Calendar className="w-5 h-5" />
                    Prendre RDV
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="/contact" className="btn-secondary">
                    Poser une question
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-8 bg-white">
          <div className="container">
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Rechercher un soin ou une zone du corps..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-brand text-white shadow-lg'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>

            {/* Compteur de résultats */}
            <div className="text-center mb-8">
              <p className="text-neutral-600">
                <span className="font-semibold text-brand">{filteredSoins.length}</span> soin{filteredSoins.length > 1 ? 's' : ''} trouvé{filteredSoins.length > 1 ? 's' : ''}
                {searchTerm && (
                  <span> pour "<span className="font-medium">{searchTerm}</span>"</span>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Section Docteur Laser - Nouveauté */}
              {activeCategory === 'tous' && !searchTerm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-br from-brand-subtle/30 to-laser-subtle/30 rounded-3xl p-8 border-2 border-brand/20 relative overflow-hidden">
                    {/* Badge Nouveauté */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      NOUVEAUTÉ
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-brand to-laser rounded-2xl flex items-center justify-center shadow-lg">
                            <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/medecin.png" alt="Docteur Laser" className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-outfit font-bold bg-gradient-to-r from-brand to-laser bg-clip-text text-transparent">
                              Docteur Laser
                            </h3>
                            <p className="text-sm text-neutral-600 font-medium">
                              Notre nouveau cabinet spécialisé
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                          Découvrez notre nouveau cabinet entièrement dédié aux technologies laser de pointe. 
                          Épilation laser définitive, détatouage, lasers vasculaires et électrolyse médicale 
                          dans un environnement ultra-moderne.
                        </p>
                        
                        <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span className="text-neutral-700">Épilation laser définitive (toutes zones)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span className="text-neutral-700">Détatouage par laser Q-switched</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span className="text-neutral-700">Lasers vasculaires (couperose, angiomes)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span className="text-neutral-700">Électrolyse médicale de précision</span>
                          </div>
                        </div>
                        
                        <a
                          href="/docteur-laser"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-laser text-white rounded-full font-semibold hover:from-brand-hover hover:to-laser-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/medecin.png" alt="Docteur Laser" className="w-5 h-5" />
                          Découvrir Docteur Laser
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-brand-subtle/50 to-laser-subtle/50 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Docteur%20Laser.png"
                            alt="Cabinet Docteur Laser - Équipements de pointe"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-brand">NEW</div>
                            <div className="text-xs text-neutral-600">2024</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Liste des soins filtrés - Format horizontal élargi */}
              <div className="space-y-6">
                {filteredSoins.map(([soinKey, soin], index) => (
                  <motion.div
                    key={soinKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-brand/20 hover:-translate-y-1"
                  >
                    <div className="p-4 sm:p-6 lg:p-8">
                      {/* Header responsive */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${soin.color} rounded-2xl text-white flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl self-center sm:self-start`}>
                          <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            {soin.icon}
                          </div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-900 mb-3">
                            {soin.title}
                          </h3>
                          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
                            {soin.description}
                          </p>
                          
                          {/* Quick Info responsive */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm">
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                              <Clock className="w-4 h-4 text-brand flex-shrink-0" />
                              <span className="text-neutral-700"><strong>Durée:</strong> {soin.duree}</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                              <Target className="w-4 h-4 text-brand flex-shrink-0" />
                              <span className="text-neutral-700"><strong>Séances:</strong> {soin.seances}</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                              <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                              <span className="text-neutral-700"><strong>Résultats:</strong> {soin.resultats}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Détails complets */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
                        <div>
                          <h4 className="font-semibold text-lg text-neutral-900 mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-brand" />
                            Détails du traitement
                          </h4>
                          <div className="space-y-3">
                            {soin.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                                <span className="text-sm text-neutral-700 leading-relaxed">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          {/* Tarification avec animations de survol */}
                          <div className="group relative p-6 bg-gradient-to-br from-brand-subtle/20 to-laser-subtle/20 rounded-xl border border-brand/10 mb-6 transition-all duration-300 hover:from-brand-subtle/30 hover:to-laser-subtle/30 hover:border-brand/20 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                <Thermometer className="w-5 h-5 text-brand transition-colors duration-300 group-hover:text-brand-hover" />
                              </div>
                              <h4 className="font-semibold text-lg text-brand transition-colors duration-300 group-hover:text-brand-hover">
                                Tarification personnalisée
                              </h4>
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed transition-colors duration-300 group-hover:text-neutral-800">
                              Les tarifs dépendent de la zone à traiter, de votre type de peau et du protocole personnalisé. 
                              Un devis détaillé vous sera remis lors de votre consultation avec le Dr Nadine Baron.
                            </p>
                            
                            {/* Effet de lueur au survol */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-laser/5 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                          </div>
                          
                          {/* Actions optimisées pour mobile */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary-villa flex-1 justify-center py-4 sm:py-3 text-base sm:text-sm font-semibold"
                              style={{ minHeight: '48px' }}
                            >
                              <Calendar className="w-5 h-5 sm:w-4 sm:h-4" />
                              Prendre RDV
                            </a>
                            <a
                              href={soin.blogLink || '/blog'}
                              className="btn-secondary flex-1 justify-center py-4 sm:py-3 text-base sm:text-sm font-semibold"
                              style={{ minHeight: '48px' }}
                            >
                              <ExternalLink className="w-5 h-5 sm:w-4 sm:h-4" />
                              En savoir plus
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Message si aucun résultat */}
              {filteredSoins.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-neutral-400" />
                  </div>
                  <h3 className="text-2xl font-outfit font-bold text-neutral-900 mb-4">
                    Aucun soin trouvé
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('tous');
                    }}
                    className="btn-secondary"
                  >
                    Réinitialiser les filtres
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-subtle to-neutral-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                Votre Consultation de Médecine Esthétique à Toulouse
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                <strong>Consultation personnalisée</strong> avec le <strong>Dr Nadine Baron</strong> pour évaluer vos besoins esthétiques et définir le protocole de <strong>médecine esthétique</strong> le plus adapté. 
                Notre expertise en <strong>injections anti-âge</strong>, <strong>épilation laser</strong> et <strong>soins du visage</strong> vous garantit des résultats naturels et durables.
                Prenez rendez-vous dès maintenant dans notre cabinet à <strong>Toulouse Lardenne</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  Poser une question
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="py-12 bg-neutral-100">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-info" />
                  Informations importantes
                </h3>
                <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                  <p>
                    <strong>Consultation préalable obligatoire :</strong> Tout traitement de médecine esthétique 
                    nécessite une consultation médicale avec le Dr Nadine Baron pour évaluer vos besoins 
                    et déterminer le protocole le plus adapté.
                  </p>
                  <p>
                    <strong>Tarification personnalisée :</strong> Les tarifs varient selon la zone traitée, 
                    votre type de peau et le protocole établi. Un devis détaillé vous sera remis lors de la consultation.
                  </p>
                  <p>
                    <strong>Délai de réflexion :</strong> Un délai minimum de 15 jours est respecté entre 
                    la consultation et le premier traitement pour certains actes.
                  </p>
                  <p>
                    <strong>Contre-indications :</strong> Certaines conditions médicales peuvent contre-indiquer 
                    les traitements. Merci de signaler tout problème de santé lors de la consultation.
                  </p>
                  <p className="pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                    <strong>Informations générales :</strong> Les contenus de cette page sont informatifs 
                    et ne remplacent pas une consultation médicale personnalisée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}