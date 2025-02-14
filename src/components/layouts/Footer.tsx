import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* Brand & About */}
          <div>
            <h2 className="text-3xl font-bold text-white">Chanchal Sen</h2>
            <p className="mt-3 text-sm text-gray-400">
              Passionate Developer | Crafting Seamless Experiences.
            </p>
          </div>

          {/* Tech Stack (Instead of Quick Links) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Tech Stack
            </h3>
            <div className="flex space-x-4 text-2xl">
              <SiJavascript className="text-yellow-400" />
              <SiReact className="text-blue-400" />
              <SiTailwindcss className="text-cyan-400" />
              <SiMongodb className="text-green-400" />
              <SiNodedotjs className="text-green-500" />
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect with Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition text-xl">
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/ChanchalSe5934?t=GkvRzW9eSoEG6oWsO_MVcQ&s=09"
                className="text-gray-400 hover:text-blue-400 transition text-xl">
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/chanchal_sen09/"
                className="text-gray-400 hover:text-blue-400 transition text-xl">
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} Chanchal Sen | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
