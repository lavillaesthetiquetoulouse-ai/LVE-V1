// Données de démo pour le blog
export const demoBlogPosts = [
  {
    id: '1',
    title: "Les bienfaits de l'épilation laser",
    slug: "bienfaits-epilation-laser",
    excerpt: "Découvrez pourquoi l'épilation laser est la solution idéale pour une peau lisse et durable.",
    content: `
      <h2>L'épilation laser : une révolution</h2>
      <p>L'épilation laser représente une avancée majeure dans le domaine de l'esthétique médicale. Cette technique permet d'obtenir des résultats durables et efficaces.</p>

      <h3>Les avantages principaux</h3>
      <ul>
        <li>Résultats durables</li>
        <li>Précision ciblée</li>
        <li>Confort optimal</li>
        <li>Adaptation à tous types de peau</li>
      </ul>

      <p>Au cabinet La Villa Esthétique, nous utilisons les technologies les plus avancées pour vous garantir les meilleurs résultats.</p>

      <h3>Protocole de traitement</h3>
      <p>Nos séances d'épilation laser sont personnalisées selon votre type de peau et de poils. Le Dr Nadine Baron vous accompagne tout au long du processus.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Épilation Laser",
    author: "Dr Nadine Baron",
    published_at: new Date().toISOString(),
    read_time: 5,
    featured: true,
    meta_title: "Épilation Laser - Bienfaits et Avantages | La Villa Esthétique",
    meta_description: "Découvrez les bienfaits de l'épilation laser avec le Dr Nadine Baron à Toulouse.",
    keywords: "épilation laser, médecine esthétique, Dr Nadine Baron, Toulouse",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: "Soins anti-âge : quand commencer ?",
    slug: "soins-anti-age-quand-commencer",
    excerpt: "À quel âge faut-il commencer les soins anti-âge ? Nos conseils d'expert.",
    content: `
      <h2>La prévention avant tout</h2>
      <p>Il n'est jamais trop tôt pour prendre soin de sa peau. Les soins anti-âge préventifs sont essentiels pour maintenir une peau jeune et éclatante.</p>

      <h3>À 25 ans : la prévention</h3>
      <p>C'est l'âge idéal pour commencer une routine de soins préventifs avec des crèmes hydratantes et une protection solaire quotidienne.</p>

      <h3>À 35 ans : les premiers traitements</h3>
      <p>Les premières rides d'expression apparaissent. C'est le moment de considérer des traitements plus ciblés comme les injections d'acide hyaluronique.</p>

      <h3>À 45 ans : les traitements intensifs</h3>
      <p>La peau perd en élasticité. Les traitements comme le Morpheus 8 ou les peelings peuvent aider à retrouver fermeté et éclat.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1616391182219-e080b4d86356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Anti-âge",
    author: "Dr Nadine Baron",
    published_at: new Date(Date.now() - 86400000).toISOString(),
    read_time: 3,
    featured: false,
    meta_title: "Soins Anti-âge - Guide Complet | La Villa Esthétique",
    meta_description: "Guide complet sur les soins anti-âge par le Dr Nadine Baron à Toulouse.",
    keywords: "soins anti-âge, rides, acide hyaluronique, prévention",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: '3',
    title: "HydraFacial : le soin visage révolutionnaire",
    slug: "hydrafacial-soin-visage-revolutionnaire",
    excerpt: "Le HydraFacial combine nettoyage, exfoliation et hydratation pour une peau parfaite.",
    content: `
      <h2>Qu'est-ce que le HydraFacial ?</h2>
      <p>Le HydraFacial est un soin du visage médical non invasif qui permet de nettoyer, exfolier et hydrater la peau en profondeur en une seule séance.</p>

      <h3>Les étapes du traitement</h3>
      <ol>
        <li><strong>Nettoyage</strong> : Élimination des impuretés</li>
        <li><strong>Exfoliation</strong> : Retrait des cellules mortes</li>
        <li><strong>Extraction</strong> : Nettoyage des pores</li>
        <li><strong>Hydratation</strong> : Apport de sérums nutritifs</li>
      </ol>

      <p>Résultats visibles immédiatement : peau plus lisse, plus ferme et éclatante.</p>

      <h3>Pour qui ?</h3>
      <p>Le HydraFacial convient à tous les types de peau et peut traiter diverses problématiques : acné, rides, taches, pores dilatés.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Soins du Visage",
    author: "Dr Nadine Baron",
    published_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    read_time: 4,
    featured: true,
    meta_title: "HydraFacial Toulouse - Soin Visage Médical | La Villa Esthétique",
    meta_description: "Découvrez le HydraFacial, soin visage révolutionnaire au cabinet du Dr Nadine Baron à Toulouse.",
    keywords: "HydraFacial, soin visage, nettoyage peau, Toulouse",
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 86400000).toISOString()
  }
]

export const demoCategories = [
  'Tous les articles',
  'Épilation Laser',
  'Anti-âge',
  'Soins du Visage'
]