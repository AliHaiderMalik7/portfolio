import React from "react";
import SectionHead from "./SectionHead.jsx";
import {experience} from "../data.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHead
          icon="briefcase"
          eyebrow="Experience"
          title="Where I've worked"
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <li
              className={`tl-item ${job.current ? "is-current" : ""}`}
              key={job.company}
              data-reveal
              style={{"--d": `${i * 80}ms`}}
            >
              <span className="tl-dot" aria-hidden="true" />
              <article className="tl-card glass">
                <div className="tl-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="tl-company gradient-text">{job.company}</p>
                  </div>
                  <span className={`badge ${job.current ? "badge-live" : ""}`}>
                    {job.current && <span className="live-dot" aria-hidden="true" />}
                    {job.period}
                  </span>
                </div>
                <ul className="bullets">
                  {job.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
