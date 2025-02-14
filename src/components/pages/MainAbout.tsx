import { motion } from "framer-motion";
import { TextFade, TypingEffect } from "../animations/TextAnimations";
import AvatarImg from "../../assets/Avatar.webp";
function MainAbout() {
  return (
    <div className=" flex flex-col md:flex-row items-center  justify-center text-center md:text-left">
      <div className="">
        <TextFade direction="up">
          <h1 className="text-5xl md:text-6xl font-bold text-black">
            Chanchal Sen
          </h1>
        </TextFade>
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed ">
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
        className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
        <img
          src={AvatarImg}
          alt="Chanchal Sen"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-2 border-gray-300"
        />
      </motion.div>
    </div>
  );
}

export default MainAbout;
