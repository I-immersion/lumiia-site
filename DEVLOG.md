# DEVLOG — lumiia-site

## Architecture
- Single file HTML/CSS/JS vanilla — aucune dépendance, aucun build step
- GitHub Pages sur branche main, racine /
- URL prod : https://i-immersion.github.io/lumiia-site/
- URL finale : https://www.lumiia.fr (à configurer DNS chez registrar)
- Déploiement : double-clic sur deployer.command

## Décisions techniques

### Single file vs multi-fichiers
Choix retenu : single file (index.html).
Raison : simplicité maximale pour GitHub Pages, pas de build, pas de chemins relatifs à gérer. Acceptable tant que le fichier reste sous ~200kb.

### Packs — onglets JS vanilla
Système d'onglets custom (showPack function) sans librairie.
Fonctionnel, testé. Ne pas migrer vers une lib pour ça.

### Emails
Email en clair dans le HTML (contact@lumiia.fr).
La v1 utilisait l'obfuscation Cloudflare (__cf_email__) qui cassait sur GitHub Pages — abandonnée.

### lumiiastudios.fr
Domaine séparé, site B2B distinct.
Sur lumiia.fr : lien discret en section Atelier et footer uniquement.
Ne pas mélanger les deux positionnements.

## Bugs connus / points d'attention
- .DS_Store commité accidentellement dans v2.0.0 — à supprimer via .gitignore
- lumiia-site claude-v1.html commité accidentellement — à supprimer

## A implémenter
- Formulaire de contact / réservation (en attente de décision : Tally, Typeform, ou custom Firebase)
- Intégration agenda dynamique (pour mettre à jour les événements sans toucher au code)
- Page spectacle dédiée quand le concept été 2026 sera finalisé
- Version mobile nav burger menu
- Analytics (Plausible ou GA4 — à décider)
- Domaine lumiia.fr — configuration DNS
