import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL, TECH_STACK, RESUME_LINK } from "../../constent";

export default function Footer() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = RESUME_LINK;
    link.download = "Chanchal_Sen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0 bg-repeat bg-stars opacity-20 animate-pulse" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90" />

      <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 pb-10 border-b border-white/10 md:grid-cols-4">
          {/* Name & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-purple-300 drop-shadow-md">
              Chanchal Sen
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-[16rem]">
              Passionate Developer | Crafting Seamless Experiences in Code &
              Cosmos.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 className="mb-3 text-lg font-semibold text-blue-300">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              {TECH_STACK.map(({ id, icon: Icon, color }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-2 rounded-full bg-white/10 ${color}`}>
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <h3 className="mb-3 text-lg font-semibold text-pink-300">
              Connect with Me
            </h3>
            <div className="flex space-x-4">
              {SOCIAL.map(({ id, icon: Icon, url }) => (
                <motion.a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-xl text-gray-400 transition hover:text-cyan-300"
                  aria-label="Social Link">
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 text-sm font-semibold transition-all rounded-lg shadow-md ${
                isDownloaded
                  ? "bg-green-500 cursor-default"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
              }`}>
              {isDownloaded ? "✅ Downloaded" : "📄 Download Resume"}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Chanchal Sen — To Infinity & Beyond.
        </motion.div>
      </div>
    </footer>
  );
}
