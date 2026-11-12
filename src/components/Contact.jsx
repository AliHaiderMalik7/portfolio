import React, {useState} from "react";
import {profile} from "../data.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="mono section-index">(06) Contact</p>
          <h2 className="contact-title">
            Let&rsquo;s build <em>something</em> good
            <span className="accent">.</span>
          </h2>
          <p className="contact-sub">{profile.availability}.</p>
          <a className="btn btn-solid" href={`mailto:${profile.email}`}>
            Send me an email
          </a>
        </div>

        <div className="contact-card" data-reveal style={{"--d": "120ms"}}>
          <div className="contact-row contact-email">
            <span className="mono">Email</span>
            <div>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button
                className="btn btn-ghost btn-sm"
                onClick={copy}
                aria-live="polite"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>
          <a
            className="contact-row"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mono">LinkedIn</span>
            <span>linkedin.com/in/alimalik7</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-row"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mono">GitHub</span>
            <span>github.com/AliHaiderMalik7</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <footer className="wrap footer mono">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
