import React from "react";
import SectionHead from "./SectionHead.jsx";
import {about, profile} from "../data.js";

export default function About() {
  const [lead, ...rest] = about;
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead index="01" title="About" kicker="Who I am" />
        <div className="about-grid">
          <p className="about-lead" data-reveal>
            {lead}
          </p>
          <div className="about-side" data-reveal>
            {rest.map(p => (
              <p key={p}>{p}</p>
            ))}
            <dl className="facts">
              <div>
                <dt className="mono">Experience</dt>
                <dd>{profile.experience}</dd>
              </div>
              <div>
                <dt className="mono">Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt className="mono">Availability</dt>
                <dd>{profile.availability}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
