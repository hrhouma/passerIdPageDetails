const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route pour les pages de détails
app.get('/details/:id', (req, res) => {
  const { id } = req.params;
  
  // Lire le fichier HTML
  const filePath = path.join(__dirname, 'views', 'detail.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier', err);
      res.status(500).send('Erreur interne du serveur');
      return;
    }
    // Remplacer [ID] par l'ID réel
    const updatedContent = data.replace('[ID]', id);
    
    // Envoyer le contenu modifié
    res.send(updatedContent);
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
});
