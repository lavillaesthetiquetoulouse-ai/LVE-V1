const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Optimiser toutes les images Supabase dans le projet
async function optimizeImages() {
  console.log('🔍 Recherche des images à optimiser...')

  const files = glob.sync('**/*.{tsx,ts,jsx,js}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**', 'build/**']
  })

  let totalReplacements = 0

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8')
    let hasChanges = false

    // Remplacer les balises img avec des URLs Supabase
    const imgPattern = /<img\s+src="(https:\/\/fbslsxzirjpyzgqbdkfe\.supabase\.co[^"]+)"\s+alt="([^"]*)"\s+className="([^"]*)"\s*\/?>(?!.*OptimizedImage)/gi

    content = content.replace(imgPattern, (match, src, alt, className) => {
      hasChanges = true
      totalReplacements++

      // Extraire les dimensions de className si possible
      const wMatch = className.match(/w-(\d+)/)
      const hMatch = className.match(/h-(\d+)/)

      let dimensions = ''
      if (wMatch && hMatch) {
        const w = parseInt(wMatch[1]) * 4 // Tailwind: w-6 = 24px
        const h = parseInt(hMatch[1]) * 4
        dimensions = ` width={${w}} height={${h}}`
      } else {
        dimensions = ' width={24} height={24}' // Default
      }

      return `<OptimizedImage src="${src}" alt="${alt}"${dimensions} className="${className}" />`
    })

    // Ajouter l'import si nécessaire
    if (hasChanges && !content.includes("import { OptimizedImage }")) {
      const importPattern = /import.*from.*['"]@\/components\/.*['"];?\n/
      if (importPattern.test(content)) {
        content = content.replace(importPattern, (match) => {
          return match + "import { OptimizedImage } from '@/components/OptimizedImage';\n"
        })
      } else {
        // Ajouter après le premier import
        const firstImport = content.match(/import.*from.*['"][^'"]*['"];?\n/)
        if (firstImport) {
          content = content.replace(firstImport[0], firstImport[0] + "import { OptimizedImage } from '@/components/OptimizedImage';\n")
        }
      }
    }

    if (hasChanges) {
      fs.writeFileSync(file, content)
      console.log(`✅ Optimisé: ${file}`)
    }
  }

  console.log(`🎉 Optimisation terminée! ${totalReplacements} images optimisées.`)
}

// Exécuter le script
if (require.main === module) {
  optimizeImages().catch(console.error)
}

module.exports = { optimizeImages }