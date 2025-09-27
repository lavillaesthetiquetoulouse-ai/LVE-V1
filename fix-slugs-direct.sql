-- Script de correction directe des slugs dans Supabase
-- Remplace les slugs existants par des versions URL-friendly

UPDATE blog_posts SET slug = 'la-cryolipolyse-elimine-t-elle-durablement-les-graisses'
WHERE slug = 'La cryolipolyse élimine-t-elle durablement les graisses ?';

UPDATE blog_posts SET slug = 'resultats-du-laser-co2-pour-cicatrices-et-rides-profondes'
WHERE slug = 'Résultats du laser CO2 pour cicatrices et rides profondes';

UPDATE blog_posts SET slug = 'les-exosomes-lavenir-de-la-medecine-esthetique'
WHERE slug = 'Les exosomes : l''avenir de la médecine esthétique ?';

-- Afficher le résultat pour vérification
SELECT id, title, slug, published FROM blog_posts ORDER BY created_at DESC;