const express = require('express');
const app = express();
const port = 3000;

// Servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

// Route pour la page de détails avec :id comme paramètre de route
app.get('/details/:id', (req, res) => {
  const { id } = req.params; // Extraction de l'id du paramètre de route
  res.send(`Page de détails pour l'ID: ${id}. <a href="/">Retour à l'accueil</a>`);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
});
