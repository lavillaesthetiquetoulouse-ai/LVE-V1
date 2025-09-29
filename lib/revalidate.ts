// Utilitaire pour forcer la régénération des pages blog
// Peut être utilisé depuis l'interface admin si besoin

export async function revalidateBlogPages() {
  try {
    // Force la régénération de la page blog principale
    await fetch('/api/revalidate?path=/blog', {
      method: 'POST',
    })

    console.log('✅ Blog pages revalidated successfully')
    return { success: true }
  } catch (error) {
    console.error('❌ Error revalidating blog pages:', error)
    return { success: false, error }
  }
}

export async function revalidateBlogPost(slug: string) {
  try {
    // Force la régénération d'un article spécifique
    await fetch(`/api/revalidate?path=/blog/${slug}`, {
      method: 'POST',
    })

    console.log(`✅ Blog post ${slug} revalidated successfully`)
    return { success: true }
  } catch (error) {
    console.error(`❌ Error revalidating blog post ${slug}:`, error)
    return { success: false, error }
  }
}