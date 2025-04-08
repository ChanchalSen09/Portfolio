import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export var Loader = function (_a) {
    var messages = _a.messages, theme = _a.theme;
    var _b = useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = useState(""), dots = _c[0], setDots = _c[1];
    useEffect(function () {
        var messageInterval = setInterval(function () {
            setCurrentIndex(function (prev) { return (prev + 1) % messages.length; });
        }, 2000);
        var dotInterval = setInterval(function () {
            setDots(function (prev) { return (prev.length >= 3 ? "" : "".concat(prev, ".")); });
        }, 500);
        return function () {
            clearInterval(messageInterval);
            clearInterval(dotInterval);
        };
    }, [messages.length]);
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ".concat(theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"), children: [_jsx(motion.div, { className: "size-14 md:size-16 border-[4px] border-blue-500 border-t-transparent rounded-full", animate: { rotate: 360 }, transition: {
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                } }), _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.5 }, className: "text-xl font-semibold mt-4", children: [messages[currentIndex], dots] }, messages[currentIndex]) })] }));
};
