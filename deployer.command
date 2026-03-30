#!/bin/bash
# deployer.command — LUMIIA Site
# Double-cliquer pour déployer sur GitHub Pages

cd "$(dirname "$0")"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  LUMIIA — Déploiement site"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

git add -A

echo ""
read -p "Message de commit (Entrée pour 'Update site') : " msg
msg=${msg:-"Update site"}

git commit -m "$msg"
git push origin main

echo ""
echo "✓ Déployé sur GitHub Pages"
echo "  → https://i-immersion.github.io/lumiia-site/"
echo ""
read -p "Appuyer sur Entrée pour fermer..."
