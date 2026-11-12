import React from "react";
import SectionHead from "./SectionHead.jsx";
import {experience} from "../data.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHead index="03" title="Experience" kicker="Where I've worked" />
        <ol className="xp-list">
          {experience.map(job => (
            <li className="xp-row" key={job.company} data-reveal>
              <div className="xp-period mono">
                {job.period}
                {job.current && (
                  <span className="now">
                    <i className="dot" aria-hidden="true" /> Now
                  </span>
                )}
              </div>
              <div className="xp-head">
                <h3>{job.company}</h3>
                <p>{job.role}</p>
              </div>
              <ul className="xp-points">
                {job.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
