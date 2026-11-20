import type { ComponentType } from "react";
import {
  SiDjango,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { Database, Layers3, PanelsTopLeft, Workflow } from "lucide-react";

type TechIcon = ComponentType<{ className?: string; size?: number }>;

export type Technology = {
  name: string;
  icon: TechIcon;
};

export type TechCategory = {
  id: "frontend" | "backend" | "database" | "tools";
  number: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  icon: TechIcon;
  layout: "feature" | "wide" | "compact";
  technologies: Technology[];
};

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: { en: "Frontend Development", fr: "Développement frontend" },
    description: {
      en: "Interfaces polished down to the details.",
      fr: "Des interfaces soignées jusque dans les détails.",
    },
    icon: PanelsTopLeft,
    layout: "feature",
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: DiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: { en: "Backend Development", fr: "Développement backend" },
    description: {
      en: "Reliable services and clear APIs.",
      fr: "Des services fiables et des API claires.",
    },
    icon: Workflow,
    layout: "wide",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Laravel", icon: SiLaravel },
      { name: "NestJS", icon: SiNestjs },
      { name: "Django REST Framework", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    id: "database",
    number: "03",
    title: { en: "Database & ORM", fr: "Bases de données & ORM" },
    description: {
      en: "Data models built to stay maintainable.",
      fr: "Des modèles de données faciles à faire évoluer.",
    },
    icon: Database,
    layout: "compact",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
    ],
  },
  {
    id: "tools",
    number: "04",
    title: { en: "Tools & Workflow", fr: "Outils & workflow" },
    description: {
      en: "The everyday tools behind the work.",
      fr: "Les outils de mon quotidien de développeur.",
    },
    icon: Layers3,
    layout: "compact",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
