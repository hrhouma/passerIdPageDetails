## Guide Pas à Pas pour Créer l'Application

### Étape 1 : Initialiser un Nouveau Projet Node.js

1. Ouvrez un terminal ou une invite de commande.
2. Créez un nouveau dossier pour votre projet et naviguez-y :
   ```
   mkdir monAppExpress
   cd monAppExpress
   ```
3. Initialisez un nouveau projet Node.js :
   ```
   npm init -y
   ```
   Cette commande crée un fichier `package.json` avec les paramètres par défaut.

### Étape 2 : Installer Express

Dans le terminal, installez Express.js en exécutant :

```
npm install express
```

Cela ajoutera Express comme dépendance de votre projet.

### Étape 3 : Créer le Serveur Express

1. Créez un fichier `server.js` à la racine de votre projet.
2. Ouvrez `server.js` dans votre éditeur de texte ou IDE préféré.
3. Ajoutez le code suivant pour configurer votre serveur :

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   // Servir les fichiers statiques du dossier 'public'
   app.use(express.static('public'));

   // Route pour la page de détails avec :id comme paramètre de route
   app.get('/details/:id', (req, res) => {
     const { id } = req.params;
     res.send(`Page de détails pour l'ID: ${id}. <a href="/">Retour à l'accueil</a>`);
   });

   // Démarrage du serveur
   app.listen(port, () => {
     console.log(`Serveur écoutant sur http://localhost:${port}`);
   });
   ```

### Étape 4 : Créer le Dossier Public et la Page d'Accueil

1. Créez un dossier nommé `public` dans la racine de votre projet.
2. À l'intérieur du dossier `public`, créez un fichier `index.html`.
3. Ouvrez `index.html` et ajoutez le contenu HTML suivant :

   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Page d'Accueil</title>
   </head>
   <body>
       <h1>Bienvenue sur la Page d'Accueil</h1>
       <div>
           <button onclick="window.location.href='/details/1'">Détails pour ID 1</button>
           <button onclick="window.location.href='/details/2'">Détails pour ID 2</button>
           <button onclick="window.location.href='/details/3'">Détails pour ID 3</button>
       </div>
   </body>
   </html>
   ```

### Étape 5 : Démarrer le Serveur

1. Revenez à votre terminal.
2. Exécutez la commande suivante pour démarrer le serveur :
   ```
   node server.js
   ```
3. Ouvrez un navigateur web et allez à `http://localhost:3000`. Vous devriez voir la page d'accueil de votre application.

### Étape 6 : Tester les Routes de Détails

- Cliquez sur l'un des boutons de la page d'accueil. Cela vous amènera à une page affichant le message "Page de détails pour l'ID: x", où `x` est le numéro du bouton que vous avez cliqué.

## Conclusion

<<<<<<< HEAD
Vous avez maintenant une application web fonctionnelle avec Node.js et Express, capable de servir une page HTML statique et de gérer des routes dynamiques. Ce guide vous a montré comment structurer votre projet, configurer un serveur Express, et implémenter le routage basique.
=======
Vous avez maintenant une application web fonctionnelle avec Node.js et Express, capable de servir une page HTML statique et de gérer des routes dynamiques. Ce guide vous a montré comment structurer votre projet, configurer un serveur Express, et implémenter le routage basique.
>>>>>>> 50a0699efb960482db674227e43f061f125dea65
