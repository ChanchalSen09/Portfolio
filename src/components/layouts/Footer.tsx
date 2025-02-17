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
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8 border-b border-gray-700">
          {/* Brand & About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-white">Chanchal Sen</h2>
            <p className="mt-3 text-sm text-gray-400">
              Passionate Developer | Crafting Seamless Experiences.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 className="text-lg font-semibold text-white mb-3">
              Tech Stack
            </h3>
            <div className="flex space-x-4 text-2xl">
              {TECH_STACK.map(({ id, icon: Icon, color }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={color}>
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <h3 className="text-lg font-semibold text-white mb-3">
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
                  className="text-gray-400 hover:text-blue-400 transition text-xl"
                  aria-label="Social Link">
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-3 font-semibold rounded-xl transition-all text-white ${
                isDownloaded
                  ? "bg-green-500 cursor-default"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
              aria-label="Download Resume">
              {isDownloaded ? "🎉 Downloaded" : "📄 Download Resume"}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-sm mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} Chanchal Sen | All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
