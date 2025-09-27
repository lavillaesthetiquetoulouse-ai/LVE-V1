'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { generateSlug, slugMappings, isValidSlug, getSlugSuggestions } from '@/lib/slug-utils'

interface BlogPost {
  id: string
  title: string
  slug: string
  published: boolean
}

interface SlugUpdate {
  id: string
  title: string
  oldSlug: string
  newSlug: string
  status: 'pending' | 'success' | 'error'
  error?: string
}

export default function FixSlugsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [updates, setUpdates] = useState<SlugUpdate[]>([])
  const [loading, setLoading] = useState(true)
  const [fixing, setFixing] = useState(false)
  const [step, setStep] = useState<'analyze' | 'preview' | 'execute' | 'complete'>('analyze')

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    try {
      setLoading(true)
      console.log('📖 Loading all blog posts...')

      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, published')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading posts:', error)
        return
      }

      console.log('📊 Loaded posts:', data?.length)
      setPosts(data || [])

      // Analyser les slugs qui ont besoin d'être corrigés
      analyzeSlugs(data || [])

    } catch (err) {
      console.error('Exception loading posts:', err)
    } finally {
      setLoading(false)
    }
  }

  function analyzeSlugs(postsData: BlogPost[]) {
    console.log('🔍 Analyzing slugs...')

    const slugUpdates: SlugUpdate[] = postsData
      .filter(post => !isValidSlug(post.slug))
      .map(post => {
        // Essayer d'abord le mapping manuel
        const mapping = slugMappings.find(m => m.old === post.slug)
        const newSlug = mapping ? mapping.new : generateSlug(post.title)

        return {
          id: post.id,
          title: post.title,
          oldSlug: post.slug,
          newSlug,
          status: 'pending' as const
        }
      })

    console.log('🔧 Found slugs to fix:', slugUpdates.length)
    setUpdates(slugUpdates)
    setStep('preview')
  }

  async function executeSlugFixes() {
    setFixing(true)
    setStep('execute')

    console.log('🚀 Starting slug fixes...')

    for (let i = 0; i < updates.length; i++) {
      const update = updates[i]

      try {
        console.log(`🔄 Fixing ${i + 1}/${updates.length}: ${update.oldSlug} → ${update.newSlug}`)

        const { error } = await supabase
          .from('blog_posts')
          .update({ slug: update.newSlug })
          .eq('id', update.id)

        if (error) {
          console.error(`❌ Error updating ${update.id}:`, error)
          setUpdates(prev => prev.map(u =>
            u.id === update.id
              ? { ...u, status: 'error', error: error.message }
              : u
          ))
        } else {
          console.log(`✅ Updated ${update.id}`)
          setUpdates(prev => prev.map(u =>
            u.id === update.id
              ? { ...u, status: 'success' }
              : u
          ))
        }

        // Petit délai pour éviter de surcharger l'API
        await new Promise(resolve => setTimeout(resolve, 100))

      } catch (err: any) {
        console.error(`❌ Exception updating ${update.id}:`, err)
        setUpdates(prev => prev.map(u =>
          u.id === update.id
            ? { ...u, status: 'error', error: err.message }
            : u
        ))
      }
    }

    setFixing(false)
    setStep('complete')
    console.log('🎉 Slug fixes completed!')
  }

  const suggestions = getSlugSuggestions()

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">🔧 Correction des Slugs</h1>
        <p>Chargement des articles...</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">🔧 Correction des Slugs URL</h1>
        <p className="text-gray-600 mb-4">
          Outil pour corriger automatiquement les slugs non URL-friendly dans la base de données.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">📋 Règles pour les slugs :</h3>
          <ul className="text-sm space-y-1">
            {suggestions.rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>

      {step === 'analyze' && (
        <div className="text-center py-8">
          <p>Analyse en cours...</p>
        </div>
      )}

      {step === 'preview' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              📊 Aperçu des corrections ({updates.length} articles à corriger)
            </h2>

            {updates.length === 0 ? (
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800">✅ Tous les slugs sont déjà URL-friendly !</p>
              </div>
            ) : (
              <>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800">
                    ⚠️ {updates.length} articles ont des slugs qui seront corrigés
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {updates.slice(0, 5).map(update => (
                    <div key={update.id} className="bg-white border rounded-lg p-4">
                      <h3 className="font-medium mb-2">{update.title}</h3>
                      <div className="text-sm">
                        <div className="text-red-600">❌ Ancien : <code>{update.oldSlug}</code></div>
                        <div className="text-green-600">✅ Nouveau : <code>{update.newSlug}</code></div>
                      </div>
                    </div>
                  ))}

                  {updates.length > 5 && (
                    <p className="text-gray-500">... et {updates.length - 5} autres articles</p>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={executeSlugFixes}
                    disabled={fixing}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {fixing ? 'Correction en cours...' : '🚀 Lancer la correction'}
                  </button>

                  <button
                    onClick={() => window.location.reload()}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                  >
                    🔄 Recharger
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {step === 'execute' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">⚡ Correction en cours...</h2>
          <div className="space-y-2">
            {updates.map(update => (
              <div key={update.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="flex-1">
                  <div className="font-medium">{update.title}</div>
                  <div className="text-sm text-gray-600">
                    {update.oldSlug} → {update.newSlug}
                  </div>
                </div>
                <div className="text-right">
                  {update.status === 'pending' && '⏳'}
                  {update.status === 'success' && '✅'}
                  {update.status === 'error' && '❌'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 'complete' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">🎉 Correction terminée !</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">✅ Réussies</h3>
              <p className="text-green-700">
                {updates.filter(u => u.status === 'success').length} articles corrigés
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">❌ Échecs</h3>
              <p className="text-red-700">
                {updates.filter(u => u.status === 'error').length} articles en erreur
              </p>
            </div>
          </div>

          {updates.filter(u => u.status === 'error').length > 0 && (
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-red-800 mb-2">Erreurs détaillées :</h3>
              {updates
                .filter(u => u.status === 'error')
                .map(update => (
                  <div key={update.id} className="text-sm text-red-700 mb-1">
                    {update.title}: {update.error}
                  </div>
                ))}
            </div>
          )}

          <div className="flex gap-4">
            <a
              href="/blog"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              📖 Tester le blog
            </a>

            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              🔄 Refaire une analyse
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Retour à l'accueil
        </a>
      </div>
    </div>
  )
}