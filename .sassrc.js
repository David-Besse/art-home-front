// Configuration SASS
module.exports = {
  // Utiliser la nouvelle API de Sass
  api: 'modern',
  
  // Définir les options de SASS
  sassOptions: {
    // Compression de la sortie en production
    outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
    
    // Inclure les chemins de node_modules pour faciliter les imports
    includePaths: ['node_modules']
  }
}; 