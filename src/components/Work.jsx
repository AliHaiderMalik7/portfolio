import React from "react";
import SectionHead from "./SectionHead.jsx";
import {featuredProject as f, projects, profile} from "../data.js";

// The steps Cortex describes: ingest → chunk → embed → store → retrieve → cite / act.
const pipeline = [
  "Documents",
  "Chunk",
  "Embed",
  "Vector DB",
  "Retrieve",
  "Answer + citations",
  "Agent tools"
];

const hues = [
  "var(--c-violet)",
  "var(--c-sky)",
  "var(--c-amber)",
  "var(--c-mint)",
  "var(--c-teal)",
  "var(--c-coral)"
];

function Stack({items}) {
  if (!items || !items.length) return null;
  return (
    <ul className="stack mono">
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
        <SectionHead index="04" title="Selected work" kicker="Projects" />

        <article className="featured" data-reveal>
          <div className="featured-body">
            <p className="mono featured-label">
              <i className="dot" aria-hidden="true" /> {f.label}
            </p>
            <h3 className="featured-name">{f.name}</h3>
            <p className="featured-role mono">{f.role}</p>
            <p className="featured-desc">{f.description}</p>
            <ul className="featured-points">
              {f.points.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Stack items={f.stack} />
          </div>
          <div className="pipeline" aria-label="Cortex pipeline">
            <p className="mono pipeline-title">How it works</p>
            <ol>
              {pipeline.map((step, i) => (
                <li key={step} style={{"--d": `${i * 90}ms`}}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </article>

        <ol className="project-grid">
          {projects.map((p, i) => (
            <li
              className="project-card"
              key={p.name}
              data-reveal
              style={{
                "--d": `${(i % 3) * 70}ms`,
                "--hue": hues[i % hues.length]
              }}
            >
              <div className="project-top mono">
                <span>{String(i + 2).padStart(2, "0")}</span>
                {p.tag && <span className="tag">{p.tag}</span>}
                {p.live && <span className="live-pill">Live</span>}
              </div>
              <h3>{p.name}</h3>
              {p.subtitle && <p className="project-sub">{p.subtitle}</p>}
              {p.role && <p className="project-role mono">{p.role}</p>}
              <p className="project-desc">{p.description}</p>
              <div className="project-foot">
                <Stack items={p.stack} />
                {p.live && (
                  <a
                    className="btn btn-ghost btn-sm"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.name} live`}
                  >
                    View live ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="work-more" data-reveal>
          <p>More code and experiments live on GitHub.</p>
          <a
            className="btn btn-solid"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
