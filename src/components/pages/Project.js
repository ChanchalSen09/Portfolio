import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiTypescript, SiJavascript, SiPostman, } from "react-icons/si";
import QuizeDemo1 from "../../assets/ProjectImages/Quizifyf/Demo1.webp";
import QuizeDemo2 from "../../assets/ProjectImages/Quizifyf/Demo2.webp";
import QuizeDemo3 from "../../assets/ProjectImages/Quizifyf/Demo3.webp";
import LearnhubDemo1 from "../../assets/ProjectImages/Learnhub/Demo1.webp";
import LearnhubDemo2 from "../../assets/ProjectImages/Learnhub/Demo2.webp";
import LearnhubDemo3 from "../../assets/ProjectImages/Learnhub/Demo3.webp";
var techIcons = {
    React: _jsx(SiReact, { className: "text-blue-500" }),
    "Node.js": _jsx(SiNodedotjs, { className: "text-green-600" }),
    MongoDB: _jsx(SiMongodb, { className: "text-green-500" }),
    Express: _jsx(SiExpress, { className: "text-gray-500" }),
    "Tailwind CSS": _jsx(SiTailwindcss, { className: "text-teal-400" }),
    Firebase: _jsx(SiFirebase, { className: "text-yellow-500" }),
    TypeScript: _jsx(SiTypescript, { className: "text-blue-600" }),
    JavaScript: _jsx(SiJavascript, { className: "text-yellow-400" }),
    Postman: _jsx(SiPostman, { className: "text-blue-600" }),
};
var projects = [
    {
        name: "Quizfy",
        description: "A full-stack quiz application with secure JWT authentication, dynamic quiz creation, real-time feedback, and user participation.",
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
        description: " A scalable, AI-integrated platform with robust backend architecture, supporting 2,000 users, JWT authentication, and OTP verification for security.",
        images: [LearnhubDemo1, LearnhubDemo2, LearnhubDemo3],
        status: "Live",
        liveLink: "https://codelearn-swart.vercel.app/",
        codeLink: "https://github.com/ChanchalSen09/Backend_Learnhub",
        techStack: ["Node.js", "Express", "MongoDB", "Postman"],
    },
];
var statusColors = {
    Live: "bg-green-500",
    "Under Development": "bg-yellow-500",
    "Coming Soon": "bg-red-500",
};
export default function Projects() {
    return (_jsxs("section", { className: "py-6 px-4 sm:px-6 md:px-12", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-6", children: "Projects" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map(function (project, index) { return (_jsxs(motion.div, { className: "p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col", whileHover: { scale: 1.05 }, children: [_jsx("div", { className: "w-full", children: _jsx(Carousel, { showThumbs: false, showStatus: false, infiniteLoop: true, autoPlay: true, interval: 3000, stopOnHover: true, showArrows: false, className: "rounded-md overflow-hidden", children: project.images.map(function (img, idx) { return (_jsx("div", { className: "h-45 sm:h-48 md:h-54 lg:h-60", children: _jsx("img", { src: img, alt: project.name, className: "w-full h-full object-cover" }) }, idx)); }) }) }), _jsx("h3", { className: "text-xl font-semibold mt-3", children: project.name }), _jsx("p", { className: "text-gray-600 mb-3", children: project.description }), _jsxs("div", { className: "flex flex-row gap-2 my-4", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-700", children: "Tech Stack:" }), project.techStack.map(function (tech, idx) { return (_jsx("span", { className: "text-2xl", children: techIcons[tech] }, idx)); })] }), _jsx("span", { className: "px-3 py-1 text-white text-sm rounded-full max-w-fit ".concat(project.status === "Live" ? "animate-blink" : "", " ").concat(statusColors[project.status]), children: project.status }), _jsxs("div", { className: "mt-3 flex gap-6 flex-wrap", children: [project.liveLink !== "#" && (_jsxs("a", { href: project.liveLink, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 font-semibold hover:underline flex items-center gap-1", children: [_jsx(FaExternalLinkAlt, {}), " Live Preview"] })), project.codeLink !== "#" && (_jsxs("a", { href: project.codeLink, target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 font-semibold hover:underline flex items-center gap-1", children: [_jsx(FaGithub, {}), " View Code"] }))] })] }, index)); }) }), _jsx("style", { children: "\n        @keyframes blink {\n          30% { opacity: 1; }\n          50% { opacity: 0.5; }\n          100% { opacity: 1; }\n        }\n        .animate-blink {\n          animation: blink 1s infinite;\n        }\n      " })] }));
}
