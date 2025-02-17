import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import LeetcodeIco from "./assets/leetcodeioc.svg";
import { Linkedin, Youtube, Github } from "lucide-react";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1-OEiWLJvSzjiVYmykCIHKql5xcwqFGbL/view?usp=drive_link";
export const NavbarContents = [
  { label: "EXPERIENCE", link: "#experience" },
  { label: "SKILLS", link: "#skills" },
  { label: "PROJECTS", link: "#projects" },
  { label: "ABOUT ME", link: "#about" },
  { label: "CONTACT", link: "#contact" },
];

export const SOCIAL_LINKS = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/chanchal09/" },
  {
    icon: Youtube,
    link: "https://www.youtube.com/channel/UCSmxp1l5pngNM9zk1VJQoOQ",
  },
  { icon: Github, link: "https://github.com/ChanchalSen09" },
  { icon: LeetcodeIco, link: "https://leetcode.com/u/Chanchalsen09/" },
];

export const SOCIAL = [
  { id: "facebook", icon: FaFacebookF, url: "" },
  {
    id: "twitter",
    icon: FaTwitter,
    url: "https://x.com/ChanchalSe5934?t=GkvRzW9eSoEG6oWsO_MVcQ&s=09",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/chanchal_sen09/",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/chanchal09/",
  },
];

export const TECH_STACK = [
  { id: "javascript", icon: SiJavascript, color: "text-yellow-400" },
  { id: "react", icon: SiReact, color: "text-blue-400" },
  { id: "tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { id: "mongodb", icon: SiMongodb, color: "text-green-400" },
  { id: "nodejs", icon: SiNodedotjs, color: "text-green-500" },
];

export const experiences = [
  {
    company: "Devnex Technologies",
    role: "Frontend Developer",
    duration: "September 2024 – Present",
    location: "Remote",
    logo: "https://devnex.in/assets/logo-BIBESWXT.svg",
    responsibilities: [
      "Specialized in frontend development using React and Tailwind CSS, delivering user-centric and responsive designs.",
      "Built reusable components and implemented state management with Redux, improving scalability and maintainability.",
      "Optimized UI/UX by resolving cross-browser compatibility issues and enhancing responsiveness through performance debugging.",
    ],
  },
  {
    company: "DAPS Software Pvt. Limited",
    role: "Software Engineer Intern",
    duration: "November 2023 – September 2024",
    location: "Remote",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFCQ8khnok90A/company-logo_200_200/company-logo_200_200/0/1688567449971/dapssoftware_logo?e=1747267200&v=beta&t=RCJ0PqupagGf-HKgROeJ6j3J9v5uQd2-4xSo3-_oaHc",
    responsibilities: [
      "Designed and implemented advanced SQL queries to streamline data extraction, transformation, and analysis.",
      "Contributed to full-stack projects by developing backend services, designing RESTful APIs, and integrating them with frontend interfaces.",
      "Gained experience in end-to-end software development, ensuring optimal functionality and performance.",
    ],
  },
];
