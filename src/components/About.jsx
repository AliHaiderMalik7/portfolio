import React from "react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import {about, profile} from "../data.js";

export default function About() {
  const [lead, ...rest] = about;
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead icon="sparkles" eyebrow="About me" title="Who I am" />
        <div className="about-grid">
          <div className="about-text" data-reveal>
            <p className="about-lead">{lead}</p>
            {rest.map(p => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="about-facts" data-reveal style={{"--d": "100ms"}}>
            <li className="glass">
              <span className="fact-icon">
                <Icon name="clock" />
              </span>
              <div>
                <span className="fact-label">Experience</span>
                <span className="fact-value">{profile.experience}</span>
              </div>
            </li>
            <li className="glass">
              <span className="fact-icon">
                <Icon name="pin" />
              </span>
              <div>
                <span className="fact-label">Based in</span>
                <span className="fact-value">{profile.location}</span>
              </div>
            </li>
            <li className="glass">
              <span className="fact-icon">
                <Icon name="briefcase" />
              </span>
              <div>
                <span className="fact-label">Availability</span>
                <span className="fact-value">{profile.availability}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
