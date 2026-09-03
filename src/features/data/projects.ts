import {
  SiSpringboot,
  SiPostgresql,
  SiSwagger,
  SiReact,
  SiVite,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiQdrant,
  SiDocker,
  SiFlutter,
  SiDart,
  SiJavascript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export type ProjectTechnology = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  stack: ProjectTechnology[];
  github: string;
  color: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion_Salle-de-Classe",
    description:
      "Système de gestion des salles de classe permettant de gérer les professeurs, les salles et leurs occupations.",
    image:"/projects/gestion-salle-classe.png",
    stack: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Spring Data JPA",
        icon: SiSpringboot,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "JSP",
        icon: FaJava,
      },
      {
        name: "Swagger",
        icon: SiSwagger,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/Gestion_Salle-de-Classe",
    color: "#5ee6c9",
  },

  {
    id: 2,
    title: "MarketPlace",
    description:
      "Plateforme e-commerce avec authentification, inscription avec vérification OTP et communication avec un backend NestJS et Prisma.",
    image: "/projects/marketplace.png",
    stack: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "NestJS",
        icon: SiNestjs,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/MarketPlace",
    color: "#ffb454",
  },

  {
    id: 3,
    title: "Gestion de Stagiaires",
    description:
      "Application full-stack dédiée à la gestion des stagiaires et au suivi des stages, développée avec une architecture moderne pour la SPAT.",
    image: "/projects/gestion-stagiaires.png",
    stack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/Gestion-de-Stagiaire",
    color: "#7c9cff",
  },

  {
    id: 4,
    title: "StudyMind AI",
    description:
      "Plateforme d'apprentissage assistée par intelligence artificielle utilisant une architecture RAG, les embeddings et la recherche vectorielle.",
    image: "/projects/studymind-ai.png",
    stack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Qdrant",
        icon: SiQdrant,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/StudyMind-AI",
    color: "#b48cff",
  },

  {
    id: 5,
    title: "EasyDevis",
    description:
      "Application mobile permettant de créer et gérer des devis de manière simple et structurée.",
    image: "/projects/easydevis.png",
    stack: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        icon: SiDart,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/EasyDevis",
    color: "#65a8ff",
  },

  {
    id: 6,
    title: "CPM Scheduler",
    description:
      "Application web permettant de planifier des tâches avec la méthode du chemin critique (CPM), avec gestion des dépendances et calcul du planning.",
    image: "/projects/cpm.png",
    stack: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/CriticalPathMethod",
    color: "#ff7895",
  },
];