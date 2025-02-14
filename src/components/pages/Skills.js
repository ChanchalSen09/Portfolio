import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiGraphql, SiFirebase, SiMysql, SiSequelize, SiGit, SiDocker, SiVercel, SiPostman, SiOpenai, SiRedux, } from "react-icons/si";
var categories = [
    "Frontend",
    "Backend",
    "Databases",
    "Languages",
    "Tools",
    "AI/ML",
];
var skillsData = {
    Frontend: [
        { name: "React.js", icon: _jsx(SiReact, {}) },
        { name: "Redux", icon: _jsx(SiRedux, {}) },
        { name: "TypeScript", icon: _jsx(SiTypescript, {}) },
        { name: "JavaScript", icon: _jsx(SiJavascript, {}) },
        { name: "Tailwind CSS", icon: _jsx(SiTailwindcss, {}) },
        { name: "Framer Motion", icon: _jsx(TbBrandFramerMotion, {}) },
    ],
    Backend: [
        { name: "Node.js", icon: _jsx(SiNodedotjs, {}) },
        { name: "Express.js", icon: _jsx(SiExpress, {}) },
        { name: "GraphQL", icon: _jsx(SiGraphql, {}) },
    ],
    Databases: [
        { name: "MySQL", icon: _jsx(SiMysql, {}) },
        { name: "MongoDB", icon: _jsx(SiMongodb, {}) },
        { name: "Firebase", icon: _jsx(SiFirebase, {}) },
    ],
    Languages: [
        { name: "C++", icon: _jsx(SiCplusplus, {}) },
        { name: "JavaScript", icon: _jsx(SiJavascript, {}) },
        { name: "SQL", icon: _jsx(SiSequelize, {}) },
        { name: "TypeScript", icon: _jsx(SiTypescript, {}) },
        { name: "Python", icon: _jsx(SiPython, {}) },
    ],
    Tools: [
        { name: "Git", icon: _jsx(SiGit, {}) },
        { name: "Docker", icon: _jsx(SiDocker, {}) },
        { name: "Vercel", icon: _jsx(SiVercel, {}) },
        { name: "Postman", icon: _jsx(SiPostman, {}) },
    ],
    "AI/ML": [{ name: "OpenAI API", icon: _jsx(SiOpenai, {}) }],
};
var categoryLevels = {
    Frontend: 90,
    Backend: 80,
    Databases: 75,
    Languages: 85,
    Tools: 70,
    "AI/ML": 60,
};
var categoryColors = {
    Frontend: "bg-blue-500",
    Backend: "bg-green-500",
    Databases: "bg-yellow-500",
    Languages: "bg-purple-500",
    Tools: "bg-red-500",
    "AI/ML": "bg-teal-500",
};
export default function Skills() {
    var _a = useState("Frontend"), activeCategory = _a[0], setActiveCategory = _a[1];
    return (_jsxs("section", { className: "py-12 px-6", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-6", children: "Skills & Tech Stack" }), _jsx("div", { className: "flex justify-center flex-wrap gap-4 mb-6", children: categories.map(function (category) { return (_jsx(motion.button, { className: "px-4 py-2 rounded-md font-semibold transition-all ".concat(activeCategory === category
                        ? "bg-gray-800 text-white shadow-lg scale-105"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"), whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, onClick: function () { return setActiveCategory(category); }, children: category }, category)); }) }), _jsxs("div", { className: "max-w-lg mx-auto mb-6", children: [_jsxs("p", { className: "text-lg font-semibold text-center", children: [activeCategory, " Proficiency"] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden", children: _jsx(motion.div, { className: "".concat(categoryColors[activeCategory], " h-3 rounded-full"), initial: { width: 0 }, animate: { width: "".concat(categoryLevels[activeCategory], "%") }, transition: {
                                duration: 1,
                                ease: "easeInOut",
                                bounce: 0.3,
                            } }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.5, ease: "easeOut" }, className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: skillsData[activeCategory].map(function (skill, index) { return (_jsxs(motion.div, { className: "p-4 bg-white rounded-lg shadow-md flex items-center gap-4 hover:shadow-xl transition-all", whileHover: { scale: 1.1, rotate: 2 }, children: [_jsx("div", { className: "text-3xl text-gray-800", children: skill.icon }), _jsx("p", { className: "font-semibold", children: skill.name })] }, index)); }) }, activeCategory)] }));
}
