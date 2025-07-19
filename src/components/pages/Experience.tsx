import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaReact, FaNodeJs } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Extuent",
    date: "April 2025 – Present",
    icon: <FaCode />,
    points: [
      "Architecting and maintaining production-grade apps using Django and PL/SQL.",
      "Designed RESTful APIs supporting microservices with real-time workflows.",
      "Built responsive UIs with React.js and Tailwind CSS.",
      "Reduced backend latency by 40% through profiling and query optimization.",
      "Adopted Agile practices with CI/CD and peer reviews.",
    ],
  },
  {
    title: "React Developer Intern",
    company: "Devnex Technologies",
    date: "September 2024 – April 2025",
    icon: <FaReact />,
    points: [
      "Built reusable React components with Redux and Tailwind.",
      "Enhanced mobile responsiveness, improving UX by 18%.",
      "Fixed cross-browser bugs, reducing UI issues by 35%.",
      "Collaborated closely with backend teams for API integration.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "DAPS Software Pvt. Ltd.",
    date: "November 2023 – September 2024",
    icon: <FaNodeJs />,
    points: [
      "Developed scalable Node.js/Express APIs with 99% uptime.",
      "Improved SQL query speed by 30% for dashboards.",
      "Delivered full-stack features in microservice systems.",
      "Enhanced automated testing and performance debugging.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="bg-black bg-[url('/galaxy-bg.png')] bg-cover bg-no-repeat text-white">
      <h2 className="mb-10 text-4xl font-bold text-center text-white">
        Experience
      </h2>
      <VerticalTimeline lineColor="#8884ff">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#1e1e2f", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #8884ff" }}
            date={exp.date}
            iconStyle={{ background: "#8884ff", color: "#fff" }}
            icon={exp.icon}>
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <h4 className="font-semibold text-purple-300 text-md">
              {exp.company}
            </h4>
            <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
