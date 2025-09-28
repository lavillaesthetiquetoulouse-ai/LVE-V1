# 📸 Guide : Ajouter des images au blog

## 🎯 **Processus d'ajout d'images**

### **Étape 1 : Préparer l'image**
1. **Format** : Convertir en WebP (obligatoire)
2. **Optimisation** : Utiliser un outil comme:
   - [Squoosh.app](https://squoosh.app/) (gratuit, en ligne)
   - [TinyPNG](https://tinypng.com/) puis conversion WebP
   - Photoshop/GIMP avec export WebP

### **Étape 2 : Nommage**
- **Convention** : `sujet-principal-lieu-villa-esthetique.webp`
- **Exemples** :
  ```
  hydrafacial-toulouse-seance-villa-esthetique.webp
  botox-injections-anti-age-villa-esthetique.webp
  laser-epilation-definitive-toulouse-villa-esthetique.webp
  ```

### **Étape 3 : Ajouter l'image**
1. **Placer le fichier** dans : `public/images/blog/`
2. **Via GitHub** :
   - Aller sur votre repo GitHub
   - Navigate to `public/images/blog/`
   - Cliquer "Add file" > "Upload files"
   - Glisser-déposer votre image WebP
   - Commit avec message : "📸 Ajout image blog: [nom-article]"

### **Étape 4 : Mettre à jour la base Supabase**
1. **Ouvrir Supabase Dashboard**
2. **Aller dans** : Table Editor > `blog_posts`
3. **Trouver votre article** et modifier la colonne `image_url`
4. **Nouvelle URL** : `/images/blog/votre-image.webp`

## ✅ **Exemple complet**

### Article : "Nouveau traitement PRP visage"
1. **Image** : `prp-visage-regeneration-villa-esthetique.webp`
2. **Placement** : `public/images/blog/prp-visage-regeneration-villa-esthetique.webp`
3. **URL Supabase** : `/images/blog/prp-visage-regeneration-villa-esthetique.webp`

## 🚀 **Déploiement automatique**
- Après commit GitHub, Netlify redéploie automatiquement
- L'image sera disponible en ~2-3 minutes

## 💡 **Conseils d'optimisation**
- **Taille recommandée** : 1200x630px (format article)
- **Qualité WebP** : 80-85% (bon compromis)
- **Poids idéal** : < 100KB par image
- **Alt text** : Sera automatiquement le titre de l'article

## 🔧 **Avantages du nouveau système**
- ✅ **Gratuit** (plus de frais Supabase)
- ✅ **Plus rapide** (CDN Netlify)
- ✅ **Cache optimal** (1 an)
- ✅ **PageSpeed amélioré**

## 🆘 **En cas de problème**
1. Vérifier que l'image est bien en WebP
2. Vérifier le chemin : `/images/blog/nom-fichier.webp`
3. Attendre 2-3 minutes après le commit GitHub
4. Vider le cache navigateur (Ctrl+F5)