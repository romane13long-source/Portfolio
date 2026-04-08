# Portfolio — Romane Long

Site vitrine personnel regroupant mes projets professionnels et scolaires.

## Aperçu

- Design sombre avec accents violet/rose
- Responsive (mobile, tablette, desktop)
- Animations au scroll
- Sections : Hero · À propos · Projets · Contact

## Stack

- HTML5
- CSS3 (variables, grid, flexbox, animations)
- JavaScript vanilla

## Structure

```
Portfolio/
├── index.html   # Structure de la page
├── style.css    # Styles et animations
├── script.js    # Interactions et rendu des projets
└── README.md
```

## Ajouter un projet

Dans `script.js`, décommente le bloc `projects` et ajoute un objet :

```js
{
  icon: '💻',
  tag: 'École',          // ou 'Pro'
  title: 'Nom du projet',
  description: 'Courte description.',
  github: 'https://github.com/...',
  demo: 'https://...',   // optionnel
}
```

## Lien

[romane13long-source.github.io/Portfolio](https://romane13long-source.github.io/Portfolio)
