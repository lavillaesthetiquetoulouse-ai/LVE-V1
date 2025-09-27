// Utilitaires pour la génération et gestion des slugs

/**
 * Convertit un titre en slug URL-friendly
 * @param title - Le titre à convertir
 * @returns Un slug propre pour les URLs
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()                        // Minuscules
    .trim()                              // Supprime les espaces en début/fin
    .replace(/[àáâãäå]/g, 'a')           // Remplace les accents a
    .replace(/[èéêë]/g, 'e')             // Remplace les accents e
    .replace(/[ìíîï]/g, 'i')             // Remplace les accents i
    .replace(/[òóôõö]/g, 'o')             // Remplace les accents o
    .replace(/[ùúûü]/g, 'u')             // Remplace les accents u
    .replace(/[ýÿ]/g, 'y')               // Remplace les accents y
    .replace(/[ç]/g, 'c')                // Remplace ç
    .replace(/[ñ]/g, 'n')                // Remplace ñ
    .replace(/[^a-z0-9\s-]/g, '')        // Supprime tout sauf lettres, chiffres, espaces et tirets
    .replace(/\s+/g, '-')                // Remplace les espaces par des tirets
    .replace(/-+/g, '-')                 // Supprime les tirets multiples
    .replace(/^-|-$/g, '')               // Supprime les tirets en début/fin
}

/**
 * Liste des mappings de correction pour les slugs existants
 */
export const slugMappings = [
  {
    old: 'La cryolipolyse élimine-t-elle durablement les graisses ?',
    new: 'la-cryolipolyse-elimine-t-elle-durablement-les-graisses'
  },
  {
    old: 'Résultats du laser CO2 pour cicatrices et rides profondes',
    new: 'resultats-du-laser-co2-pour-cicatrices-et-rides-profondes'
  },
  {
    old: "Les exosomes : l'avenir de la médecine esthétique ?",
    new: 'les-exosomes-lavenir-de-la-medecine-esthetique'
  },
  {
    old: 'combien-de-temps-durent-les-effets-d-un-traitement-au-polynucleotides',
    new: 'combien-de-temps-durent-les-effets-d-un-traitement-au-polynucleotides'
  },
  {
    old: 'quelles-sont-les-differences-entre-le-morpheus-8-et-le-microneedling-classique',
    new: 'quelles-sont-les-differences-entre-le-morpheus-8-et-le-microneedling-classique'
  },
  {
    old: 'est-ce-que-l-epilation-laser-clarity-2-est-definitive',
    new: 'est-ce-que-l-epilation-laser-clarity-2-est-definitive'
  },
  {
    old: 'comment-se-deroule-une-seance-d-hydrafacial-a-la-villa-esthetique',
    new: 'comment-se-deroule-une-seance-d-hydrafacial-a-la-villa-esthetique'
  },
  {
    old: 'comment-fonctionne-l-acide-hyaluronique-pour-rajeunir-le-visage',
    new: 'comment-fonctionne-l-acide-hyaluronique-pour-rajeunir-le-visage'
  },
  {
    old: 'traitement-acne-adulte-solutions-medicales-efficaces',
    new: 'traitement-acne-adulte-solutions-medicales-efficaces'
  },
  {
    old: 'prp-cheveux-toulouse-efficace-contre-chute-capillaire',
    new: 'prp-cheveux-toulouse-efficace-contre-chute-capillaire'
  }
]

/**
 * Valide qu'un slug est URL-friendly
 * @param slug - Le slug à valider
 * @returns true si le slug est valide
 */
export function isValidSlug(slug: string): boolean {
  // Un slug valide contient seulement des lettres minuscules, chiffres et tirets
  // Ne commence ni ne finit par un tiret
  const validPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/
  return validPattern.test(slug)
}

/**
 * Suggestions d'amélioration pour les slugs
 */
export function getSlugSuggestions() {
  return {
    rules: [
      "✅ Utilisez uniquement des lettres minuscules",
      "✅ Remplacez les espaces par des tirets (-)",
      "✅ Supprimez les accents et caractères spéciaux",
      "✅ Évitez les tirets multiples (--)",
      "✅ Ne commencez/finissez pas par un tiret",
      "✅ Gardez les slugs courts et descriptifs"
    ],
    examples: [
      "❌ 'Les bienfaits de l'épilation ?' → ✅ 'les-bienfaits-de-lepilation'",
      "❌ 'Soins anti-âge : guide' → ✅ 'soins-anti-age-guide'",
      "❌ 'HydraFacial à Toulouse!' → ✅ 'hydrafacial-a-toulouse'"
    ]
  }
}