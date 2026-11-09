 
"use client";

import {
  SiHtml5,
 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiThreedotjs,
  SiFlutter,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiPhp,
  SiSpringboot,
  SiLaravel,
  SiFastapi,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiSqlalchemy,
  SiGit,
  SiGithub,
 
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiLinux,
 
  SiUbuntu,
  SiPostman,
  SiSwagger,
 
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaWindows, FaJava } from "react-icons/fa";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Server,
  Database,
  Network,
} from "lucide-react";
import Image from "next/image";

import { useLanguage } from "@/src/components/layout/LanguageContext";

/* =========================================================
   STACK
========================================================= */

const categories = [
  {
    title: "Front-end",
    description: "Interfaces web modernes et expériences interactives.",
    color: "#5ee6c9",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: DiCss3,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "Vue.js",
        icon: SiVuedotjs,
        color: "#4FC08D",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
      {
        name: "Three.js",
        icon: SiThreedotjs,
        color: "#FFFFFF",
      },
    ],
  },
  {
    title: "Back-end",
    description: "APIs, services et logique métier.",
    color: "#ffb454",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#ED8B00",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "#44B78B",
      },
      {
        name: "REST API",
        icon: Network,
        color: "#61DAFB",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#5A67D8",
      },
    ],
  },

  {
    title: "Bases de données",
    description: "Stockage, manipulation et accès aux données.",
    color: "#7aa2ff",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "SQLAlchemy",
        icon: SiSqlalchemy,
        color: "#D71F00",
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
        color: "#5A67D8",
      },
    ],
  },
    {
    title: "Mobile",
    description: "Applications mobiles multiplateformes.",
    color: "#54C5F8",
    skills: [
      {
        name: "React Native",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "#54C5F8",
      },
    ],
  },

  {
    title: "Outils",
    description: "Les outils qui structurent mon workflow.",
    color: "#bb9af7",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        color: "#FE2857",
      },
      {
        name: "Eclipse",
        icon: SiEclipseide,
        color: "#2C2255",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "#3DDC84",
      },
      {
        name: "Linux",
        icon: SiLinux,
        color: "#FCC624",
      },
      {
        name: "Windows",
        icon: FaWindows,
        color: "#0078D4",
      },
      {
        name: "Ubuntu",
        icon: SiUbuntu,
        color: "#E95420",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Swagger",
        icon: SiSwagger,
        color: "#85EA2D",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Skills() {
  const { language } = useLanguage();
  const fr = language === "fr";
  const serviceGroups = [
    { title: fr ? "Développement web" : "Web design & development", description: fr ? "Des interfaces accessibles, rapides et intuitives, du prototype au produit." : "Accessible, fast interfaces, from early structure to a polished product.", icon: Code2, skills: categories[0].skills, preview: "/projects/marketplace.png" },
    { title: fr ? "Backend & API" : "Backend & APIs", description: fr ? "Des services fiables, des API claires et une logique métier maintenable." : "Reliable services, clear APIs, and maintainable business logic.", icon: Server, skills: categories[1].skills, preview: "/projects/gestion-stagiaires.png" },
    { title: fr ? "Applications mobiles" : "Mobile applications", description: fr ? "Des expériences mobiles multiplateformes avec React Native et Flutter." : "Cross-platform mobile experiences with React Native and Flutter.", icon: Smartphone, skills: categories[3].skills, preview: "/projects/cpm.png" },
    { title: fr ? "Données & outils" : "Data & tooling", description: fr ? "Des bases de données et outils adaptés aux besoins du produit." : "Data platforms and tools chosen for the needs of each product.", icon: Database, skills: [...categories[2].skills, ...categories[4].skills], preview: "/projects/studymind-ai.png" },
  ];

  return <section id="competences" className="content-section services-section">
    <div className="services-heading">
      <div><p className="section-overline">/ {fr ? "CE QUE JE FAIS" : "WHAT I DO"}</p><h2>{fr ? <>Du concept<br />au <span>produit.</span></> : <>From idea<br />to <span>product.</span></>}</h2></div>
      <p className="section-description">{fr ? "Je réunis design d’interface et ingénierie logicielle pour créer des expériences numériques complètes." : "I bring interface design and software engineering together to create complete digital experiences."}</p>
    </div>
    <div className="service-list">
      {serviceGroups.map(({ title, description, icon: Icon, skills, preview }, index) => <details className="service-row" key={title} style={{ animationDelay: `${index * 90}ms` }}>
        <summary className="service-summary"><span className="service-number">0{index + 1}</span><span className="service-main"><span className="service-title"><Icon size={18} /><strong>{title}</strong></span><span className="service-description">{description}</span></span><span className="service-stack">{skills.slice(0, 3).map((skill) => <span key={skill.name}>{skill.name}</span>)}<span className="service-more" aria-hidden="true"><ArrowUpRight size={15} /></span></span></summary>
        <div className="service-expanded"><div className="service-preview"><Image src={preview} alt="" fill sizes="(max-width: 700px) 100vw, 240px" /></div><div><p>{description}</p><div className="service-stack service-expanded-stack">{skills.map((skill) => <span key={skill.name}>{skill.name}</span>)}</div></div></div>
      </details>)}
    </div>
  </section>;
}
