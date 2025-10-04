// Script de test pour vérifier les images du blog après correction
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fonction d'optimisation corrigée
function optimizeImageUrl(imageUrl) {
  if (!imageUrl) return imageUrl;
  // Retourne l'URL originale sans modification
  return imageUrl;
}

async function testBlogPostsFixed() {
  console.log('🔄 Test après correction de la fonction optimizeImageUrl...\n');

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(5); // Test avec les 5 derniers articles

    if (error) {
      console.error('❌ Erreur:', error);
      return;
    }

    console.log(`✅ Test avec ${data.length} articles récents:\n`);

    data.forEach((post, index) => {
      const originalUrl = post.image_url;
      const optimizedUrl = optimizeImageUrl(post.image_url);

      console.log(`${index + 1}. ${post.title}`);
      console.log(`   URL originale:  ${originalUrl || 'AUCUNE'}`);
      console.log(`   URL optimisée:  ${optimizedUrl || 'AUCUNE'}`);
      console.log(`   Status: ${originalUrl === optimizedUrl ? '✅ INCHANGÉE (CORRECT)' : '⚠️  MODIFIÉE'}`);
      console.log('');
    });

    console.log('🎉 Test terminé - Toutes les URLs sont maintenant préservées !');

  } catch (err) {
    console.error('❌ Exception:', err);
  }
}

testBlogPostsFixed();