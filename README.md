# Introduction aux APIs

Ce projet est une introduction aux APIs avec un exemple simple de manipulation du DOM et de styles CSS dynamiques.
![image](https://github.com/user-attachments/assets/40e50d8b-2723-4000-af51-c7417f438e96)




## Structure du projet

Le projet est structuré comme suit :
```
│   README.md
│
└───exercice d'introduction aux APIs
        apiLoader.js
        ApiPage.html
        exercice d'introduction API.html
        script.js
        shady.js
        style.css
```

- **exercice d'introduction API.html**: Le fichier HTML principal qui contient la structure de la page d'accueil.
- **script.js**: Le fichier JavaScript qui contient la logique pour inverser les couleurs du gradient.
- **style.css**: Le fichier CSS qui contient les styles pour les animations de gradient.
- **shady.js**: Le fichier JavaScript qui contient le mécanisme de détection d'informations des données de navigation.
- **apiLoader.js**: Le fichier JavaScript qui contient les fonctions JS pour chrager le contenu de trois APIs.
- **ApiPage**: Le fichier HTML principal qui contient la structure de la page d'affichage des APIs.

## Fonctionnalités

- **Inversion des couleurs du gradient**: Lorsque vous cliquez sur le bouton, les couleurs du gradient de fond et du bouton sont inversées.
- **Détection des données de navigation**: Lorsque vous cliquez sur le bouton "?" dans la page d'accueil, des tableaux affichent les informations de navigation disponibles (User Agent, Langue, Adresse IP, etc.).
- **Chargement des APIs**: Lorsque vous cliquez sur le bouton "API PlayGround" dans la page d'accueil, vous êtes redirigé vers une page qui affiche le contenu de trois APIs différentes (API de l'heure, API de la météo et API de la citation du jour).

## Utilisation

1. Ouvrez l'URL (GitHub Page) `https://aent0n.github.io/EFREI-Notions_d_APIs/exercice%20d'introduction%20aux%20APIs/exercice%20d'introduction%20API.html` dans un navigateur web, ou cliquez [ici](https://aent0n.github.io/EFREI-Notions_d_APIs/exercice%20d'introduction%20aux%20APIs/exercice%20d'introduction%20API.html).
2. Cliquez sur le bouton "Cliquez ici pour inverser les couleurs !" pour voir l'effet d'inversion des couleurs.
3. Cliquez sur le bouton "?" pour afficher vos informations de navigation Internet.
4. Cliquez sur le bouton "API PlayGround" pour accéder à la page d'affichage des APIs.
        └───API PlayGround
                Cliquez sur le bouton "Random Jokes API" pour afficher une blague aléatoire.
                Cliquez sur le bouton "The Dog API" pour afficher une image aléatoire de chien.
                Cliquez sur le bouton "The Cat API" pour afficher une image aléatoire de chat.

## Détails techniques

### HTML

Le fichier [exercice d'introduction API.html](exercice%20d'introduction%20aux%20APIs/exercice%20d'introduction%20API.html) contient la structure de la page et inclut les fichiers CSS et JavaScript nécessaires.
Le fichier [ApiPage.html](exercice%20d'introduction%20aux%20APIs/ApiPage.html) contient la structure de la page d'affichage des APIs.

### CSS

Le fichier [style.css](exercice%20d'introduction%20aux%20APIs/style.css) contient les animations de gradient pour le fond de la page et le bouton.

### JavaScript

Le fichier [script.js](exercice%20d'introduction%20aux%20APIs/script.js) contient la logique pour inverser les couleurs du gradient lorsque le bouton est cliqué. <br>
Le fichier [shady.js](exercice%20d'introduction%20aux%20APIs/shady.js) contient le code récupérant et générant des tableaux avec les informations de navigation disponibles.
Le fichier [apiLoader.js](exercice%20d'introduction%20aux%20APIs/apiLoader.js) contient les fonctions JS pour chrager le contenu de trois APIs.

## Auteur
Ce repo a été réalisé dans le cadre du cours d'introduction aux APIs.
