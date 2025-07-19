"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* <div className="absolute inset-0 z-0 bg-[radial-gradient(#00f2ff33_0.5px,transparent_2px)] [background-size:100px_100px] animate-[spin_100s_linear_infinite]"></div> */}
      {/* Astronaut Animation */}
      <div className="absolute z-30 w-32 h-32 top-10 right-10">
        {/* <DotLottieReact
          // src="https://lottie.host/coder-by-sandeep-ram-in-blue-TBVn8QI3i9" // for loader
          src="https://lottie.host/2eb217ff-f971-473e-b6a4-fd790771ba0a/YV50nlyaXl.lottie"
          loop
          autoplay
        /> */}
      </div>

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
                placeholder=""
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                placeholder=""
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

        {/* Google Map */}
        <div className="w-full overflow-hidden rounded-lg shadow-xl lg:w-1/2 h-96">
          <DotLottieReact
            src="https://lottie.host/8e056206-382d-4f1a-b2ed-d97fad1ccd0a/SfC3U4dxTN.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
