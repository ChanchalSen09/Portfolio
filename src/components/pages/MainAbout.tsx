import { motion } from "framer-motion";
import { TextFade, TypingEffect } from "../animations/TextAnimations";
import AvatarImg from "../../assets/ghibliimg.png";

function MainAbout() {
  return (
    <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left font-space-grotesk">
      <div className="text-white">
        <TextFade direction="up">
          <h1 className="text-5xl font-bold text-white md:text-6xl drop-shadow-md">
            Chanchal Sen
          </h1>
        </TextFade>
        <TextFade direction="up">
          <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            <span className="font-bold text-purple-400">
              MERN Stack Developer | React.js Specialist | AI/ML Enthusiast
            </span>
            <div className="mt-4 space-y-2">
              <TypingEffect text="Building scalable web apps with React & Tailwind." />
              <TypingEffect text="Passionate about frontend performance & seamless user experiences." />
              <TypingEffect text="Exploring React Native & Machine Learning." />
            </div>
          </p>
        </TextFade>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full mt-6 md:w-2/5 md:mt-0">
        <img
          src={AvatarImg}
          alt="Chanchal Sen"
          loading="lazy"
          className="object-cover w-56 h-56 border-2 border-purple-500 rounded-full shadow-lg md:w-72 md:h-72 shadow-purple-800/40"
        />
      </motion.div>
    </div>
  );
}

export default MainAbout;
