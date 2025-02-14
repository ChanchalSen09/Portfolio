import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Youtube, Github } from "lucide-react";
import LeetcodeIco from "../../assets/leetcodeioc.svg";
var NAV_ITEMS = [
    { label: "EXPERIENCE", link: "#experience" },
    { label: "SKILLS", link: "#skills" },
    { label: "PROJECTS", link: "#projects" },
    { label: "ABOUT ME", link: "#about" },
    { label: "CONTACT", link: "#contact" },
];
var SOCIAL_LINKS = [
    { icon: Linkedin, link: "https://linkedin.com" },
    { icon: Youtube, link: "https://youtube.com" },
    { icon: Github, link: "https://github.com" },
    { icon: LeetcodeIco, link: "https://leetcode.com" },
];
var Navbar = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(null), isMobile = _b[0], setIsMobile = _b[1];
    var _c = useState(null), darkMode = _c[0], setDarkMode = _c[1];
    // Check & Set Mobile View
    useEffect(function () {
        var checkMobile = function () { return setIsMobile(window.innerWidth < 1024); };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return function () { return window.removeEventListener("resize", checkMobile); };
    }, []);
    useEffect(function () {
        var theme = localStorage.getItem("theme") || "light";
        setDarkMode(theme === "dark");
    }, []);
    useEffect(function () {
        if (darkMode === null)
            return;
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (_jsxs("nav", { className: "fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors", children: [_jsxs("div", { className: "container mx-auto px-6 py-4 flex justify-between items-center", children: [_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.5 }, whileHover: { scale: 1.1 }, className: "text-2xl font-bold text-gray-900 dark:text-white", children: "CHANCHAL" }), _jsx("button", { className: "text-gray-700 dark:text-gray-300 lg:hidden", onClick: function () { return setIsOpen(!isOpen); }, children: isOpen ? _jsx(X, { size: 28 }) : _jsx(Menu, { size: 28 }) }), _jsx("div", { className: "hidden lg:flex space-x-8 text-gray-700 dark:text-gray-300", children: NAV_ITEMS.map(function (_a, index) {
                            var label = _a.label, link = _a.link;
                            return (_jsx(motion.a, { href: link, initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { scale: 1.1 }, className: "cursor-pointer hover:text-gray-900 dark:hover:text-white", children: label }, index));
                        }) }), _jsx("div", { className: "hidden lg:flex space-x-4", children: SOCIAL_LINKS.map(function (_a, index) {
                            var Icon = _a.icon, link = _a.link;
                            return (_jsx(motion.a, { href: link, target: "_blank", rel: "noopener noreferrer", initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { scale: 1.2, rotate: 5 }, className: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white", children: typeof Icon === "string" ? (_jsx("img", { src: Icon, alt: "icon", className: "w-5 h-5" })) : (_jsx(Icon, { size: 22 })) }, index));
                        }) })] }), _jsx(AnimatePresence, { children: isOpen && isMobile && (_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md lg:hidden", children: [_jsx("ul", { className: "flex flex-col space-y-6 px-6 py-4 text-gray-700 dark:text-gray-300", children: NAV_ITEMS.map(function (_a, index) {
                                var label = _a.label, link = _a.link;
                                return (_jsx(motion.li, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.1 }, children: _jsx("a", { href: link, className: "hover:text-gray-900 dark:hover:text-white", children: label }) }, index));
                            }) }), _jsx("div", { className: "flex justify-center space-x-6 py-4", children: SOCIAL_LINKS.map(function (_a, index) {
                                var Icon = _a.icon, link = _a.link;
                                return (_jsx(motion.a, { href: link, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.2 }, className: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white", children: typeof Icon === "string" ? (_jsx("img", { src: Icon, alt: "icon", className: "w-6 h-6" })) : (_jsx(Icon, { size: 24 })) }, index));
                            }) })] })) })] }));
};
export default Navbar;
