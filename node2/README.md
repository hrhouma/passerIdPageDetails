### Préparation de l'Environnement de Développement

1. **Installer Node.js** : Assurez-vous que Node.js est installé sur votre système. Vous pouvez télécharger et installer Node.js depuis [le site officiel](https://nodejs.org/).

2. **Initialiser un Nouveau Projet Node.js** : Ouvrez un terminal, créez un nouveau dossier pour votre projet, et initialisez un nouveau projet Node.js.

   ```bash
   mkdir monProjetNode
   cd monProjetNode
   npm init -y
   ```

3. **Installer Express** : Dans le même terminal, installez Express, qui est le framework que nous utiliserons pour créer notre serveur.

   ```bash
   npm install express
   ```

### Création de Votre Application

1. **Création du Dossier `views`** : À la racine de votre projet, créez un dossier `views`. Ce dossier contiendra vos fichiers HTML.

   ```bash
   mkdir views
   ```

2. **Ajouter des Pages HTML** : Dans le dossier `views`, créez deux fichiers HTML : `index.html` pour la page d'accueil et `detail.html` pour la page de détails. Utilisez le contenu HTML fourni précédemment pour chaque fichier.

3. **Créer `serverv1.js`** : À la racine de votre projet, créez un fichier `serverv1.js`. Ce sera la première version de votre serveur. Copiez le premier exemple de code serveur dans ce fichier.

4. **Créer `serverv2.js`** : Créez un fichier `serverv2.js` à côté de `serverv1.js`. Ce fichier contiendra la deuxième version de votre serveur, qui inclut la logique pour modifier dynamiquement le contenu de la page de détails. Copiez le second exemple de code serveur dans ce fichier.

### Exécuter Votre Application

1. **Lancer le Serveur (Version 1)** : Pour démarrer la première version de votre serveur, ouvrez un terminal à la racine de votre projet et exécutez :

   ```bash
   node serverv1.js
   ```

   Accédez à `http://localhost:3000` dans votre navigateur pour voir votre page d'accueil.

2. **Passer à la Version 2 du Serveur** : Pour voir comment votre application peut servir une page de détails dynamique, arrêtez le serveur actuel (CTRL+C dans le terminal) et lancez la deuxième version du serveur :

   ```bash
   node serverv2.js
   ```

   Rafraîchissez votre navigateur ou accédez à nouveau à `http://localhost:3000` et cliquez sur les liens pour voir les ID dynamiquement mis à jour dans la page de détails.

### Conclusion et Prochaines Étapes

<<<<<<< HEAD
Vous avez maintenant créé un projet Express simple qui sert des pages HTML statiques avec deux versions différentes du serveur pour montrer comment le contenu dynamique peut être généré et servi. Cette base vous permet d'explorer plus avant le développement web avec Node.js et Express, et de commencer à intégrer d'autres fonctionnalités telles que le rendu côté serveur avec des moteurs de template ou l'interaction avec une base de données pour des applications web plus complexes.
=======
Vous avez maintenant créé un projet Express simple qui sert des pages HTML statiques avec deux versions différentes du serveur pour montrer comment le contenu dynamique peut être généré et servi. Cette base vous permet d'explorer plus avant le développement web avec Node.js et Express, et de commencer à intégrer d'autres fonctionnalités telles que le rendu côté serveur avec des moteurs de template ou l'interaction avec une base de données pour des applications web plus complexes.
>>>>>>> 50a0699efb960482db674227e43f061f125dea65
