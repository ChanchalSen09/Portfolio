// constants.ts (Refactored & Type-safe)

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiRedux,
  SiPython,
  SiCplusplus,
  SiGraphql,
  SiFirebase,
  SiMysql,
  SiSequelize,
  SiGit,
  SiDocker,
  SiVercel,
  SiOpenai,
  SiLeetcode,
  SiAwslambda,
  SiDjango,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import QuizifyDemo from "./assets/ProjectImages/Quizifyf/Demo1.webp";
import LearnhubDemo from "./assets/image.png";
// ------------------------------ Types ------------------------------

export interface NavbarItem {
  label: string;
  link: string;
}

export interface SocialLink {
  icon: React.ComponentType<any>;
  link: string;
}

export interface TechStackItem {
  id: string;
  icon: React.ComponentType<any>;
  color: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  icon: React.ComponentType<any>;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  liveLink: string;
  codeLink: string;
  techStack: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Languages"
  | "Tools"
  | "AI/ML";

export interface Skill {
  name: string;
  icon: React.ComponentType<any>;
}

// ------------------------------ Navbar ------------------------------
export const RESUME_LINK =
  "https://drive.google.com/file/d/1JqSF5I9pgxyqWEm9WaP5L7x2dVjzyntM/view?usp=sharing";

export const NAVBAR_CONTENTS: NavbarItem[] = [
  { label: "EXPERIENCE", link: "#experience" },
  { label: "SKILLS", link: "#skills" },
  { label: "PROJECTS", link: "#projects" },
  { label: "ABOUT ME", link: "#about" },
  { label: "CONTACT", link: "#contact" },
];

// ------------------------------ Social Links ------------------------------
export const SOCIAL_LINKS: SocialLink[] = [
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/chanchal09/" },
  {
    icon: FaYoutube,
    link: "https://youtube.com/@chanchalsen09?si=9G8stGXGzk52hxsg",
  },
  { icon: FaGithub, link: "https://github.com/ChanchalSen09" },
  { icon: SiLeetcode, link: "https://leetcode.com/u/Chanchalsen09/" },
];

// ------------------------------ Tech Stack ------------------------------
export const TECH_STACK: TechStackItem[] = [
  { id: "javascript", icon: SiJavascript, color: "text-yellow-400" },
  { id: "react", icon: SiReact, color: "text-blue-400" },
  { id: "tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { id: "mongodb", icon: SiMongodb, color: "text-green-400" },
  { id: "nodejs", icon: SiNodedotjs, color: "text-green-500" },
  { id: "express", icon: SiExpress, color: "text-gray-400" },
  { id: "django", icon: SiDjango, color: "text-green-400" },
  { id: "AWS", icon: FaAws, color: "text-orange-400" },
];

// ------------------------------ Experiences ------------------------------
export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Extuent",
    date: "April 2025 – Present",
    icon: <FaPython className="text-white" />,
    points: [
      "Worked on frontend optimization and UI performance improvements using React.js, Redux, and Tailwind CSS.",
      "Implemented automated mail scheduler system using Node.js and cron jobs.",
      "Contributed to Django backend development, creating models, APIs, and integrating business logic.",
      "Optimized rendering performance and API integrations, improving frontend load time by 30%.",
      "Followed CI/CD practices and Agile development methodologies.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Devnex Technologies",
    date: "September 2024 – April 2025",
    icon: <FaReact className="text-white" />,
    points: [
      "Engineered dynamic, reusable components using React.js, Redux, and Tailwind CSS.",
      "Enhanced mobile responsiveness and UX, boosting user engagement by 18%.",
      "Resolved cross-browser inconsistencies, reducing UI bugs by 35%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "DAPS Software Pvt. Limited",
    date: "November 2023 – September 2024",
    icon: <FaNodeJs className="text-white" />,
    points: [
      "Developed scalable APIs using Node.js and Express.js with 99% uptime.",
      "Optimized complex SQL queries and indexed datasets, increasing data processing speed by 30%.",
      "Delivered microservice-based full-stack features and improved debugging/testing processes.",
    ],
  },
];

// ------------------------------ Education ------------------------------
export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Jawaharlal Institute of Technology, Borawan",
    date: "July 2021 – May 2025",
    details: [
      "CGPA: 8.10",
      "Relevant Coursework: Data Structures and Algorithms, DBMS, Operating Systems, OOP, Computer Networks",
    ],
  },
];

// ------------------------------ Certifications ------------------------------
export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "https://www.yourcertificateurl.com",
  },
  {
    name: "GCP Cloud Engineer Certification",
    issuer: "Google Cloud",
    date: "2025",
    link: "https://www.yourcertificateurl.com",
  },
];

// ------------------------------ Achievements ------------------------------
export const ACHIEVEMENTS: string[] = [
  "Ranked Top 5% in LeetCode Weekly Contests",
  "Winner of XYZ Hackathon 2024",
  "Secured 1st Place in University Coding Challenge 2023",
];

// ------------------------------ Hobbies ------------------------------
export const HOBBIES: string[] = [
  "Tech Blogging & YouTube Content Creation",
  "Solving Algorithm Challenges",
  "Music & Gaming",
  "Reading Mystery Novels",
];

// ------------------------------ Projects ------------------------------
export const PROJECTS: Project[] = [
  {
    name: "CareerFly – AI Career Coach",
    description:
      "AI-powered career guidance platform suggesting market-driven skills, interview prep, and tailored resumes/cover letters.",
    image: LearnhubDemo,
    liveLink: "https://learn-hub-self.vercel.app",
    codeLink: "https://github.com/ChanchalSen09/Resume-Maker",
    techStack: [
      "React",
      "Next.js",
      "Prisma",
      "NeonDB",
      "Clerk",
      "Shadcn UI",
      "Gemini API",
    ],
  },
  {
    name: "Quizfy",
    description:
      "Full-stack quiz platform with JWT authentication, dynamic quiz creation, and real-time feedback.",
    image: QuizifyDemo,
    liveLink: "https://quizfy-three.vercel.app/",
    codeLink: "https://github.com/ChanchalSen09/Quiz-App",
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
  },
  // {
  //   name: "Learnhub",
  //   description:
  //     "Scalable AI-based learning platform with JWT & OTP verification, secure APIs, and modular architecture.",
  //   image: LearnhubDemo,
  //   liveLink: "https://codelearn-swart.vercel.app/",
  //   codeLink: "https://github.com/ChanchalSen09/Backend_Learnhub",
  //   techStack: ["Node.js", "Express", "MongoDB", "Postman"],
  // },
];

// ------------------------------ Skills ------------------------------
export const SKILL_CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Databases",
  "Languages",
  "Tools",
  "AI/ML",
];

export const SKILLS_DATA: Record<SkillCategory, Skill[]> = {
  Frontend: [
    { name: "React.js", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: TbBrandFramerMotion },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Django", icon: DiDjango },
    { name: "GraphQL", icon: SiGraphql },
  ],
  Databases: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "AWS", icon: FaAws },
  ],
  Languages: [
    { name: "C++", icon: SiCplusplus },
    { name: "JavaScript", icon: SiJavascript },
    { name: "SQL", icon: SiSequelize },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
  ],
  Tools: [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "Postman", icon: SiPostman },
  ],
  "AI/ML": [
    { name: "OpenAI API", icon: SiOpenai },
    { name: "AWS Lambda", icon: SiAwslambda },
  ],
};

export const SKILL_LEVELS: Record<SkillCategory, number> = {
  Frontend: 90,
  Backend: 80,
  Databases: 75,
  Languages: 85,
  Tools: 70,
  "AI/ML": 60,
};

export const SKILL_COLORS: Record<SkillCategory, string> = {
  Frontend: "bg-blue-500",
  Backend: "bg-green-500",
  Databases: "bg-yellow-500",
  Languages: "bg-purple-500",
  Tools: "bg-red-500",
  "AI/ML": "bg-teal-500",
};
