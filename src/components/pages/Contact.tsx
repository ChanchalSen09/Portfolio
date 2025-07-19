"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({
    default: mod.DotLottieReact,
  }))
);

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

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

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      console.log(result.text);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden text-white bg-black"
      id="contact">
      <div className="relative z-20 flex flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row md:px-20">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="mb-10 text-4xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Let’s Connect
          </h2>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Hi, let's connect..."
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 font-semibold text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">
              {isSubmitting ? "Sending..." : "Send Message"}
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
