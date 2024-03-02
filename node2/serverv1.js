const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route pour les pages de détails
app.get('/details/:id', (req, res) => {
  const { id } = req.params;
  // Générer le contenu de la page de détails dynamiquement ou servir un fichier statique modifié
  // Ici, nous choisissons de renvoyer un fichier statique comme exemple simple
  res.sendFile(path.join(__dirname, 'views', 'detail.html'));
  // Note: Pour une page dynamique, vous devriez utiliser un système de template ou générer le HTML en fonction de l'ID
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
});
