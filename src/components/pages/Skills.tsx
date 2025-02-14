import { useState } from "react";
import { motion } from "framer-motion";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiFirebase,
  SiMysql,
  SiSequelize,
  SiGit,
  SiDocker,
  SiVercel,
  SiPostman,
  SiOpenai,
  SiRedux,
} from "react-icons/si";

const categories = [
  "Frontend",
  "Backend",
  "Databases",
  "Languages",
  "Tools",
  "AI/ML",
] as const;
type SkillCategory = (typeof categories)[number];
const skillsData = {
  Frontend: [
    { name: "React.js", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  Languages: [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <SiSequelize /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
  "AI/ML": [{ name: "OpenAI API", icon: <SiOpenai /> }],
};
const categoryLevels = {
  Frontend: 90,
  Backend: 80,
  Databases: 75,
  Languages: 85,
  Tools: 70,
  "AI/ML": 60,
};
const categoryColors = {
  Frontend: "bg-blue-500",
  Backend: "bg-green-500",
  Databases: "bg-yellow-500",
  Languages: "bg-purple-500",
  Tools: "bg-red-500",
  "AI/ML": "bg-teal-500",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Frontend");

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Skills & Tech Stack
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              activeCategory === category
                ? "bg-gray-800 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}>
            {category}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar for Broad Categories */}
      <div className="max-w-lg mx-auto mb-6">
        <p className="text-lg font-semibold text-center">
          {activeCategory} Proficiency
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
          <motion.div
            className={`${categoryColors[activeCategory]} h-3 rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${categoryLevels[activeCategory]}%` }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              bounce: 0.3,
            }}></motion.div>
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory} // Animates on change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData[activeCategory].map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.1, rotate: 2 }}>
            <div className="text-3xl text-gray-800">{skill.icon}</div>
            <p className="font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
