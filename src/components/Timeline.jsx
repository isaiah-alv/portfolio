import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "../data/timelineData";
import { useMemo, useState } from "react";

export default function Timeline({ theme }) {
  const isDark = theme === "dark";
  const [filter, setFilter] = useState("work"); // 'edures' or 'work'

  const styles = useMemo(() => ({
    contentBg: isDark ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
    textColor: isDark ? "#fff" : "#000",
    arrowBorder: isDark ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
    iconBg: isDark ? "#f87171" : "#a3e635",
    lineColor: isDark ? "#fff" : "#000",
    // Toggle styles
    toggleBg: isDark ? "bg-slate-800" : "bg-slate-200",
    toggleBorder: isDark ? "border-slate-700" : "border-slate-300",
    toggleActive: isDark ? "bg-slate-700 text-white" : "bg-slate-100 text-black",
    toggleInactive: isDark ? "bg-slate-800 text-gray-400" : "bg-slate-200 text-gray-500",
  }), [isDark]);

  const filteredData = useMemo(() => {
    if (filter === "work") {
      return timelineData.filter(item => item.type === "work");
    }
    // 'edures' shows both education and research
    return timelineData.filter(item => item.type === "education" || item.type === "research");
  }, [filter]);

  return (
    <div className="font-roboto">
      <style>{`
        .vertical-timeline-element {
          margin-bottom: 1rem !important;
        }
      `}</style>
      <div className={`flex justify-center mb-4`}>
        <div
          className={`flex rounded-full shadow-sm border ${styles.toggleBorder} ${styles.toggleBg} p-1`}
          style={{ fontSize: '0.85rem', minWidth: 0 }}
        >
          <button
            className={`px-3 py-1 rounded-full transition-colors duration-200 text-xs font-medium focus:outline-none ${filter === "edures" ? styles.toggleActive : styles.toggleInactive}`}
            style={{ minWidth: 0 }}
            onClick={() => setFilter("edures")}
            tabIndex={0}
          >
            Education & Research
          </button>
          <button
            className={`px-3 py-1 rounded-full transition-colors duration-200 text-xs font-medium focus:outline-none ${filter === "work" ? styles.toggleActive : styles.toggleInactive}`}
            style={{ minWidth: 0 }}
            onClick={() => setFilter("work")}
            tabIndex={0}
          >
            Professional
          </button>
        </div>
      </div>
      <VerticalTimeline layout="1-column-left" lineColor={styles.lineColor}>
        {filteredData.map((item, idx) => {
          const points = item.description
            .split(". ")
            .map(str => str.trim())
            .filter(Boolean);

          const content = (
            <>
              <p
                style={{
                  fontSize: "0.75rem",
                  marginBottom: "0.5rem",
                  color: styles.textColor,
                }}
              >
                {item.date}
              </p>
              <h3 className="font-rubik text-sm mb-2">{item.title}</h3>
              <ul className="list-disc list-inside space-y-1">
                {points.map((pt, i) => (
                  <li key={i} className="text-xs">
                    {pt.endsWith(".") ? pt : pt + "."}
                  </li>
                ))}
              </ul>
            </>
          );

          return (
            <VerticalTimelineElement
              key={idx}
              date={undefined}
              contentStyle={{
                background: styles.contentBg,
                color: styles.textColor,
                padding: "1rem",
                cursor: item.link ? "pointer" : undefined,
                transition: 'box-shadow 0.2s',
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${styles.arrowBorder}`,
              }}
              iconStyle={{ background: styles.iconBg, color: "#000" }}
              icon={item.icon}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  tabIndex={0}
                >
                  {content}
                </a>
              ) : content}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
