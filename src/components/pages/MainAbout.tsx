import { motion } from "framer-motion";
import { TextFade, TypingEffect } from "../animations/TextAnimations";
import AvatarImg from "./src/assets/ghibliimg.png";
function MainAbout() {
  return (
    <div className="flex flex-col items-center justify-center text-center  md:flex-row md:text-left">
      <div className="">
        <TextFade direction="up">
          <h1 className="text-5xl font-bold text-black md:text-6xl">
            Chanchal Sen
          </h1>
        </TextFade>
        <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl ">
          <TextFade direction="up">
            <p className="font-bold">
              MERN Stack Developer | React.js Specialist | AI/ML Enthusiast
            </p>
          </TextFade>
          <p className="mt-4">
            <TypingEffect text="Building scalable web apps with React & Tailwind." />
            <TypingEffect text="Passionate about frontend performance & seamless user experiences" />
            <TypingEffect text="Exploring React Native & Machine Learning" />
          </p>
        </p>
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
          className="object-cover w-56 h-56 border-2 border-gray-300 rounded-full shadow-lg md:w-72 md:h-72"
        />
      </motion.div>
    </div>
  );
}

export default MainAbout;
