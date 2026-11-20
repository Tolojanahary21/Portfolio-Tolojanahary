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
  SiCss,
  SiHtml5,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiVuedotjs,
} from "react-icons/si";
import { FaCode, FaJava, FaMarkdown } from "react-icons/fa";

export type ProjectTechnology = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  /** English copy shown when the visitor switches language. */
  titleEn?: string;
  descriptionEn?: string;
  /** Replace the image in public/projects and update this path to change the cover. */
  image?: string;
  stack: ProjectTechnology[];
  github: string;
  githubLabel?: { fr: string; en: string };
  featured: boolean;
};

// The first four are the strongest case studies: AI, a professional internship,
// a complete commerce product, and a Java/Spring academic project.
export const projects: Project[] = [
  {
    id: 4,
    title: "StudyMind AI",
    titleEn: "StudyMind AI",
    description:
      "Plateforme d’apprentissage assistée par IA : recherche augmentée, embeddings et interrogation des ressources pédagogiques.",
    descriptionEn:
      "An AI-assisted learning platform combining retrieval-augmented generation, embeddings, and question answering over study materials.",
    image: "/projects/studymind-ai.png",
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Qdrant", icon: SiQdrant },
      { name: "Docker", icon: SiDocker },
    ],
    github: "https://github.com/Tolojanahary21/StudyMind-AI",
    featured: true,
  },
  {
    id: 3,
    title: "Gestion de Stagiaires · SPAT",
    titleEn: "Internship Management · SPAT",
    description:
      "Application full-stack réalisée en stage à la SPAT pour organiser les dossiers et le suivi des stages.",
    descriptionEn:
      "A full-stack application built during an internship at SPAT to organize intern records and placement tracking.",
    image: "/projects/gestion-stagiaires.png",
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Tolojanahary21/GestionStagiaire",
    featured: false,
  },
  {
    id: 2,
    title: "MarketPlace",
    titleEn: "Marketplace",
    description:
      "Plateforme e-commerce avec authentification, inscription vérifiée par OTP et API NestJS structurée avec Prisma.",
    descriptionEn:
      "An e-commerce platform with authentication, OTP-verified sign-up, and a NestJS API structured with Prisma.",
    image: "/projects/marketplace.png",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "NestJS", icon: SiNestjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    github: "https://github.com/Tolojanahary21/MarketPlace",
    featured: true,
  },
  {
    id: 1,
    title: "Gestion de salle de classe",
    titleEn: "Classroom Management",
    description:
      "Outil de gestion des salles, des enseignants et de l’occupation des espaces, construit avec Spring Boot et PostgreSQL.",
    descriptionEn:
      "A system for managing classrooms, teachers, and room schedules, built with Spring Boot and PostgreSQL.",
    image: "/projects/gestion-salle-classe.png",
    stack: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Data JPA", icon: SiSpringboot },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "JSP", icon: FaJava },
      { name: "Swagger", icon: SiSwagger },
    ],
    github: "https://github.com/Tolojanahary21/Gestion_Salle-de-Classe",
    featured: false,
  },
  {
    id: 5,
    title: "Plateforme Web YouthComputing",
    titleEn: "YouthComputing Web Platform",
    description:
      "Plateforme web conçue pendant mon stage chez YouthComputing avec Laravel, Vue.js et Inertia.js.",
    descriptionEn:
      "A web platform built during my internship at YouthComputing with Laravel, Vue.js, and Inertia.js.",
    image: "/projects/Youth.png",
    stack: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MySQL", icon: SiMysql },
    ],
    // The exact public repository URL could not be verified. This opens the
    // owner's repository list instead of guessing a repository name.
    github: "https://github.com/Tolojanahary21?tab=repositories",
    githubLabel: { fr: "Parcourir GitHub", en: "Browse GitHub" },
    featured: true,
  },
  {
    id: 6,
    title: "CPM Scheduler",
    titleEn: "CPM Scheduler",
    description:
      "Planificateur de tâches fondé sur la méthode du chemin critique, avec gestion des dépendances et calcul du calendrier.",
    descriptionEn:
      "A task planner based on the Critical Path Method, with dependency management and schedule calculations.",
    image: "/projects/cpm.png",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "JavaScript", icon: SiJavascript },
    ],
    github: "https://github.com/Tolojanahary21/CriticalPathMethod",
    featured: false,
  },
  {
    id: 7,
    title: "CampusPulse",
    titleEn: "CampusPulse",
    description: "Plateforme universitaire multi-établissements qui centralise les informations académiques, annonces, événements et ressources pédagogiques.",
    descriptionEn: "A multi-institutional university platform that centralizes academic information, announcements, events, and learning resources.",
    image: "/projects/CampusPulse.png",
    stack: [
      { name: "Python", icon: SiPython }, { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
      { name: "PL/pgSQL", icon: SiPostgresql }, { name: "PowerShell", icon: FaCode },
      { name: "Dockerfile", icon: SiDocker }, { name: "Mako", icon: FaCode },
    ],
    github: "https://github.com/Tolojanahary21/CampusPulse",
    featured: true,
  },
  // {
  //   id: 8,
  //   title: "Employee",
  //   titleEn: "Employee",
  //   description: "Application de gestion des salaires des employés, développée en Java et Kotlin.",
  //   descriptionEn: "An employee salary management application built with Java and Kotlin.",
  //   stack: [{ name: "Java", icon: FaJava }, { name: "Kotlin", icon: SiKotlin }],
  //   github: "https://github.com/Tolojanahary21/Employee",
  //   featured: false,
  // },
  {
    id: 9,
    title: "Gestion Personnelle",
    titleEn: "Personal Management",
    description: "Projet de gestion personnelle développé avec TypeScript, Python, JavaScript et CSS.",
    descriptionEn: "A personal management project built with TypeScript, Python, JavaScript, and CSS.",
    image : "/projects/Personelle.png",
    stack: [
      { name: "TypeScript", icon: SiTypescript }, { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
    ],
    github: "https://github.com/Tolojanahary21/Gestion_Personelle",
    featured: false,
  },
  {
    id: 10,
    title: "IseraNet",
    titleEn: "IseraNet",
    description: "Plateforme de partage de comptes premium, réalisée avec JavaScript, HTML et CSS.",
    descriptionEn: "A premium account sharing platform built with JavaScript, HTML, and CSS.",
    image: '/projects/IseraNet.png',
    stack: [
      { name: "JavaScript", icon: SiJavascript }, { name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: SiCss },
    ],
    github: "https://github.com/Tolojanahary21/IseraNet",
    featured: false,
  },
  {
    id: 11,
    title: "Portfolio personnel",
    titleEn: "Personal portfolio",
    description: "Portfolio développeur présentant mon parcours, mes compétences et mes projets. Développé avec Next.js et TypeScript.",
    descriptionEn: "A developer portfolio showcasing my experience, skills, and projects, built with Next.js and TypeScript.",
    image: '/projects/Portfolio.png',
    stack: [
      { name: "Next.js", icon: SiNextdotjs }, { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
    ],
    github: "https://github.com/Tolojanahary21/Portfolio-Tolojanahary",
    featured: false,
  },
  {
    id: 12,
    title: "Random Groups",
    titleEn: "Random Groups",
    description: "Application web qui répartit des étudiants en groupes aléatoires et équilibrés, avec des animations 3D.",
    descriptionEn: "A web app that splits students into balanced random groups, with immersive 3D animations.",
    image : '/projects/RandomsGroup.png',
    stack: [
      { name: "Next.js", icon: SiNextdotjs }, { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
    ],
    github: "https://github.com/Tolojanahary21/random-groups",
    featured: false,
  },
  {
    id: 14,
    title: "Resize Image",
    titleEn: "Resize Image",
    description: "Projet web de redimensionnement d’images développé avec Next.js, TypeScript, JavaScript et CSS.",
    descriptionEn: "A web image resizing project built with Next.js, TypeScript, JavaScript, and CSS.",
    image: '/projects/resizeImage.png',
    stack: [
      { name: "Next.js", icon: SiNextdotjs }, { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
    ],
    github: "https://github.com/Tolojanahary21/resize-image",
    featured: false,
  },
  // {
  //   id: 15,
  //   title: "TaskFlow",
  //   titleEn: "TaskFlow",
  //   description: "Projet de gestion de tâches avec une base Python et une interface web TypeScript.",
  //   descriptionEn: "A task management project with a Python backend and a TypeScript web interface.",
  //   stack: [
  //     { name: "Python", icon: SiPython }, { name: "TypeScript", icon: SiTypescript },
  //     { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
  //   ],
  //   github: "https://github.com/Tolojanahary21/TaskFlow",
  //   featured: false,
  // },
  // {
  //   id: 16,
  //   title: "Profil GitHub",
  //   titleEn: "GitHub Profile",
  //   description: "Dépôt de profil qui présente mon parcours de développeur et les technologies que j’explore.",
  //   descriptionEn: "A profile repository introducing my developer background and the technologies I explore.",
  //   stack: [{ name: "Markdown", icon: FaMarkdown }],
  //   github: "https://github.com/Tolojanahary21/Tolojanahary21",
  //   featured: false,
  // },
  // {
  //   id: 17,
  //   title: "Transfert de fichiers",
  //   titleEn: "File Transfer",
  //   description: "Plateforme de partage de fichiers en pair-à-pair avec découverte des appareils et transfert sécurisé.",
  //   descriptionEn: "A peer-to-peer file sharing platform with device discovery and secure file transfers.",
  //   stack: [
  //     { name: "Python", icon: SiPython }, { name: "TypeScript", icon: SiTypescript },
  //     { name: "JavaScript", icon: SiJavascript }, { name: "CSS", icon: SiCss },
  //     { name: "HTML", icon: SiHtml5 }, { name: "Mako", icon: FaCode },
  //   ],
  //   github: "https://github.com/Tolojanahary21/Transfert-de-fichiers",
  //   featured: false,
  // },
  // {
  //   id: 18,
  //   title: "University Orientation",
  //   titleEn: "University Orientation",
  //   description: "Projet d’orientation universitaire réalisé en Python avec des modèles de templates Mako.",
  //   descriptionEn: "A university orientation project built with Python and Mako templates.",
  //   stack: [{ name: "Python", icon: SiPython }, { name: "Mako", icon: FaCode }],
  //   github: "https://github.com/Tolojanahary21/university-orientation",
  //   featured: false,
  // },
];
