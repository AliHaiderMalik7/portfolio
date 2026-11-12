import React from "react";
import Icon from "./Icon.jsx";
import {profile, experience, featuredProject} from "../data.js";

const coreStack = ["Next.js", "React", "Node.js", "OpenAI", "PostgreSQL"];

export default function Hero() {
  const current = experience.find(e => e.current) || experience[0];

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-lines" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      <div className="wrap hero-inner">
        <p className="pill hero-pill">
          <span className="live-dot" aria-hidden="true" />
          Available for work
          <span className="pill-sep" aria-hidden="true" />
          <Icon name="pin" size={14} /> {profile.location}
        </p>

        <h1 className="hero-title">
          <span className="gradient-text">AI Engineer</span> &amp;{" "}
          <br />
          {/* non-breaking hyphen keeps "Full‑Stack" on one line */}
          Full&#8209;Stack Developer
        </h1>

        <p className="hero-sub">{profile.tagline}</p>

        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
            <Icon name="mail" /> Get in touch
          </a>
          <a className="btn btn-glass btn-lg" href="#work">
            View projects <Icon name="arrowRight" />
          </a>
          <div className="hero-socials">
            <a
              className="icon-btn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" size={20} />
            </a>
            <a
              className="icon-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={20} />
            </a>
          </div>
        </div>

        <div className="bento hero-bento">
          <article className="tile tile-current" data-reveal>
            <span className="tile-label">
              <Icon name="briefcase" size={15} /> Currently
            </span>
            <p className="tile-big">{current.role}</p>
            <p className="tile-meta">
              <span className="gradient-text">@ {current.company}</span> ·{" "}
              {current.period}
            </p>
          </article>

          <article className="tile tile-stat" data-reveal style={{"--d": "80ms"}}>
            <span className="tile-label">
              <Icon name="clock" size={15} /> Experience
            </span>
            <p className="tile-number">5+</p>
            <p className="tile-meta">years shipping production apps</p>
          </article>

          <article className="tile tile-focus" data-reveal style={{"--d": "160ms"}}>
            <span className="tile-label">
              <Icon name="sparkles" size={15} /> Focus
            </span>
            <ul className="focus-list">
              <li>LLMs</li>
              <li>RAG</li>
              <li>AI Agents</li>
            </ul>
          </article>

          <a
            className="tile tile-feature"
            href="#work"
            data-reveal
            style={{"--d": "240ms"}}
          >
            <span className="tile-label">
              <Icon name="layers" size={15} /> Featured project
            </span>
            <p className="tile-big">
              {featuredProject.name}
              <Icon name="arrowUpRight" size={20} className="tile-arrow" />
            </p>
            <p className="tile-meta">{featuredProject.description}</p>
          </a>

          <article className="tile tile-stack" data-reveal style={{"--d": "320ms"}}>
            <span className="tile-label">
              <Icon name="monitor" size={15} /> Core stack
            </span>
            <ul className="chips">
              {coreStack.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
