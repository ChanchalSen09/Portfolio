import { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  interface FormDataInterface {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormDataInterface>({
    name: "",
    email: "",
    message: "",
  });

  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setGlobeReady(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please enter valid details.");
      setStatus("error");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error(" Invalid email format.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      toast.success(" Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      toast.error(" An error occurred. Try again!");
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-4 md:px-8">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex items-center justify-center mb-8 md:mb-0 md:w-1/2 rounded-full">
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-full">
          {globeReady && (
            <Globe
              pointsData={[
                { lat: 22.729417, lng: 75.816722, name: "Indore, India" },
              ]}
              pointColor={() => "yellow"}
              pointAltitude={0.0}
              pointRadius={0.6}
              animateIn={true}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundColor="rgba(0,0,0,0)"
              width={400}
              height={400}
            />
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-4 md:mb-6">
          We'd love to hear from you! Drop us a message and we'll get back soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg text-sm md:text-base"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg text-sm md:text-base"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg text-sm md:text-base"
            onChange={handleChange}
            value={formData.message}
            required></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
            disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
