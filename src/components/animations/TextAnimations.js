import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function TextFade(_a) {
    var direction = _a.direction, children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.staggerChildren, staggerChildren = _c === void 0 ? 0.1 : _c;
    var FADE_DOWN = {
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
        hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
    };
    var ref = useRef(null);
    var isInView = useInView(ref, { once: true });
    return (_jsx(motion.div, { ref: ref, initial: "hidden", animate: isInView ? "show" : "", variants: {
            hidden: {},
            show: {
                transition: {
                    staggerChildren: staggerChildren,
                },
            },
        }, className: className, children: React.Children.map(children, function (child) {
            return React.isValidElement(child) ? (_jsx(motion.div, { variants: FADE_DOWN, children: child })) : (child);
        }) }));
}
export function TypingEffect(_a) {
    var _b = _a.text, text = _b === void 0 ? "Typing Effect" : _b;
    var ref = React.useRef(null);
    var isInView = useInView(ref, { once: true });
    return (_jsx("h2", { ref: ref, className: "text-xl sm:text-2xl tracking-tighter md:text-xl md:leading-[2rem]", children: text.split("").map(function (letter, index) { return (_jsx(motion.span, { initial: { opacity: 0 }, animate: isInView ? { opacity: 1 } : {}, transition: { duration: 0.2, delay: index * 0.03 }, children: letter }, index)); }) }));
}
