# LUMIIA — v2.9.0 · Multi-pages été 2026

Cette livraison contient le squelette technique multi-pages, la home refondue avec la nouvelle charte cosmos, la page modèle `/spectacle`, et 7 pages stubs pour que les liens fonctionnent dès le déploiement.

## Structure livrée

```
lumiia-site/
├── index.html              ← home refondue (charte v2)
├── spectacle/index.html    ← page modèle complète
├── experiences/index.html  ← stub
├── bar/index.html          ← stub
├── groupes/index.html      ← stub
├── escapade/index.html     ← stub (axe 2 : week-end potes)
├── atelier/index.html      ← stub (récit Wonka, à venir automne)
├── agenda/index.html       ← stub (à connecter à l'agenda Firebase existant plus tard)
├── infos/index.html        ← stub
├── css/
│   └── styles.css          ← tokens design system v2 + composants
├── js/
│   ├── partials.js         ← chargement header/footer
│   └── i18n.js             ← système multilingue
├── i18n/
│   ├── fr.json             ← traductions FR (complètes)
│   ├── en.json             ← vide (à traduire plus tard)
│   ├── nl.json             ← vide
│   └── de.json             ← vide
├── partials/
│   ├── header.html         ← partagé toutes pages
│   └── footer.html         ← partagé toutes pages
└── fonts/                  ← VIDE — tu dois y déposer GeometosSoftUltra.woff2 et ZingRust.woff2
```

## Comment intégrer dans ton repo

1. **Backup recommandé** — duplique ton `lumiia-site/` actuel ailleurs avant de remplacer
2. **Décompresse** le zip à la racine de ton repo `lumiia-site/`
3. **Vérifie** : si tu as déjà des fichiers `index.html` ou des dossiers existants au même nom, tu seras prompté pour écraser. À toi de voir si tu écrases ou pas selon ce que tu as.
4. **Garde** : `design-system/`, `Archive/`, `images/` (si existant) — ne sont pas touchés par cette livraison
5. **Déploie** : `git add -A && git commit -m "v2.9.0 — multi-pages skeleton + home + spectacle" && git push`

## Avant le push, deux choses à savoir

### 1. Les fonts payantes
Le CSS pointe vers `fonts/GeometosSoftUltra.woff2` et `fonts/ZingRust.woff2` (chemins relatifs au CSS).
- **Si tu déposes les fichiers** dans `fonts/`, ils seront utilisés en ligne
- **Sinon** la cascade CSS bascule automatiquement sur Antonio (Google Fonts) qui est un fallback proche de Geometos. Le site reste lisible et cohérent visuellement.

### 2. Les chemins absolus avec préfixe `/lumiia-site/`
Tous les liens internes sont préfixés par `/lumiia-site/` parce qu'on est sur GitHub Pages dans un sous-chemin (`https://i-immersion.github.io/lumiia-site/`).

**Quand tu migreras vers `lumiia.fr` (Firebase Hosting plus tard)**, tu devras faire un find & replace global :
- `/lumiia-site/` → `/`
- Dans : `partials/header.html`, `partials/footer.html`, tous les `index.html`, `js/partials.js`, `js/i18n.js`

C'est une opération simple en VS Code (Cmd+Shift+H pour find/replace dans tout le repo).

## Ce qui marche déjà

- Navigation entre pages (header sticky, footer)
- Sélecteur de langue qui bascule (mais seul FR a du contenu — EN/NL/DE retournent au FR par fallback)
- Persistance du choix de langue (localStorage)
- Détection automatique de la langue du navigateur au premier chargement
- Indicateur visuel de la page active dans la nav
- Responsive mobile (le menu desktop disparaît, à toi de coder le menu burger plus tard)
- Variables CSS du design system v2 utilisables partout
- Effets glow néon par univers (bar magenta, exp cyan, studios purple, lime spectacle)

## Ce qui reste à faire (sessions futures)

| Tâche | Priorité |
|---|---|
| Déposer les .woff2 dans `fonts/` | Si tu veux le rendu fidèle |
| Intégrer le module de réservation Nico (iframe) sur `/spectacle/`, `/experiences/`, `/bar/` | v2.9.3 |
| Compléter le contenu de `/experiences/`, `/bar/`, `/groupes/`, `/escapade/`, `/infos/` | v2.9.x |
| Connecter `/agenda/` à l'agenda Firebase existant (admin v2.8) | v2.9.4 |
| Ajouter le menu burger mobile | Quand tu veux |
| Traductions EN/NL/DE | Quand le contenu FR est figé |
| Photos réelles (3 univers, spectacle, profils, agenda) | Continu |

## Vérification rapide après déploiement

Une fois pushé, ouvre :
- `https://i-immersion.github.io/lumiia-site/` (home)
- `https://i-immersion.github.io/lumiia-site/spectacle/` (page modèle)
- `https://i-immersion.github.io/lumiia-site/bar/` (stub — vérifie que header/footer chargent)

Si quelque chose casse, ouvre la console JavaScript (F12) — les erreurs y apparaîtront avec un préfixe `[partials]` ou `[i18n]`.

---

*Livré par Claude · session du 25 avril 2026 · v2.9.0*
