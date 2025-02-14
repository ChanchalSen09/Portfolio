import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
var experiences = [
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
export default function Experience() {
    var _a = useState(null), expanded = _a[0], setExpanded = _a[1];
    return (_jsxs("section", { className: "py-12 px-6", id: "#experience", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-6", children: "Experience" }), _jsxs("div", { className: "relative space-y-6 border-l-2 border-gray-300 pl-6 w-full max-w-xl", children: [_jsx("div", { className: "absolute -left-2 top-12 w-4 h-4 bg-blue-500 rounded-full border-4 border-white" }), _jsx("div", { className: "absolute -left-2 top-48 w-4 h-4 bg-blue-500 rounded-full border-4 border-white" }), experiences.map(function (exp, index) { return (_jsxs(motion.div, { className: "relative p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all", whileHover: { scale: 1.05 }, initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: exp.logo, alt: exp.company, className: "w-12 h-12 rounded-full" }), _jsxs("div", { className: "ml-[5px]", children: [_jsx("h3", { className: "text-xl font-semibold ", children: exp.role }), _jsx("p", { className: "text-lg text-gray-700 ", children: exp.company }), _jsxs("p", { className: "text-gray-600 text-sm", children: [exp.duration, " ", exp.location] }), " "] })] }), _jsx("button", { className: "mt-2 text-blue-500 font-semibold", onClick: function () { return setExpanded(expanded === index ? null : index); }, children: expanded === index ? "Show Less" : "Show More" }), expanded === index && (_jsx("ul", { className: "list-disc pl-5 mt-2 text-gray-700 space-y-1", children: exp.responsibilities.map(function (resp, idx) { return (_jsx(motion.li, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.4, delay: idx * 0.1 }, children: resp }, idx)); }) }))] }, index)); })] })] }));
}
