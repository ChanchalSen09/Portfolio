import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company: "Devnex Technologies",
    role: "Frontend Developer",
    duration: "September 2024 – Present",
    location: "Remote",
    logo: "https://devnex.in/assets/logo-BIBESWXT.svg",
    responsibilities: [
      "Specialized in frontend development using React and Tailwind CSS, delivering user-centric and responsive designs.",
      "Built reusable components and implemented state management with Redux, improving scalability and maintainability.",
      "Optimized UI/UX by resolving cross-browser compatibility issues and enhancing responsiveness through performance debugging.",
    ],
  },
  {
    company: "DAPS Software Pvt. Limited",
    role: "Software Engineer Intern",
    duration: "November 2023 – September 2024",
    location: "Remote",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFCQ8khnok90A/company-logo_200_200/company-logo_200_200/0/1688567449971/dapssoftware_logo?e=1747267200&v=beta&t=RCJ0PqupagGf-HKgROeJ6j3J9v5uQd2-4xSo3-_oaHc",
    responsibilities: [
      "Designed and implemented advanced SQL queries to streamline data extraction, transformation, and analysis.",
      "Contributed to full-stack projects by developing backend services, designing RESTful APIs, and integrating them with frontend interfaces.",
      "Gained experience in end-to-end software development, ensuring optimal functionality and performance.",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section className="py-12 px-6" id="#experience">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>

      <div className="relative space-y-6 border-l-2 border-gray-300 pl-6 w-full max-w-xl">
        <div className="absolute -left-2 top-12 w-4 h-4 bg-blue-500 rounded-full border-4 border-white" />
        <div className="absolute -left-2 top-48 w-4 h-4 bg-blue-500 rounded-full border-4 border-white" />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="flex items-center gap-3">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-[5px]">
                <h3 className="text-xl font-semibold ">{exp.role}</h3>
                <p className="text-lg text-gray-700 ">{exp.company}</p>
                <p className="text-gray-600 text-sm">
                  {exp.duration} {exp.location}
                </p>{" "}
              </div>
            </div>
            <button
              className="mt-2 text-blue-500 font-semibold"
              onClick={() => setExpanded(expanded === index ? null : index)}>
              {expanded === index ? "Show Less" : "Show More"}
            </button>
            {expanded === index && (
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}>
                    {resp}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
