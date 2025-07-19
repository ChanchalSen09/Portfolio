import { LazyMotion, domAnimation, motion, Variants } from "framer-motion";
import { Suspense, lazy } from "react";

import Skills from "./Skills";
import About from "./MainAbout";
import Experience from "./Experience";

const Projects = lazy(() => import("./Project"));
const ContactPage = lazy(() => import("./Contact"));

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Section config
const sections = [
  { component: About, key: "about", maxW: "max-w-6xl" },
  { component: Skills, key: "skills", maxW: "max-w-6xl" },
  { component: Experience, key: "experience", maxW: "max-w-6xl" },
];

export default function Landing() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col items-center px-4 py-20 mt-16 space-y-16 md:px-8 lg:px-16 xl:px-24">
        {sections.map(({ component: Component, key, maxW }) => (
          <motion.section
            key={key}
            className={`w-full ${maxW}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}>
            <Component />
          </motion.section>
        ))}

        {/* Lazy Loaded Projects Section */}
        <Suspense
          fallback={<div className="text-white">Loading Projects...</div>}>
          <motion.section
            className="w-full max-w-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}>
            <Projects />
          </motion.section>
        </Suspense>
        <Suspense
          fallback={<div className="text-white">Loading Contact...</div>}>
          <motion.section
            className="flex flex-col items-center justify-center w-full max-w-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}>
            <ContactPage />
          </motion.section>
        </Suspense>
      </div>
    </LazyMotion>
  );
}
