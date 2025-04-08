import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Skills from "./Skills";
import About from "./MainAbout";
import Projects from "./Project";
import Experience from "./Experience";
import ContactPage from "./Contact";
var sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
export default function Landing() {
    return (_jsxs("div", { className: "flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24 mt-16 py-20 space-y-16", children: [_jsx(motion.section, { className: "w-full max-w-5xl", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants, children: _jsx(About, {}) }), _jsx(motion.section, { className: "w-full max-w-5xl", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants, children: _jsx(Skills, {}) }), _jsx(motion.section, { className: "w-full max-w-8xl", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants, children: _jsx(Projects, {}) }), _jsx(motion.section, { className: "w-full max-w-2xl", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants, children: _jsx(Experience, {}) }), _jsx(motion.section, { className: "w-full flex flex-col items-center justify-center max-w-8xl", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants, children: _jsx(ContactPage, {}) })] }));
}
