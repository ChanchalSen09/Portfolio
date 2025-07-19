import { motion, Variants } from "framer-motion";
import Skills from "./Skills";
import About from "./MainAbout";
import Projects from "./Project";
import Experience from "./Experience";
import ContactPage from "./Contact";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const, // ✅ Fix: Cast as const to satisfy the type
    },
  },
};

export default function Landing() {
  return (
    <div className="flex flex-col items-center px-4 py-20 mt-16 space-y-16 md:px-8 lg:px-16 xl:px-24">
      {[About, Skills, Projects, Experience, ContactPage].map(
        (Component, i) => (
          <motion.section
            key={i}
            className={`w-full ${
              Component === Projects || Component === ContactPage
                ? "max-w-8xl"
                : "max-w-5xl"
            } ${
              Component === ContactPage
                ? "flex flex-col items-center justify-center"
                : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}>
            <Component />
          </motion.section>
        )
      )}
    </div>
  );
}
