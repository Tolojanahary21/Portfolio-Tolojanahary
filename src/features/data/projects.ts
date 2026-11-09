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
  SiJavascript,
  SiLaravel,
  SiVuetify
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
  /** English copy shown by default; keep the French copy above for the language toggle. */
  titleEn?: string;
  descriptionEn?: string;
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
    titleEn: "Classroom Management",
    descriptionEn: "A classroom management system for organizing teachers, rooms, and room schedules.",
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
    titleEn: "Marketplace",
    descriptionEn: "An e-commerce platform with authentication, OTP-verified sign-up, and a NestJS and Prisma backend.",
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
    titleEn: "Internship Management",
    descriptionEn: "A full-stack application for managing interns and tracking placements, built for SPAT with a modern architecture.",
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
      "https://github.com/Tolojanahary21/GestionStagiaire",
    color: "#7c9cff",
  },

  {
    id: 4,
    title: "StudyMind AI",
    description:
      "Plateforme d'apprentissage assistée par intelligence artificielle utilisant une architecture RAG, les embeddings et la recherche vectorielle.",
    descriptionEn: "An AI-powered learning platform using retrieval-augmented generation, embeddings, and vector search.",
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
    title: "Plateforme Web YouthComputing",
    description:
      "Application Web de YouthComputing ",
    titleEn: "YouthComputing Web Platform",
    descriptionEn: "A web platform built for YouthComputing.",
    image: "/projects/Youth.png",
    stack: [
      {
        name: "Laravel",
        icon: SiLaravel,
      },
      {
        name: "VueJS",
        icon: SiVuetify,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
    ],
    github:
      "https://github.com/Tolojanahary21/",
    color: "#65a8ff",
  },

  {
    id: 6,
    title: "CPM Scheduler",
    description:
      "Application web permettant de planifier des tâches avec la méthode du chemin critique (CPM), avec gestion des dépendances et calcul du planning.",
    descriptionEn: "A web app for planning tasks with the Critical Path Method, including dependency management and schedule calculations.",
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
