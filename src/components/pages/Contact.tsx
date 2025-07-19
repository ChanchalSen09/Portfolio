"use client";
import { useEffect, useState, lazy, Suspense } from "react";

// Lazy load DotLottieReact
const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({
    default: mod.DotLottieReact,
  }))
);

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 300) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden text-white bg-black"
      id="contact">
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row md:px-20">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="mb-8 text-4xl font-bold text-white">Let’s Connect</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Hi, let's connect..."
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className="w-full overflow-hidden rounded-lg shadow-xl lg:w-1/2 h-96">
          {isInView && (
            <Suspense
              fallback={<div className="text-white">Loading animation...</div>}>
              <DotLottieReact
                src="https://lottie.host/8e056206-382d-4f1a-b2ed-d97fad1ccd0a/SfC3U4dxTN.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
