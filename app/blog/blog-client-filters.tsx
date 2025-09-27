'use client';

import { useState } from 'react';
import { Calendar, ArrowRight, Clock, User, Search } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/supabase';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogClientFiltersProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogClientFilters({ posts, categories }: BlogClientFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous les articles' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Search Bar */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="max-w-md mx-auto relative" role="search">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <label htmlFor="blog-search" className="sr-only">
              Rechercher dans les articles de médecine esthétique
            </label>
            <input
              id="blog-search"
              type="text"
              placeholder="Rechercher un article médical..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              aria-describedby="search-help"
            />
            <div id="search-help" className="sr-only">
              Recherchez par mot-clé : épilation laser, injections, acné, anti-âge, etc.
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-600 mb-4">
                {searchTerm ?
                  `Aucun article trouvé pour "${searchTerm}"` :
                  'Aucun article disponible pour le moment.'
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn-secondary"
                >
                  Voir tous les articles
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card group hover:shadow-lg transition-all duration-300">
                  {post.image_url && (
                    <div className="aspect-[16/10] bg-gradient-to-br from-brand-subtle/20 to-laser-subtle/20 rounded-xl overflow-hidden mb-4">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="bg-brand/10 text-brand px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.read_time} min</span>
                      </div>
                    </div>

                    <h2 className="font-outfit font-semibold text-xl text-neutral-900 line-clamp-2 group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-neutral-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <Calendar className="w-4 h-4 ml-2" />
                        <span>
                          {format(new Date(post.published_at), 'd MMMM yyyy', { locale: fr })}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all group-hover:text-brand-hover"
                    >
                      Lire l'article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}