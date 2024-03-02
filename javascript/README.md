# Guide d'Utilisation des Pages HTML avec Paramètres d'URL

Ce guide explique comment utiliser et naviguer entre deux pages HTML (`index.html` et `details.html`) qui communiquent via des paramètres d'URL. La page d'accueil (`index.html`) permet à l'utilisateur de sélectionner un item, tandis que la page de détails (`details.html`) affiche des informations spécifiques à l'item sélectionné.

## index.html - Page d'Accueil

La page d'accueil liste plusieurs items sur lesquels l'utilisateur peut cliquer. Chaque clic sur un item redirige l'utilisateur vers la page de détails, en passant l'ID de l'item sélectionné comme paramètre d'URL.

### Fonctionnalités :

- **Liste d'Items** : Affiche une liste d'items (Item 1, Item 2, Item 3) que l'utilisateur peut sélectionner.
- **Redirection** : En cliquant sur un item, l'utilisateur est redirigé vers `details.html`, avec l'ID de l'item passé comme paramètre d'URL (`?id=x`).

### Code JavaScript :

Le script définit une fonction `redirectToDetailsPage(itemId)` qui construit l'URL de redirection et y inclut l'ID de l'item comme paramètre.

## details.html - Page de Détails

La page de détails affiche des informations sur l'item sélectionné en récupérant l'ID de l'item depuis l'URL.

### Fonctionnalités :

- **Affichage des Détails** : Montre les détails de l'item sélectionné, en utilisant l'ID passé dans l'URL pour charger les informations spécifiques.

### Code JavaScript :

Le script comprend deux fonctions principales :

- `getQueryParameter(param)` : Extrait et retourne la valeur d'un paramètre spécifique depuis l'URL de la page.
- `displayDetails()` : Utilise `getQueryParameter('id')` pour récupérer l'ID de l'item depuis l'URL, et affiche les détails de cet item dans la page.

### Exécution :

- Ouvrez `index.html` dans un navigateur.
- Cliquez sur l'un des items listés pour être redirigé vers `details.html`.
- Observez que `details.html` affiche les détails de l'item sélectionné, basés sur l'ID passé dans l'URL.

## Conclusion

Ces deux pages HTML démontrent une manière simple de passer des données entre pages à l'aide des paramètres d'URL. Cette méthode peut être particulièrement utile pour des sites statiques ou des applications ne nécessitant pas de back-end complexe pour le transfert de données entre pages.
