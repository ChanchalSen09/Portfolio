import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { JSX } from "react";
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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMemo } from "react";

// Assets
import QuizeDemo1 from "../../assets/ProjectImages/Quizifyf/Demo1.webp";
import QuizeDemo2 from "../../assets/ProjectImages/Quizifyf/Demo2.webp";
import QuizeDemo3 from "../../assets/ProjectImages/Quizifyf/Demo3.webp";
import LearnhubDemo1 from "../../assets/ProjectImages/Learnhub/Demo1.webp";
import LearnhubDemo2 from "../../assets/ProjectImages/Learnhub/Demo2.webp";
import LearnhubDemo3 from "../../assets/ProjectImages/Learnhub/Demo3.webp";

// Projects Data
const projects = [
  {
    name: "Quizfy",
    description:
      "A full-stack quiz platform with JWT auth, dynamic quiz creation, and real-time feedback.",
    images: [QuizeDemo1, QuizeDemo2, QuizeDemo3],
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
      "A scalable AI-based learning platform with secure backend, JWT & OTP verification.",
    images: [LearnhubDemo1, LearnhubDemo2, LearnhubDemo3],
    liveLink: "https://codelearn-swart.vercel.app/",
    codeLink: "https://github.com/ChanchalSen09/Backend_Learnhub",
    techStack: ["Node.js", "Express", "MongoDB", "Postman"],
  },
];

export default function Projects() {
  const techIcons = useMemo<Record<string, JSX.Element>>(
    () => ({
      React: <SiReact className="text-cyan-400" />,
      "Node.js": <SiNodedotjs className="text-green-400" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      Express: <SiExpress className="text-gray-400" />,
      "Tailwind CSS": <SiTailwindcss className="text-sky-300" />,
      Firebase: <SiFirebase className="text-yellow-400" />,
      TypeScript: <SiTypescript className="text-blue-400" />,
      JavaScript: <SiJavascript className="text-yellow-300" />,
      Postman: <SiPostman className="text-orange-400" />,
    }),
    []
  );

  return (
    <section
      className="w-full px-6 py-20 text-white font-spaceGrotesk bg-[url('/stars-bg.svg')] bg-cover bg-center relative"
      id="projects">
      <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white md:text-5xl mb-14 drop-shadow-md">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="overflow-hidden bg-gradient-to-br from-[#141414] to-[#1e1e1e] border border-[#333] rounded-2xl shadow-[0_0_15px_#6b21a8] hover:shadow-purple-500/40 transition-all duration-300">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={5000}
                showArrows={false}
                swipeable
                emulateTouch>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name}-screenshot-${i + 1}`}
                    className="object-cover w-full h-56 md:h-64"
                    loading="lazy"
                  />
                ))}
              </Carousel>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-purple-300">
                  {project.name}
                </h3>
                <p className="mb-4 text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 text-sm bg-[#222] text-white rounded-md"
                      title={tech}>
                      {techIcons[tech] ?? null} {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-3 text-sm font-semibold">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:underline">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:underline">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
