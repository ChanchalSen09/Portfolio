import { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavbarContents, SOCIAL_LINKS } from "../../constent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Mobile detection (debounced)
  useEffect(() => {
    const checkMobile = () => {
      const isNowMobile = window.innerWidth < 1024;
      setIsMobile((prev) => (prev !== isNowMobile ? isNowMobile : prev));
    };
    checkMobile();
    const resizeHandler = () => requestAnimationFrame(checkMobile);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // Dark mode from localStorage
  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    setDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 z-50 w-full shadow-lg backdrop-blur-md">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-95" />

      <div className="container relative z-10 flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <a href="#about" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white drop-shadow-glow">
            CHANCHAL
          </motion.div>
        </a>
        {/* Mobile Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden space-x-8 lg:flex">
          {NavbarContents.map(({ label, link }, index) => (
            <motion.a
              key={index}
              href={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="font-medium text-white transition-all hover:text-cyan-300">
              {label}
            </motion.a>
          ))}
        </div>

        {/* Socials & Theme Toggle */}
        <div className="items-center hidden space-x-4 lg:flex">
          {SOCIAL_LINKS.map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white hover:text-violet-400">
              {typeof Icon === "string" ? (
                <img src={Icon} alt="icon" className="w-5 h-5" />
              ) : (
                <Icon size={20} />
              )}
            </motion.a>
          ))}

          {/* Toggle Dark Mode */}
          {/* <motion.button
            onClick={() => setDarkMode((prev) => !prev)}
            whileHover={{ scale: 1.2 }}
            className="text-white transition-all hover:text-yellow-300">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </motion.button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-full bg-[#121212] top-16 shadow-md dark:bg-black lg:hidden">
            <ul className="flex flex-col px-6 py-4 space-y-6 text-white">
              {NavbarContents.map(({ label, link }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <a href={link} className="hover:text-cyan-300">
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Socials in Mobile */}
            <div className="flex justify-center py-4 space-x-6">
              {SOCIAL_LINKS.map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-violet-400">
                  {typeof Icon === "string" ? (
                    <img src={Icon} alt="icon" className="w-6 h-6" />
                  ) : (
                    <Icon size={22} />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
