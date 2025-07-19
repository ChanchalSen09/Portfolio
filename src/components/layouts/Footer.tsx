import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
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
      {/* Star Background */}
      <div className="absolute inset-0 z-0 bg-repeat bg-stars opacity-20 animate-pulse" />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90" />

      <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-10 pb-10 border-b border-white/10 md:grid-cols-4">
            {/* Column 1 - Name & Bio */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-3xl font-bold text-purple-300 drop-shadow-md">
                Chanchal Sen
              </h2>
              <p className="mt-3 text-sm text-gray-400 max-w-[20rem]">
                Passionate Developer | Crafting Seamless Experiences in Code &
                Cosmos.
              </p>
            </m.div>

            {/* Column 2 - Tech Stack */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="mb-3 text-lg font-semibold text-blue-300">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-4 text-2xl">
                {TECH_STACK.map(({ id, icon: Icon, color }) => (
                  <m.div
                    key={id}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-2 rounded-full bg-white/10 ${color}`}>
                    <Icon />
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* Column 3 - Social Links */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="mb-3 text-lg font-semibold text-pink-300">
                Connect with Me
              </h3>
              <div className="flex space-x-4">
                {SOCIAL.map(({ id, icon: Icon, url }) => (
                  <m.a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-xl text-gray-400 transition hover:text-cyan-300"
                    aria-label="Social Link">
                    <Icon />
                  </m.a>
                ))}
              </div>
            </m.div>

            {/* Column 4 - Resume Download */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center">
              <m.button
                onClick={handleDownload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 text-sm font-semibold transition-all rounded-lg shadow-md ${
                  isDownloaded
                    ? "bg-green-500 cursor-default"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
                }`}>
                {isDownloaded ? "Downloaded" : "Download Resume"}
              </m.button>
            </m.div>
          </m.div>

          {/* Footer Bottom */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} Chanchal Sen — To Infinity &
            Beyond.
          </m.div>
        </LazyMotion>
      </div>
    </footer>
  );
}
