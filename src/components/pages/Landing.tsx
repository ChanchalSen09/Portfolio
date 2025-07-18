import { motion } from "framer-motion";
import Skills from "./Skills";
import About from "./MainAbout";
import Projects from "./Project";
import Experience from "./Experience";
import ContactPage from "./Contact";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Landing() {
  return (
    <div className="flex flex-col items-center px-4 py-20 mt-16 space-y-16 md:px-8 lg:px-16 xl:px-24">
      <motion.section
        className="w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <About />
      </motion.section>

      <motion.section
        className="w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Skills />
      </motion.section>

      <motion.section
        className="w-full max-w-8xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Projects />
      </motion.section>

      <motion.section
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Experience />
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-center w-full max-w-8xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <ContactPage />
      </motion.section>
    </div>
  );
}
