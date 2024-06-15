const fs = require('fs-extra');
const path = require('path');

const source = path.join(__dirname, '.');
const destination = path.join(__dirname, 'dist');

// Fonction pour copier les fichiers
async function copyFiles() {
  try {
    // Supprimer le dossier dist s'il existe
    await fs.remove(destination);
    // Créer le dossier dist
    await fs.mkdir(destination);
    // Copier tous les fichiers et dossiers sauf dist
    const files = await fs.readdir(source);
    for (const file of files) {
      if (file !== 'dist' && file !== 'node_modules' && file !== 'build.js' && file !== 'package.json' && file !== 'package-lock.json') {
        await fs.copy(path.join(source, file), path.join(destination, file));
      }
    }
    console.log('Les fichiers ont été copiés avec succès!');
  } catch (err) {
    console.error('Erreur lors de la copie des fichiers:', err);
  }
}

copyFiles();
