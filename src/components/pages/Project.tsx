"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../../constent";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiNextdotjs,
  SiPrisma,
  SiClerk,
  SiShadcnui,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { GiCrystalBall } from "react-icons/gi";
import { useMemo } from "react";

export default function Projects() {
  const techIcons = useMemo(
    () => ({
      React: <SiReact className="text-cyan-400" />,
      "Node.js": <SiNodedotjs className="text-green-400" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      Express: <SiExpress className="text-gray-400" />,
      "Tailwind CSS": <SiTailwindcss className="text-sky-300" />,
      TypeScript: <SiTypescript className="text-blue-400" />,
      Postman: <SiPostman className="text-orange-400" />,
      "Next.js": <SiNextdotjs className="text-white" />,
      Prisma: <SiPrisma className="text-blue-300" />,
      NeonDB: <TbDatabase className="text-green-300" />,
      Clerk: <SiClerk className="text-purple-400" />,
      "Shadcn UI": <SiShadcnui className="text-pink-400" />,
      "Gemini API": <GiCrystalBall className="text-yellow-400" />,
    }),
    []
  );

  return (
    <section
      id="projects"
      className="relative z-10 w-full py-20 px-6 text-white font-spaceGrotesk bg-[url('/stars-bg.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent mb-14 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Projects
        </h2>

        <div className="flex flex-col gap-20">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10 bg-gradient-to-br from-[#151515] to-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-6 hover:shadow-[0_0_25px_#6b21a8] transition-all`}>
              {/* Project Image */}
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={project.image}
                alt={`${project.name} preview screenshot`}
                className="object-cover w-full shadow-lg md:w-1/2 rounded-xl"
              />

              {/* Project Details */}
              <div className="w-full space-y-4 md:w-1/2">
                <h3 className="text-2xl font-semibold text-purple-300">
                  {project.name}
                </h3>
                <p className="leading-relaxed text-gray-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-[#222] text-sm rounded-md text-white hover:bg-purple-800 transition">
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-4 text-sm font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.name}`}
                    className="flex items-center gap-2 text-purple-400 transition hover:text-purple-300">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code of ${project.name}`}
                    className="flex items-center gap-2 text-gray-400 transition hover:text-white">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
