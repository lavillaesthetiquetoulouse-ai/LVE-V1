import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fbslsxzirjpyzgqbdkfe.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2xzeHppcmpweXpncWJka2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MTA4MDYsImV4cCI6MjA3Mjk4NjgwNn0.jdpyXOc-LI7g0icL2BHVLb8likh8WnQ67gMUNdDVksw'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables, using fallback values')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
})

// Fonction de test de connexion
export async function testSupabaseConnection() {
  try {
    console.log('🔍 Testing Supabase connection...')
    console.log('URL:', supabaseUrl)
    console.log('Key provided:', !!supabaseAnonKey)

    const { data, error, count } = await supabase
      .from('blog_posts')
      .select('id, title, slug', { count: 'exact' })
      .limit(1)

    if (error) {
      console.error('❌ Supabase connection failed:', error)
      return {
        success: false,
        error: error,
        message: error.message
      }
    }

    console.log('✅ Supabase connection successful')
    console.log('Data sample:', data)
    console.log('Total count:', count)

    return {
      success: true,
      count: count || 0,
      sampleTitle: data?.[0]?.title || null,
      data: data
    }

  } catch (err: any) {
    console.error('❌ Supabase test exception:', err)
    return {
      success: false,
      error: err,
      message: err.message
    }
  }
}

// Types pour les articles de blog
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  image_url?: string
  category: string
  author: string
  published_at: string
  read_time: number
  featured: boolean
  meta_title?: string
  meta_description?: string
  keywords?: string
  created_at: string
  updated_at: string
}

// Fonction pour optimiser l'URL d'image (garde l'URL originale)
function optimizeImageUrl(imageUrl?: string): string | undefined {
  if (!imageUrl) return imageUrl

  // Retourne l'URL originale sans modification pour éviter les erreurs de chargement
  return imageUrl
}

// Fonction pour récupérer tous les articles
export async function getBlogPosts(category?: string) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (category && category !== 'Tous les articles') {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  // Optimiser les URLs d'images pour utiliser WebP
  const optimizedData = data?.map(post => ({
    ...post,
    image_url: optimizeImageUrl(post.image_url)
  }))

  return optimizedData || []
}

// Fonction pour récupérer un article par slug
export async function getBlogPostBySlug(slug: string) {
  console.log('🔍 Searching for blog post with slug:', slug)

  // Récupérer tous les articles publiés
  const { data: allPosts, error: allError } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  console.log('📊 ALL published posts:', allPosts?.length)
  console.log('🔗 Available slugs in DB:', allPosts?.map(p => p.slug))

  if (!allPosts) {
    console.log('❌ No posts retrieved')
    return null
  }

  // Test 1: Correspondance exacte
  const exactMatch = allPosts.find(post => post.slug === slug)
  if (exactMatch) {
    console.log('✅ Found exact match')
    return {
      ...exactMatch,
      image_url: optimizeImageUrl(exactMatch.image_url)
    }
  }

  // Test 2: Décodage URL simple
  const decodedSlug = decodeURIComponent(slug)
  console.log('🔄 Trying decoded slug:', decodedSlug)
  const decodedMatch = allPosts.find(post => post.slug === decodedSlug)
  if (decodedMatch) {
    console.log('✅ Found decoded match')
    return {
      ...decodedMatch,
      image_url: optimizeImageUrl(decodedMatch.image_url)
    }
  }

  // Test 3: Recherche flexible - normaliser les deux côtés
  const normalizedSlug = slug.replace(/%20/g, ' ').replace(/%3F/g, '?').replace(/%C3%A9/g, 'é').replace(/%E2%80%99/g, "'")
  console.log('🔧 Trying normalized slug:', normalizedSlug)
  const normalizedMatch = allPosts.find(post => post.slug === normalizedSlug)
  if (normalizedMatch) {
    console.log('✅ Found normalized match')
    return {
      ...normalizedMatch,
      image_url: optimizeImageUrl(normalizedMatch.image_url)
    }
  }

  // Test 4: Recherche par titre (fallback)
  const titleMatch = allPosts.find(post =>
    post.title.toLowerCase().includes(decodedSlug.toLowerCase()) ||
    decodedSlug.toLowerCase().includes(post.title.toLowerCase())
  )
  if (titleMatch) {
    console.log('✅ Found title match')
    return {
      ...titleMatch,
      image_url: optimizeImageUrl(titleMatch.image_url)
    }
  }

  console.log('❌ No article found with any method')
  return null
}

// Fonction pour récupérer les catégories
export async function getBlogCategories() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('category')
    .eq('published', true)

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  const uniqueCategories = Array.from(new Set(data.map(post => post.category)))
  return ['Tous les articles', ...uniqueCategories]
}