import React from "react";
import SectionHead from "./SectionHead.jsx";
import {education} from "../data.js";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHead index="05" title="Education" />
        <ul className="edu-list">
          {education.map(e => (
            <li className="edu-row" key={e.degree} data-reveal>
              <span className="mono edu-period">{e.period}</span>
              <div>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
              </div>
              <span className="mono edu-note">{e.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
