import React, {useEffect, useState} from "react";
import {profile, skills, experience, featuredProject} from "../data.js";

function useLahoreTime() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Karachi"
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const coreStack = ["Next.js", "React", "Node.js", "OpenAI", "PostgreSQL"];

export default function Hero() {
  const time = useLahoreTime();
  const current = experience.find(e => e.current) || experience[0];
  const marquee = skills.flatMap(s => s.items).slice(0, 18);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-hello mono">
            <i className="dot" aria-hidden="true" />
            Available for work
            <span className="sep">/</span>
            {profile.location}
          </p>

          <h1 className="hero-title">
            <span className="hero-name">Hi, I&rsquo;m {profile.name} —</span>
            AI Engineer &amp; <em>Full-Stack</em> Developer
            <span className="accent">.</span>
          </h1>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a className="btn btn-ghost" href="#work">
              See my work
            </a>
            <a
              className="btn btn-ghost btn-icon"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="btn btn-ghost btn-icon"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt className="mono">Experience</dt>
              <dd>{profile.experience}</dd>
            </div>
            <div>
              <dt className="mono">Focus</dt>
              <dd>{profile.titleDetail}</dd>
            </div>
            <div>
              <dt className="mono">Local time</dt>
              <dd>{time} PKT</dd>
            </div>
          </dl>
        </div>

        <aside className="now-card" aria-label="Currently">
          <div className="now-head mono">
            <span>
              <i className="dot" aria-hidden="true" /> Currently
            </span>
            <span className="muted">{current.period}</span>
          </div>
          <div className="now-block">
            <p className="now-role">{current.role}</p>
            <p className="now-company">@ {current.company}</p>
          </div>
          <a className="now-block now-feature" href="#work">
            <span className="mono muted">Featured project</span>
            <span className="now-feature-name">
              {featuredProject.name} <span aria-hidden="true">→</span>
            </span>
            <span className="muted">{featuredProject.description}</span>
          </a>
          <div className="now-block">
            <span className="mono muted">Core stack</span>
            <ul className="chips">
              {coreStack.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map(k => (
            <div className="marquee-group" key={k}>
              {marquee.map(item => (
                <span key={item}>
                  {item}
                  <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
