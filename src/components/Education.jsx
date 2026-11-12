import React from "react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import {education} from "../data.js";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHead icon="cap" eyebrow="Education" title="Where I studied" />
        <ul className="edu-grid">
          {education.map((e, i) => (
            <li
              className="edu-card glass"
              key={e.degree}
              data-reveal
              style={{"--d": `${i * 80}ms`}}
            >
              <span className="edu-icon">
                <Icon name="cap" size={22} />
              </span>
              <div className="edu-body">
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <div className="edu-meta">
                  <span className="badge">{e.period}</span>
                  <span className="badge badge-accent">{e.note}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
