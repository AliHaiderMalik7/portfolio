import React, {useEffect, useState} from "react";
import Icon from "./Icon.jsx";
import {profile} from "../data.js";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "work"],
  ["Contact", "contact"]
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      {rootMargin: "-45% 0px -50% 0px"}
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <nav className="nav-bar" aria-label="Main">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">AH</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul className="nav-links">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a className="btn btn-primary btn-sm nav-cta" href={`mailto:${profile.email}`}>
          Hire me
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </nav>

      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        <ul>
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
                <Icon name="arrowRight" size={18} />
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <Icon name="mail" /> Hire me
        </a>
      </div>
    </header>
  );
}
