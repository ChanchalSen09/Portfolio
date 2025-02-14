import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiPostman,
} from "react-icons/si";
import QuizeDemo1 from "../../assets/ProjectImages/Quizifyf/Demo1.webp";
import QuizeDemo2 from "../../assets/ProjectImages/Quizifyf/Demo2.webp";
import QuizeDemo3 from "../../assets/ProjectImages/Quizifyf/Demo3.webp";
import LearnhubDemo1 from "../../assets/ProjectImages/Learnhub/Demo1.webp";
import LearnhubDemo2 from "../../assets/ProjectImages/Learnhub/Demo2.webp";
import LearnhubDemo3 from "../../assets/ProjectImages/Learnhub/Demo3.webp";

type ProjectStatus = "Live" | "Under Development" | "Coming Soon";

const techIcons: Record<string, React.JSX.Element> = {
  React: <SiReact className="text-blue-500" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-gray-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Postman: <SiPostman className="text-blue-600" />,
};

const projects: Array<{
  name: string;
  description: string;
  images: string[];
  status: ProjectStatus;
  liveLink: string;
  codeLink: string;
  techStack: string[];
}> = [
  {
    name: "Quizfy",
    description:
      "A full-stack quiz application with secure JWT authentication, dynamic quiz creation, real-time feedback, and user participation.",
    images: [QuizeDemo1, QuizeDemo2, QuizeDemo3],
    status: "Live",
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

  {
    name: "Learnhub",
    description:
      " A scalable, AI-integrated platform with robust backend architecture, supporting 2,000 users, JWT authentication, and OTP verification for security.",
    images: [LearnhubDemo1, LearnhubDemo2, LearnhubDemo3],
    status: "Live",
    liveLink: "https://codelearn-swart.vercel.app/",
    codeLink: "https://github.com/ChanchalSen09/Backend_Learnhub",
    techStack: ["Node.js", "Express", "MongoDB", "Postman"],
  },
];

const statusColors: Record<ProjectStatus, string> = {
  Live: "bg-green-500",
  "Under Development": "bg-yellow-500",
  "Coming Soon": "bg-red-500",
};

export default function Projects() {
  return (
    <section className="px-4 py-6 sm:px-6 md:px-12">
      <h2 className="mb-6 text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-4 transition-all bg-white rounded-lg shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.05 }}>
            <div className="w-full">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                stopOnHover
                showArrows={false}
                className="overflow-hidden rounded-md">
                {project.images.map((img, idx) => (
                  <div key={idx} className="h-45 sm:h-48 md:h-54 lg:h-60">
                    <img
                      src={img}
                      alt={project.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
            <p className="mb-3 text-gray-600">{project.description}</p>

            <div className="flex flex-row gap-2 my-4">
              <h4 className="text-sm font-semibold text-gray-700">
                Tech Stack:
              </h4>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="text-2xl">
                  {techIcons[tech]}
                </span>
              ))}
            </div>
            <span
              className={`px-3 py-1 text-white text-sm rounded-full max-w-fit ${
                project.status === "Live" ? "animate-blink" : ""
              } ${statusColors[project.status]}`}>
              {project.status}
            </span>
            <div className="flex flex-wrap gap-6 mt-3">
              {project.liveLink !== "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-semibold text-blue-600 hover:underline">
                  <FaExternalLinkAlt /> Live Preview
                </a>
              )}
              {project.codeLink !== "#" && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-semibold text-gray-700 hover:underline">
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @keyframes blink {
          30% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
