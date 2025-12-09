"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      await emailjs.send(
import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, data as unknown as Record<string, unknown>, import.meta.env.VITE_EMAILJS_USER_ID  );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-20 bg-black text-white font-spaceGrotesk"
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Responsive Form Box */}
        <div className="w-full max-w-lg p-6 bg-[#111] rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-purple-400">
            Let’s Connect
          </h2>

          <p className="mt-3 mb-8 text-center text-gray-400">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 text-gray-300">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 bg-[#222] rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 bg-[#222] rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 bg-[#222] rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Hi, let’s connect..."
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 font-semibold bg-blue-600 hover:opacity-90 rounded-lg disabled:opacity-50 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
