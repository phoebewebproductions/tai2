#!/bin/bash
# Move static content to public directory for Vite to serve
cd /vercel/share/v0-project

mkdir -p public

# Copy bloques (estructura.json, preguntas.js, explanation HTML files)
if [ -d "bloques" ]; then
  cp -r bloques public/
  echo "Copied bloques to public/"
fi

# Copy examenes
if [ -d "examenes" ]; then
  cp -r examenes public/
  echo "Copied examenes to public/"
fi

# Copy assets
if [ -d "assets" ]; then
  cp -r assets public/
  echo "Copied assets to public/"
fi

echo "Done setting up public directory"
