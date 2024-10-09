import instagrumCap from '../images/instagrum-capture.png';
import reacttvCap from '../images/react-tv-capture.png';
import planningCap from '../images/planning-series-capture.png';
import bookiCap from '../images/booki-capture.png';
import ohmyfoodCap from '../images/ohmyfood-capture.png';
import piiquanteCap from '../images/piiquante-logo.png';
import groupoCap from '../images/groupomania-logo.png';

export const featuredProjects = [
  {
    title: "Instagrum",
    description:
      "Clone d’une page profil Instagram développé avec React. Mise en œuvre d'une UI responsive qui respecte l'esthétique du réseau social.",
    image: instagrumCap,
    imageAlt: "Capture d'écran du projet Instagrum",
    technos: ["react", "styled components"],
    githubUrl: "https://github.com/nicomil59/instagrum",
    demoUrl: "https://instagrum.vercel.app/",
    pageUrl: "projects/instagrum",
  },
  {
    title: "React TV",
    description:
      "Application permettant de rechercher des séries TV dans une base de données externe via une API et de sauvegarder ses titres favoris.",
    image: reacttvCap,
    imageAlt: "Capture d'écran du projet React TV",
    technos: ["react", "sass", "axios"],
    githubUrl: "https://github.com/nicomil59/react-tv",
    demoUrl: "https://nicomil59.github.io/react-tv",
    pageUrl: "projects/react-tv",
  },
  {
    title: "Planning Séries",
    description:
      "Calendrier des sorties des séries TV sur les chaînes et plateformes françaises, conçu avec le framework Astro JS.",
    image: planningCap,
    imageAlt: "Capture d'écran du projet Planning Séries",
    technos: ["astro", "tailwind css", "day.js"],
    githubUrl: "https://github.com/nicomil59/planning-astro",
    demoUrl: "https://planningseries.fr/",
    pageUrl: "projects/planningseries",
  }
];

export const otherProjects = [
  {
    title: "Booki",
    description:
      "Intégration d'une maquette d'un outil de planification de vacances. Optimisé pour tous les formats d'écran.",
    image: bookiCap,
    imageAlt: "capture d'écran du projet Booki",
    technos: ["html", "css"],
    githubUrl: "https://github.com/nicomil59/NicolasMilhem_2_15112021",
    demoUrl: "#",
    pageUrl: "#"
  },
  {
    title: "Oh My Food",
    description:
      "Intégration des pages d'un site de restaurant avec des animations CSS réalisées avec le préprocesseur Sass.",
    image: ohmyfoodCap,
    imageAlt: "capture d'écran du projet Oh My Food",
    technos: ["html", "css", "sass"],
    githubUrl: "https://github.com/nicomil59/NicolasMilhem_3_03122021",
    demoUrl: "https://nicomil59.github.io/NicolasMilhem_3_03122021/",
    pageUrl: "#"
  },
  {
    title: "Piiquante",
    description:
      "API pour une plateforme de partage de sauces. Authentification, CRUD sur les sauces, système de likes.",
    image: piiquanteCap,
    imageAlt: "capture d'écran du projet Piiquante",
    technos: ["node.js", "express", "mongodb"],
    githubUrl: "https://github.com/nicomil59/NicolasMilhem_6_23022022",
    demoUrl: "#",
    pageUrl: "#"
  },
  {
    title: "Groupomania",
    description:
      "Réseau social d’une entreprise avec gestion des utilisateurs, des publications et des interactions (commentaires, likes).",
    image: groupoCap,
    imageAlt: "capture d'écran du projet Groupomania",
    technos: ["vue", "bootstrap", "express", "mysql"],
    githubUrl: "https://github.com/nicomil59/groupomania",
    demoUrl: "#",
    pageUrl: "#"
  },
]
