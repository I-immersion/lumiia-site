#!/bin/bash
# deployer.command — LUMIIA Site
# Double-cliquer pour déployer sur GitHub Pages

cd "$(dirname "$0")"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  LUMIIA — Déploiement site"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Lire la version actuelle depuis index.html
current_version=$(grep -o 'v[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*' index.html | head -1)

# Calculer la prochaine version (incrémente le minor)
major=$(echo $current_version | cut -d. -f1 | tr -d 'v')
minor=$(echo $current_version | cut -d. -f2)
next_minor=$((minor + 1))
next_version="v${major}.${next_minor}.0"

# Mettre à jour la version dans index.html
sed -i '' "s/${current_version}/${next_version}/g" index.html

echo ""
echo "  ${current_version} → ${next_version}"
echo ""
read -p "Message de commit (Entrée pour '${next_version}') : " msg
msg=${msg:-"$next_version"}

git add -A
git commit -m "$msg"
git push origin main

echo ""
echo "✓ Déployé — ${next_version}"
echo "  → https://i-immersion.github.io/lumiia-site/"
echo ""
read -p "Appuyer sur Entrée pour fermer..."
