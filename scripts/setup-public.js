const fs = require('fs');
const path = require('path');

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source not found: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  console.log(`Copied: ${src} -> ${dest}`);
}

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

fs.mkdirSync(publicDir, { recursive: true });

// Copy bloques
copyDirSync(path.join(root, 'bloques'), path.join(publicDir, 'bloques'));

// Copy examenes
copyDirSync(path.join(root, 'examenes'), path.join(publicDir, 'examenes'));

// Copy assets
copyDirSync(path.join(root, 'assets'), path.join(publicDir, 'assets'));

// Copy css
copyDirSync(path.join(root, 'css'), path.join(publicDir, 'css'));

// Copy old js (some files reference it for preguntas.js etc)
copyDirSync(path.join(root, 'js'), path.join(publicDir, 'js'));

console.log('Public directory setup complete!');
