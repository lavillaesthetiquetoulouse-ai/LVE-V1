import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FAQ } from '@/components/faq';
import { Calendar, ArrowRight, Clock, Users, Shield, AlertTriangle, CheckCircle, Zap, Thermometer, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Épilation Laser Aisselles Toulouse | Dr Nadine Baron - Villa Esthétique',
  description: 'Épilation laser aisselles à Toulouse (Lardenne). Dr Nadine Baron, laser diode dernière génération. Résultats durables, confort optimal.',
  keywords: 'épilation laser aisselles, Toulouse, Lardenne, Dr Nadine Baron, laser diode, épilation définitive',
};

const contraindications = [
  'Grossesse et allaitement',
  'Prise d\'anticoagulants',
  'Infections cutanées actives',
  'Bronzage récent ou prévu',
  'Phototypes très foncés (VI)',
  'Tatouages sur la zone',
];

const precautions = [
  'Éviter le soleil 4 semaines avant/après',
  'Arrêter l\'épilation à la cire 6 semaines avant',
  'Raser la zone 24-48h avant la séance',
  'Nettoyer soigneusement la peau',
  'Signaler tout traitement médical',
  'Hydrater quotidiennement après',
];

const faqItems = [
  {
    question: 'Combien de séances sont nécessaires pour les aisselles ?',
    answer: 'En moyenne 6 à 8 séances espacées de 6 semaines sont nécessaires pour une épilation définitive des aisselles. Le nombre peut varier selon la densité pilaire et le type de poil.',
  },
  {
    question: 'L\'épilation laser des aisselles est-elle douloureuse ?',
    answer: 'La sensation est comparable à un petit élastique qui claque sur la peau. Les aisselles étant une zone sensible, nous adaptons les paramètres et proposons un refroidissement pendant le traitement.',
  },
  {
    question: 'Puis-je utiliser un déodorant après la séance ?',
    answer: 'Il est recommandé d\'attendre 24-48h après la séance avant d\'appliquer un déodorant. Privilégiez les produits doux et sans alcool pendant une semaine.',
  },
  {
    question: 'Quand voit-on les premiers résultats ?',
    answer: 'Les poils traités tombent progressivement entre 7 et 21 jours après la séance. Une réduction notable de la pilosité est visible après 2-3 séances.',
  },
  {
    question: 'Peut-on traiter les aisselles en été ?',
    answer: 'Il est possible de traiter en été mais avec des précautions renforcées : éviter l\'exposition solaire, utiliser une protection SPF50+ et porter des vêtements couvrants.',
  },
  {
    question: 'Quel est le coût d\'un forfait aisselles ?',
    answer: 'Nous proposons des forfaits avantageux pour les aisselles. Le tarif est personnalisé selon vos besoins lors de la consultation. Possibilité de paiement échelonné.',
  },
];

export default function EpilationLaserAissellesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Épilation Laser Aisselles - Dr Nadine Baron Toulouse',
            description: 'Épilation laser définitive des aisselles par laser diode. Cabinet médical à Toulouse Lardenne.',
            url: 'https://villa-esthetique-toulouse.fr/actes/epilation-laser-aisselles',
            mainEntity: {
              '@type': 'MedicalProcedure',
              name: 'Épilation Laser Aisselles',
              description: 'Épilation définitive des aisselles par laser diode',
              procedureType: 'Laser Hair Removal',
              bodyLocation: 'Underarms',
              preparation: 'Éviter le soleil, raser 24-48h avant',
              followUp: 'Éviter déodorant 48h, hydrater quotidiennement',
              riskFactor: 'Rougeurs temporaires, sensibilité',
            },
          }),
        }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Soins', href: '/actes' },
            { label: 'Épilation Laser Aisselles' }
          ]} />
        </div>

        {/* Hero */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h1 className="apple-title-hero">
                    <span className="text-blue-600">
                      Épilation Laser Aisselles à Toulouse
                    </span>
                  </h1>
                  
                  {/* TL;DR */}
                  <div className="bg-brand-subtle rounded-xl p-6 mb-8">
                    <h2 className="font-outfit font-semibold text-lg text-neutral-900 mb-3">
                      L'essentiel en 30 secondes
                    </h2>
                    <div className="space-y-2 text-neutral-700">
                      <p>• <strong>Technique :</strong> Laser diode 808nm dernière génération</p>
                      <p>• <strong>Durée :</strong> 15-20 minutes par séance</p>
                      <p>• <strong>Séances :</strong> 6-8 séances espacées de 6 semaines</p>
                      <p>• <strong>Résultats :</strong> Réduction progressive jusqu'à 90-95%</p>
                      <p>• <strong>Confort :</strong> Refroidissement intégré, bien toléré</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-8">
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

                {/* Quick info card */}
                <div className="space-y-4">
                  <div className="card">
                    <h3 className="font-outfit font-semibold text-lg text-neutral-900 mb-4">
                      Informations pratiques
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-neutral-500" />
                        <div>
                          <div className="font-medium">Durée</div>
                          <div className="text-neutral-600">15-20 minutes</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-neutral-500" />
                        <div>
                          <div className="font-medium">Séances</div>
                          <div className="text-neutral-600">6-8 séances</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-neutral-500" />
                        <div>
                          <div className="font-medium">Technologie</div>
                          <div className="text-neutral-600">Laser diode 808nm</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Heart className="w-4 h-4 text-neutral-500" />
                        <div>
                          <div className="font-medium">Confort</div>
                          <div className="text-neutral-600">Refroidissement intégré</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-success/10 rounded-xl p-4 border border-success/20">
                    <h4 className="font-medium text-success mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Zone populaire
                    </h4>
                    <p className="text-sm text-neutral-700">
                      Les aisselles font partie des zones les plus demandées en épilation laser. 
                      Résultats excellents et confort optimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-12 border-t border-neutral-200">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Pour qui ? */}
              <div>
                <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                  Pour qui ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                      Candidats idéaux
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Poils foncés sur peau claire à mate (phototypes I-V)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Pilosité dense ou clairsemée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Poils incarnés récurrents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Gêne esthétique ou fonctionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Souhait de confort au quotidien</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                      Avantages spécifiques
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>Zone rapide à traiter (15-20 min)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>Excellent taux de réduction pilaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>Confort au rasage amélioré</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>Réduction des irritations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>Hygiène facilitée</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Résultats et limites */}
              <div>
                <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                  Résultats attendus et limites
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-success/10 rounded-xl p-6 border border-success/20">
                    <h3 className="font-semibold text-lg text-success mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Ce que vous pouvez attendre
                    </h3>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>• Réduction de 90-95% de la pilosité après traitement complet</li>
                      <li>• Premiers résultats visibles après 2-3 séances</li>
                      <li>• Peau plus lisse et moins irritée</li>
                      <li>• Disparition progressive des poils incarnés</li>
                      <li>• Confort durable au quotidien</li>
                      <li>• Économie de temps et produits de rasage</li>
                    </ul>
                  </div>
                  <div className="bg-warning/10 rounded-xl p-6 border border-warning/20">
                    <h3 className="font-semibold text-lg text-warning mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Limites et considérations
                    </h3>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>• Efficacité moindre sur poils blonds, blancs ou roux</li>
                      <li>• Peaux très foncées : protocole spécifique nécessaire</li>
                      <li>• Possibles retouches annuelles (5-10% de repousse)</li>
                      <li>• Nécessite plusieurs séances espacées</li>
                      <li>• Réaction hormonale possible (ménopause, SOPK)</li>
                      <li>• Éviction solaire pendant le traitement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Déroulé */}
              <div>
                <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                  Déroulé d'une séance
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-brand/20 text-brand rounded-full flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <h3 className="font-semibold text-neutral-900">Préparation</h3>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        Nettoyage de la zone, vérification du rasage (fait 24-48h avant), 
                        réglage des paramètres laser selon votre phototype.
                      </p>
                    </div>
                    <div className="card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-brand/20 text-brand rounded-full flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <h3 className="font-semibold text-neutral-900">Traitement</h3>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        Application du laser avec refroidissement simultané. 
                        Balayage méthodique de toute la zone des aisselles.
                      </p>
                    </div>
                    <div className="card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-brand/20 text-brand rounded-full flex items-center justify-center text-sm font-semibold">
                          3
                        </div>
                        <h3 className="font-semibold text-neutral-900">Fin de séance</h3>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        Application d'une crème apaisante, conseils post-traitement, 
                        planification de la séance suivante.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-info/10 rounded-xl p-6 border border-info/20">
                    <h3 className="font-semibold text-lg text-info mb-3 flex items-center gap-2">
                      <Thermometer className="w-5 h-5" />
                      Sensations pendant le traitement
                    </h3>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      La sensation est décrite comme une série de petits picotements ou élastiques 
                      qui claquent sur la peau. Les aisselles étant une zone sensible, le refroidissement 
                      intégré au laser améliore significativement le confort. La douleur est généralement 
                      bien tolérée et de courte durée (15-20 minutes maximum).
                    </p>
                  </div>
                </div>
              </div>

              {/* Contre-indications */}
              <div>
                <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                  Contre-indications et précautions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-danger/10 rounded-xl p-6 border border-danger/20">
                    <h3 className="font-semibold text-lg text-danger mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Contre-indications
                    </h3>
                    <ul className="space-y-2">
                      {contraindications.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                          <AlertTriangle className="w-4 h-4 text-danger mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-info/10 rounded-xl p-6 border border-info/20">
                    <h3 className="font-semibold text-lg text-info mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Précautions importantes
                    </h3>
                    <ul className="space-y-2">
                      {precautions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-info mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-warning/10 rounded-xl p-6 border border-warning/20">
                  <h3 className="font-semibold text-lg text-warning mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Signaux d'alerte post-traitement
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                    Consultez rapidement un médecin en cas de :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700">
                    <div>• Douleur intense persistante</div>
                    <div>• Fièvre ou frissons</div>
                    <div>• Signes d'infection (pus, odeur)</div>
                    <div>• Réaction allergique sévère</div>
                    <div>• Brûlure ou cloques importantes</div>
                    <div>• Troubles visuels (si projection)</div>
                  </div>
                </div>
              </div>

              {/* Tarifs */}
              <div>
                <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
                  Tarifs et forfaits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                      Tarifs aisselles
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                        <span className="text-neutral-700">Séance unitaire</span>
                        <span className="font-semibold text-neutral-900">80€</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                        <span className="text-neutral-700">Forfait 6 séances</span>
                        <span className="font-semibold text-neutral-900">420€</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-neutral-700">Forfait 8 séances</span>
                        <span className="font-semibold text-neutral-900">520€</span>
                      </div>
                      <div className="text-xs text-neutral-500 pt-2">
                        Économie de 60€ à 120€ avec les forfaits
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                      Avantages forfaits
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Économie substantielle par rapport aux séances unitaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Paiement échelonné possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Garantie de suivi personnalisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Séances de retouche à tarif préférentiel</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <p className="text-xs text-neutral-500">
                        Devis personnalisé lors de la consultation. 
                        Possibilité de combiner plusieurs zones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur l'épilation laser des aisselles" />

        {/* Internal links */}
        <section className="py-12 bg-neutral-100">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-outfit font-bold text-neutral-900 mb-8 text-center">
                Pour aller plus loin
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="/docteur-laser" className="card hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-neutral-900 mb-2">Docteur Laser</h3>
                  <p className="text-sm text-neutral-600">Découvrez toute notre gamme laser</p>
                </a>
                <a href="/tarifs" className="card hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-neutral-900 mb-2">Tous les tarifs</h3>
                  <p className="text-sm text-neutral-600">Grille tarifaire complète</p>
                </a>
                <a href="/contact" className="card hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-neutral-900 mb-2">Nous contacter</h3>
                  <p className="text-sm text-neutral-600">Questions et RDV</p>
                </a>
                <a href="/blog" className="card hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-neutral-900 mb-2">Blog</h3>
                  <p className="text-sm text-neutral-600">Conseils et actualités</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer médical */}
        <section className="py-8 bg-neutral-900 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Informations générales :</strong> Le contenu de cette page est informatif 
                et ne remplace pas une consultation médicale personnalisée. Seul le Dr Nadine Baron 
                peut établir un diagnostic, évaluer votre éligibilité au traitement et adapter 
                le protocole à votre cas particulier.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}