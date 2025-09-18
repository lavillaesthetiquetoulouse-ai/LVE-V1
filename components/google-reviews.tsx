'use client';

import { Star, ExternalLink, Heart, User, Calendar, MapPin } from 'lucide-react';

const googleReviews = [
  {
    name: 'Emma Pellaprat',
    reviewCount: 7,
    date: 'il y a 2 semaines',
    rating: 5,
    text: `Une femme formidable qui est très à l'écoute de ces clientes. D'une douceur parfaite. Cabinet TRÈS PROPRE, travaille avec de très bon produits et surtout d'une vigilance incroyable. Ce n'est pas la première praticienne que je vois pour mes lèvres, mais je peux vous garantir que ce sera la dernière jusqu'à sa retraite😆 ( qui je vous avoue ne me tarde pas!!!) À très bientôt ✨🌸`,
    badge: 'Nouveau',
    treatment: 'Injections lèvres'
  },
  {
    name: 'jenny jenny',
    reviewCount: 19,
    date: 'il y a 2 semaines',
    rating: 5,
    text: `Le Dr Baron est juste extraordinaire ! Super professionnelle, adorable et d'une gentillesse incroyable. Elle met tout de suite à l'aise et on se sent vraiment bien suivie. Merci à elle ! Hâte d'être à mardi pour notre nouveau rendez vous`,
    badge: 'Local Guide',
    visitDate: 'Visité en août'
  },
  {
    name: 'Camille C',
    reviewCount: 8,
    date: 'il y a 2 semaines',
    rating: 5,
    text: `Je recommande vivement le Dr Baron. Elle est extrêmement bienveillante et professionnelle. Elle prend toujours le temps de bien expliquer les traitements, met à l'aise dès la première consultation et instaure une vraie relation de confiance. Les résultats sont toujours naturels et à la hauteur de mes attentes. Je suis pleinement satisfaite et continuerai à lui faire confiance les yeux fermés !`,
    badge: 'Nouveau'
  },
  {
    name: 'jade grayssac',
    reviewCount: 8,
    photoCount: 11,
    date: 'il y a une semaine',
    rating: 5,
    text: `J'ai déjà consulté trois autres médecins esthétiques avant le Dr Baron et c'est de loin la meilleure. Elle a pris énormément de temps pour analyser mon visage dans le détail, comprendre mes attentes et m'expliquer toutes les possibilités, y compris celles qui n'étaient pas de son ressort. Très à l'écoute et bienveillante, elle m'a proposé des solutions adaptées à mon visage et à mes attentes, et m'a accompagnée dans une réflexion à long terme. Elle m'a apporté des conseils précieux. Elle est douce, rassurante et minutieuse dans l'exécution. Le résultat est juste parfait et très naturel ! Je ne laisse jamais d'avis Google mais là, je suis bluffée par son professionnalisme ! Son assistante est également d'une grande gentillesse !`,
    badge: 'Nouveau',
    visitDate: 'Visité en août'
  },
  {
    name: 'Dmytriat Sabrina',
    reviewCount: 9,
    photoCount: 1,
    date: 'il y a 2 semaines',
    rating: 5,
    text: `Très satisfaite de mon passage entre les mains du Dr Nadine Baron ! À l'écoute, professionnelle et humaine +++ 🫶🏻 Elle a su me guider pour mes injections, malgré mon stress … tout s'est très bien passé ! Je recommande vivement ! Je reviendrais avec plaisir pour les prochaines voir même faire d'autres soins 🤭`,
    badge: 'Nouveau',
    visitDate: 'Visité en août',
    likes: 1
  },
  {
    name: 'Sandrine Ahres',
    reviewCount: 14,
    date: 'il y a 2 semaines',
    rating: 5,
    text: `« Consultation aujourd'hui avec le Dr Nadine Baron : topissime 👌 ! Une personne solaire, ultra pro, avec une énergie et une dynamique tellement positives que vous repartez déjà avec la moitié de vos soucis en moins 😍. Le cabinet ? Magnifique ! Tout est joli, chaleureux, décoré avec goût (exactement ce que j'aime 💕). On s'y sent bien dès qu'on passe la porte. Franchement, je ne comprends pas l'avis négatif laissé aujourd'hui dont le dr Baron parle sur Instagram. On a parfois l'impression que certaines personnes se lèvent le matin en décidant de gâcher la bonne humeur des autres 🙄. C'est un peu comme aller dans un resto étoilé et se plaindre parce qu'il n'y a pas de nuggets au menu 🤷‍♀️. Bref, moi je recommande +++ ! Merci encore Docteur pour votre sourire, votre humanité et votre professionnalisme 👏. Continuez à briller cela dérange les grincheux 🌟 ! »`,
    badge: 'Nouveau',
    visitDate: 'Visité en août'
  },
  {
    name: 'Liline',
    reviewCount: 1,
    date: 'novembre 2024',
    rating: 5,
    text: `Le Docteur BARRON est vraiment exceptionnelle ! Elle a su me mettre à l'aise dès mon arrivée et s'avère très professionnelle. Sa gentillesse et ses conseils m'ont vraiment rassurée et je me sens entre de bonnes mains. Le résultat est vraiment magnifique et en corrélation avec mes attentes, je suis tellement satisfaite. (Rhinoplastie avec des injections à cause d'une déviation nasale) Je recommande vivement cette équipe et ce cabinet à tous ceux qui recherchent des soins médicaux de qualité dans un cabinet trop beau.`,
    visitDate: 'Visité en novembre 2024',
    treatment: 'Rhinoplastie médicale'
  }
];

interface GoogleReviewsProps {
  maxReviews?: number;
  showHeader?: boolean;
}

export function GoogleReviews({ maxReviews = 6, showHeader = true }: GoogleReviewsProps) {
  const displayedReviews = googleReviews.slice(0, maxReviews);
  
  return (
    <>
      {/* Styles CSS pour l'animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container">
        {showHeader && (
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* Logo Google officiel et statistiques */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" className="flex-shrink-0">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-neutral-900">4,6</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : i === 4 ? 'fill-yellow-400/70 text-yellow-400' : 'text-neutral-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-neutral-600">
                  <strong>176 avis</strong> Google
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-outfit font-bold text-neutral-900 mb-6">
              Avis de nos patientes sur Google
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Découvrez les témoignages authentiques de nos patientes. 
              Ces avis Google vérifiés reflètent notre engagement pour votre satisfaction.
            </p>
          </div>
        )}

        {/* Container avec overflow pour le défilement */}
        <div className="relative overflow-hidden">
          {/* Conteneur des avis avec animation de défilement */}
          <div className="flex animate-scroll space-x-6" style={{
            width: 'max-content',
            animation: 'scroll 45s linear infinite'
          }}>
            {/* Dupliquer les avis pour un défilement continu */}
            {[...googleReviews, ...googleReviews].map((review, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100">
              {/* En-tête de l'avis */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-neutral-900 text-sm">
                      {review.name}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>{review.reviewCount} avis</span>
                      {review.photoCount && (
                        <>
                          <span>•</span>
                          <span>{review.photoCount} photos</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {review.badge && (
                  <div className="flex-shrink-0">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      review.badge === 'Local Guide' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {review.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Note et date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`}
                    />
                  ))}
                </div>
                <div className="text-xs text-neutral-500">
                  {review.date}
                </div>
              </div>

              {/* Texte de l'avis */}
              <p className="text-sm text-neutral-700 leading-relaxed mb-4 line-clamp-6">
                {review.text}
              </p>

              {/* Informations supplémentaires */}
              <div className="flex flex-col gap-2 text-xs text-neutral-500">
                {review.visitDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{review.visitDate}</span>
                  </div>
                )}
                {review.treatment && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>Traitement : {review.treatment}</span>
                  </div>
                )}
                {review.likes && (
                  <div className="flex items-center gap-2 mt-2">
                    <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                    <span>{review.likes}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* CTA vers Google */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md border border-neutral-100">
            <svg width="40" height="40" viewBox="0 0 24 24" className="flex-shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="text-left">
              <div className="font-semibold text-neutral-900 mb-1">
                Voir tous nos avis Google
              </div>
              <div className="text-sm text-neutral-600">
                176 avis vérifiés • Note moyenne 4,6/5
              </div>
            </div>
            <a
              href="https://share.google/9BxNhi4ZeGBjp9i0g"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-villa ml-4"
            >
              Voir sur Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}