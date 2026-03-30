#!/bin/bash
# deployer.command — LUMIIA Site
# Double-cliquer pour déployer sur GitHub Pages

cd "$(dirname "$0")"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  LUMIIA — Déploiement site"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Lire la version depuis index.html
current_version=$(grep -o 'v[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*' index.html | head -1)
echo ""
echo "  Version : $current_version"
echo ""

git add -A
git commit -m "$current_version"
git push origin main

echo ""
echo "✓ Déployé — $current_version"
echo "  → https://i-immersion.github.io/lumiia-site/"
echo ""
read -p "Appuyer sur Entrée pour fermer..."
