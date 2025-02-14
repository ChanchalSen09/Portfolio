import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavbarContents, SOCIAL_LINKS } from "../../constent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Check & Set Mobile View
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-gray-900 dark:text-white">
          CHANCHAL
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 dark:text-gray-300 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-8 text-gray-700 dark:text-gray-300">
          {NavbarContents.map(({ label, link }, index) => (
            <motion.a
              key={index}
              href={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
              {label}
            </motion.a>
          ))}
        </div>

        {/* Social Icons + Theme Toggle */}
        <div className="hidden lg:flex space-x-4">
          {SOCIAL_LINKS.map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {typeof Icon === "string" ? (
                <img src={Icon} alt="icon" className="w-5 h-5" />
              ) : (
                <Icon size={22} />
              )}
            </motion.a>
          ))}
          {/* Theme Toggle Button */}
          {/* <motion.button
            onClick={() => setDarkMode((prev) => !prev)}
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 dark:text-gray-300">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
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
            className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md lg:hidden">
            <ul className="flex flex-col space-y-6 px-6 py-4 text-gray-700 dark:text-gray-300">
              {NavbarContents.map(({ label, link }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <a
                    href={link}
                    className="hover:text-gray-900 dark:hover:text-white">
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 py-4">
              {SOCIAL_LINKS.map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {typeof Icon === "string" ? (
                    <img src={Icon} alt="icon" className="w-6 h-6" />
                  ) : (
                    <Icon size={24} />
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
