// Script de test pour valider les sitemaps générés
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3001'; // Serveur de développement

async function testSitemap(url, name) {
  console.log(`\n🔍 Test du ${name}...`);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`❌ ${name} - Status: ${response.status}`);
      return false;
    }

    const content = await response.text();

    // Vérifications basiques XML
    if (!content.includes('<?xml') || !content.includes('<urlset') && !content.includes('<sitemapindex')) {
      console.log(`❌ ${name} - Format XML invalide`);
      return false;
    }

    // Compter les URLs
    const urlCount = (content.match(/<url>/g) || []).length;
    const sitemapCount = (content.match(/<sitemap>/g) || []).length;

    if (urlCount > 0) {
      console.log(`✅ ${name} - ${urlCount} URLs trouvées`);
    } else if (sitemapCount > 0) {
      console.log(`✅ ${name} - ${sitemapCount} sitemaps indexés`);
    } else {
      console.log(`⚠️  ${name} - Aucune URL trouvée`);
    }

    // Afficher un échantillon pour validation manuelle
    console.log(`📄 Aperçu du contenu:`);
    console.log(content.substring(0, 500) + '...');

    return true;

  } catch (error) {
    console.log(`❌ ${name} - Erreur: ${error.message}`);
    return false;
  }
}

async function testRobots() {
  console.log(`\n🤖 Test du robots.txt...`);

  try {
    const response = await fetch(`${BASE_URL}/robots.txt`);

    if (!response.ok) {
      console.log(`❌ robots.txt - Status: ${response.status}`);
      return false;
    }

    const content = await response.text();

    if (!content.includes('User-agent:') || !content.includes('Sitemap:')) {
      console.log(`❌ robots.txt - Format invalide`);
      return false;
    }

    console.log(`✅ robots.txt - OK`);
    console.log(`📄 Contenu:`);
    console.log(content);

    return true;

  } catch (error) {
    console.log(`❌ robots.txt - Erreur: ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Test des sitemaps et robots.txt\n');
  console.log(`Base URL: ${BASE_URL}`);

  const tests = [
    { url: `${BASE_URL}/sitemap.xml`, name: 'Sitemap principal' },
    { url: `${BASE_URL}/blog/sitemap.xml`, name: 'Sitemap blog' },
  ];

  let successCount = 0;

  // Test des sitemaps
  for (const test of tests) {
    const success = await testSitemap(test.url, test.name);
    if (success) successCount++;
  }

  // Test du robots.txt
  const robotsSuccess = await testRobots();
  if (robotsSuccess) successCount++;

  // Résumé
  console.log(`\n📊 Résultats des tests:`);
  console.log(`✅ Réussites: ${successCount}/${tests.length + 1}`);

  if (successCount === tests.length + 1) {
    console.log('🎉 Tous les tests sont passés avec succès !');
    console.log('\n📋 URLs à soumettre à Google Search Console:');
    console.log(`- https://lavillaesthetique-toulouse.com/sitemap.xml`);
    console.log(`- https://lavillaesthetique-toulouse.com/blog/sitemap.xml`);
    console.log(`- https://lavillaesthetique-toulouse.com/robots.txt`);
  } else {
    console.log('⚠️  Certains tests ont échoué. Vérifiez les erreurs ci-dessus.');
  }
}

// Attendre un peu que le serveur soit prêt
setTimeout(runTests, 2000);