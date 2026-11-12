import React, {useState} from "react";
import Icon from "./Icon.jsx";
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
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-card gradient-border" data-reveal>
          <div className="contact-glow" aria-hidden="true" />
          <span className="eyebrow">
            <Icon name="mail" size={14} /> Contact
          </span>
          <h2 className="contact-title">
            Let&rsquo;s build something <span className="gradient-text">great</span>{" "}
            together
          </h2>
          <p className="contact-sub">{profile.availability}.</p>

          <div className="contact-actions">
            <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> Send an email
            </a>
            <button className="btn btn-glass btn-lg" onClick={copy} aria-live="polite">
              <Icon name={copied ? "check" : "copy"} />
              {copied ? "Copied!" : profile.email}
            </button>
          </div>

          <ul className="contact-links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={20} />
                <span>
                  <strong>LinkedIn</strong>
                  <small>/in/alimalik7</small>
                </span>
                <Icon name="arrowUpRight" size={16} className="link-arrow" />
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={20} />
                <span>
                  <strong>GitHub</strong>
                  <small>@AliHaiderMalik7</small>
                </span>
                <Icon name="arrowUpRight" size={16} className="link-arrow" />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" size={20} />
                <span>
                  <strong>Email</strong>
                  <small>{profile.email}</small>
                </span>
                <Icon name="arrowUpRight" size={16} className="link-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="wrap footer">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
