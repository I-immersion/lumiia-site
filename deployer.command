#!/bin/bash
# deployer.command — LUMIIA Site
# Double-cliquer pour déployer sur GitHub Pages

cd "$(dirname "$0")"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  LUMIIA — Déploiement site"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Lire la version actuelle depuis index.html
current_version=$(grep -o 'v[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*' index.html | head -1)
echo ""
echo "  Version actuelle : $current_version"
echo ""

# Calculer la prochaine version suggérée (incrémente le minor)
major=$(echo $current_version | cut -d. -f1 | tr -d 'v')
minor=$(echo $current_version | cut -d. -f2)
next_minor=$((minor + 1))
suggested="v${major}.${next_minor}.0"

read -p "Nouvelle version (Entrée pour '$suggested') : " new_version
new_version=${new_version:-$suggested}

# Mettre à jour la version dans index.html
sed -i '' "s/${current_version}/${new_version}/g" index.html

echo ""
read -p "Message de commit (Entrée pour '${new_version}') : " msg
msg=${msg:-"$new_version"}

git add -A
git commit -m "$msg"
git push origin main

echo ""
echo "✓ Déployé — $new_version"
echo "  → https://i-immersion.github.io/lumiia-site/"
echo ""
read -p "Appuyer sur Entrée pour fermer..."
