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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
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
      className="w-full px-6 py-16 text-white md:px-16 font-spaceGrotesk">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white bg-black md:flex-row md:px-20">
        {/* Right Form */}
        <div className="w-[80%] p-10 shadow-lg rounded-2xl">
          <h2 className="mb-4 text-3xl font-bold text-center text-purple-400">
            Let’s Connect
          </h2>
          <p className="mb-8 text-center text-gray-400">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Hi, let’s connect..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[40%] py-3 font-semibold text-white transition bg-blue-500 border rounded-xl hover:opacity-90">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
