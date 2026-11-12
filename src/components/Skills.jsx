import React from "react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import {skills} from "../data.js";

// One icon + hue per skill group, in data.js order.
const look = [
  {icon: "sparkles", hue: "#a78bfa"}, // AI / LLM
  {icon: "monitor", hue: "#60a5fa"}, // Frontend
  {icon: "server", hue: "#34d399"}, // Backend
  {icon: "database", hue: "#fbbf24"}, // Databases
  {icon: "card", hue: "#f472b6"}, // Payments
  {icon: "map", hue: "#22d3ee"} // Maps, GIS & 3D
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead
          icon="layers"
          eyebrow="Skills"
          title="Tools I ship with"
          sub="From LLM pipelines to pixel-perfect interfaces, maps and payments."
        />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <article
              className="skill-card glass"
              key={s.group}
              data-reveal
              style={{"--d": `${i * 60}ms`, "--hue": look[i].hue}}
            >
              <div className="skill-head">
                <span className="skill-icon">
                  <Icon name={look[i].icon} size={20} />
                </span>
                <h3>{s.group}</h3>
                <span className="skill-count">{s.items.length}</span>
              </div>
              <ul className="chips">
                {s.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
