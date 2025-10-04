// Script de test pour vérifier les données du blog et les images
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔧 Configuration Supabase:');
console.log('URL:', supabaseUrl);
console.log('Key présente:', !!supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testBlogPosts() {
  console.log('\n🔍 Test de récupération des articles de blog...');

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('❌ Erreur lors de la récupération:', error);
      return;
    }

    console.log(`✅ Articles trouvés: ${data.length}`);

    if (data.length > 0) {
      console.log('\n📋 Détails des articles:');
      data.forEach((post, index) => {
        console.log(`\n${index + 1}. ${post.title}`);
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Image URL: ${post.image_url || 'AUCUNE IMAGE'}`);
        console.log(`   Catégorie: ${post.category}`);
        console.log(`   Publié le: ${post.published_at}`);

        if (post.image_url) {
          console.log(`   📸 IMAGE PRÉSENTE: ${post.image_url}`);
        } else {
          console.log(`   🚫 AUCUNE IMAGE`);
        }
      });

      // Statistiques
      const withImages = data.filter(post => post.image_url);
      const withoutImages = data.filter(post => !post.image_url);

      console.log(`\n📊 Statistiques:
- Articles avec images: ${withImages.length}
- Articles sans images: ${withoutImages.length}
- Total: ${data.length}`);

      if (withImages.length > 0) {
        console.log('\n🖼️  URLs d\'images présentes:');
        withImages.forEach(post => {
          console.log(`- ${post.title}: ${post.image_url}`);
        });
      }

    } else {
      console.log('⚠️  Aucun article trouvé dans la base de données');
    }

  } catch (err) {
    console.error('❌ Exception lors du test:', err);
  }
}

// Test de la structure de la table
async function testTableStructure() {
  console.log('\n🏗️  Test de la structure de la table...');

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Erreur structure:', error);
      return;
    }

    if (data && data.length > 0) {
      console.log('✅ Structure de la table:');
      console.log('Colonnes disponibles:', Object.keys(data[0]));
    } else {
      console.log('⚠️  Table vide, impossible de déterminer la structure');
    }

  } catch (err) {
    console.error('❌ Exception structure:', err);
  }
}

async function runTests() {
  console.log('🚀 Début des tests de diagnostic...\n');

  await testTableStructure();
  await testBlogPosts();

  console.log('\n✅ Tests terminés');
}

runTests();