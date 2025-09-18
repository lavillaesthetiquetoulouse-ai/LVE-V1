import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fbslsxzirjpyzgqbdkfe.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2xzeHppcmpweXpncWJka2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MTA4MDYsImV4cCI6MjA3Mjk4NjgwNn0.jdpyXOc-LI7g0icL2BHVLb8likh8WnQ67gMUNdDVksw'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables, using fallback values')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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

  return data || []
}

// Fonction pour récupérer un article par slug
export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  return data
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