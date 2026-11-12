import React from "react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import {featuredProject as f, projects, profile} from "../data.js";

// The flow Cortex describes: ingest → chunk → embed → store → retrieve → answer / act.
const pipeline = [
  "Documents",
  "Chunk",
  "Embed",
  "Vector DB",
  "Retrieve",
  "Answer + citations",
  "Agent tools"
];

function Stack({items}) {
  if (!items || !items.length) return null;
  return (
    <ul className="tags">
      {items.map(s => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead
          icon="layers"
          eyebrow="Projects"
          title="Selected work"
          sub="AI products, SaaS platforms, marketplaces and 3D/GIS tools."
        />

        <article className="featured gradient-border" data-reveal>
          <div className="featured-body">
            <div className="featured-top">
              <span className="badge badge-accent">
                <Icon name="sparkles" size={13} /> Featured · AI
              </span>
              <span className="featured-role">{f.role}</span>
            </div>
            <h3 className="featured-name">{f.name}</h3>
            <p className="featured-desc">{f.description}</p>
            <ul className="bullets">
              {f.points.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Stack items={f.stack} />
          </div>

          <div className="flow" aria-label="How Cortex works">
            <p className="flow-title">How it works</p>
            <ol>
              {pipeline.map((step, i) => (
                <li key={step} style={{"--d": `${i * 90}ms`}}>
                  <span className="flow-num">{i + 1}</span>
                  <span className="flow-step">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <ul className="project-grid">
          {projects.map((p, i) => (
            <li
              className="project-card glass"
              key={p.name}
              data-reveal
              style={{"--d": `${(i % 3) * 70}ms`}}
            >
              <div className="project-top">
                {p.tag && (
                  <span className="badge badge-accent">
                    <Icon name="sparkles" size={12} /> {p.tag}
                  </span>
                )}
                {p.live && (
                  <span className="badge badge-live">
                    <span className="live-dot" aria-hidden="true" /> Live
                  </span>
                )}
              </div>
              <h3>{p.name}</h3>
              {p.subtitle && <p className="project-sub">{p.subtitle}</p>}
              {p.role && <p className="project-role">{p.role}</p>}
              <p className="project-desc">{p.description}</p>
              <div className="project-foot">
                <Stack items={p.stack} />
                {p.live && (
                  <a
                    className="btn btn-glass btn-sm"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.name} live`}
                  >
                    View live <Icon name="arrowUpRight" size={15} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="work-more glass" data-reveal>
          <div>
            <p className="work-more-title">Want to see more code?</p>
            <p className="muted">Experiments and open source live on GitHub.</p>
          </div>
          <a
            className="btn btn-primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
