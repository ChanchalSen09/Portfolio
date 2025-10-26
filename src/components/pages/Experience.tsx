import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "../../constent";

export default function ExperienceTimeline() {
  return (
    <div className="px-5 py-10 mt-10 text-white md:px-10" id="experience">
      <h2 className="mb-10 text-4xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        Experience
      </h2>
      <VerticalTimeline lineColor="#8a8aff">
        {EXPERIENCES.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#1e1e2f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #8a8aff" }}
            date={exp.date}
            iconStyle={{ background: "#8a8aff", color: "#fff" }}
            icon={exp.icon}>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-sm text-purple-400">{exp.company}</h4>
            <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-300 list-disc">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
