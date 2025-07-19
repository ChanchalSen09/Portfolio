import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LoaderProps {
  messages: string[];
  theme: "light" | "dark";
}

export const Loader = ({ messages, theme }: LoaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotInterval);
    };
  }, [messages.length]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900"
      }`}>
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:30px_30px] opacity-10" />

      {/* Astronaut Lottie */}
      <div className="relative z-10 mb-6 w-36 h-36">
        <DotLottieReact
          src="https://lottie.host/f88cee7f-e13a-4af0-97b2-6200724054be/TOHic1G72U.lottie"
          autoplay
          loop
        />
      </div>

      {/* Typing Message */}
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[currentIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="z-10 px-4 text-xl font-semibold text-center">
          {messages[currentIndex]}
          {dots}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
