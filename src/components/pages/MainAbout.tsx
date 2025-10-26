"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { TextFade, TypingEffect } from "../animations/TextAnimations";
import AvatarImg from "../../assets/AvtaarImgCropedimg.webp";

function MainAbout() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center md:flex-row md:text-left font-spaceGrotesk py-20 px-6 bg-[url('/stars-bg.svg')] bg-cover bg-center relative z-10">
      <div className="max-w-2xl text-white md:pr-12">
        <TextFade direction="up">
          <h1 className="text-5xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-lg">
            Chanchal Sen
          </h1>
        </TextFade>

        <TextFade direction="up">
          <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            <span className="font-semibold text-purple-400">
              Full Stack Engineer | React.js Specialist | AI/ML Enthusiast
            </span>
            <div className="mt-4 space-y-2">
              <TypingEffect text="Building scalable web applications using React, Node.js & Django." />
              <TypingEffect text="Optimizing frontend performance & delivering seamless user experiences." />
              <TypingEffect text="Exploring AI-driven solutions, machine learning models, and real-time apps." />
            </div>
          </p>
        </TextFade>
      </div>

      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full mt-8 md:w-2/5 md:mt-0">
          <img
            src={AvatarImg}
            alt="Chanchal Sen"
            loading="lazy"
            className="object-cover w-56 h-56 border-2 border-purple-500 rounded-full shadow-lg md:w-72 md:h-72 shadow-purple-800/40"
          />
        </m.div>
      </LazyMotion>
    </section>
  );
}

export default MainAbout;
