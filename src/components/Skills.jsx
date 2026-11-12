import React from "react";
import SectionHead from "./SectionHead.jsx";
import {skills} from "../data.js";

// AI, Frontend, Backend, Databases, Payments, Maps
const hues = [
  "var(--c-coral)",
  "var(--c-sky)",
  "var(--c-mint)",
  "var(--c-amber)",
  "var(--c-violet)",
  "var(--c-teal)"
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead index="02" title="Skills" kicker="Tools I ship with" />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <article
              className="skill-card"
              key={s.group}
              data-reveal
              style={{"--d": `${i * 60}ms`, "--hue": hues[i % hues.length]}}
            >
              <h3>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                {s.group}
              </h3>
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
