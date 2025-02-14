import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { TextFade, TypingEffect } from "../animations/TextAnimations";
import AvatarImg from "../../assets/Avatar.webp";
function MainAbout() {
    return (_jsxs("div", { className: " flex flex-col md:flex-row items-center  justify-center text-center md:text-left", children: [_jsxs("div", { className: "", children: [_jsx(TextFade, { direction: "up", children: _jsx("h1", { className: "text-5xl md:text-6xl font-bold text-black", children: "Chanchal Sen" }) }), _jsxs("p", { className: "mt-6 text-lg md:text-xl text-gray-600 leading-relaxed ", children: [_jsx(TextFade, { direction: "up", children: _jsx("p", { className: "font-bold", children: "MERN Stack Developer | React.js Specialist | AI/ML Enthusiast" }) }), _jsxs("p", { className: "mt-4", children: [_jsx(TypingEffect, { text: "Building scalable web apps with React & Tailwind." }), _jsx(TypingEffect, { text: "Passionate about frontend performance & seamless user experiences" }), _jsx(TypingEffect, { text: "Exploring React Native & Machine Learning" })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "w-full md:w-2/5 flex justify-center mt-6 md:mt-0", children: _jsx("img", { src: AvatarImg, alt: "Chanchal Sen", className: "w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-2 border-gray-300" }) })] }));
}
export default MainAbout;
