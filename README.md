# lumiia-site

Site officiel de LUMIIA — L'atelier de l'émerveillement  
**URL de production :** https://i-immersion.github.io/lumiia-site/  
(À remplacer par https://www.lumiia.fr une fois le domaine pointé)

---

## Structure

```
lumiia-site/
├── index.html        ← site complet (single file)
├── README.md
└── deployer.command  ← double-clic pour déployer
```

Le site est un fichier HTML unique (vanilla HTML/CSS/JS, aucune dépendance).

---

## Déploiement

### Premier déploiement (une seule fois)

1. Créer le repo `lumiia-site` sur https://github.com/i-immersion
2. Aller dans **Settings → Pages → Source : Deploy from branch → main → / (root)**
3. Cloner le repo localement et y copier ces fichiers
4. Rendre le script exécutable : `chmod +x deployer.command`

### Mises à jour

Double-cliquer sur `deployer.command` — c'est tout.

---

## Domaine personnalisé (lumiia.fr)

Une fois le repo actif sur GitHub Pages :
1. Aller dans **Settings → Pages → Custom domain** → entrer `lumiia.fr`
2. Chez votre registrar (OVH, Gandi…) ajouter un enregistrement DNS :
   - Type `A` → `185.199.108.153` (et les 3 autres IPs GitHub Pages)
   - Ou type `CNAME` → `i-immersion.github.io`
3. Activer **Enforce HTTPS** dans les settings Pages

---

## Changelog

### v2.0 — 2026-03-30
- Ajout section Spectacle saisonnier (été / Halloween / Noël 2026)
- Ajout section 1er étage : Roller Disco, Laser Game, Escape Game, Quiz Room, Salle de spectacle, Bar/Snack
- Section Studios refondue → narratif Atelier de fabrication (suppression discours B2B)
- Packs enrichis : Famille & Groupes, Séminaire, Afterwork mensuel
- Lien lumiiastudios.fr repositionné en footer et section Atelier
- Email en clair (suppression Cloudflare obfuscation)
- WhatsApp lien direct (wa.me)

### v1.0 — 2026-03-28
- Première version : structure occasions/packs, bar immersif, agenda, expériences RDC
