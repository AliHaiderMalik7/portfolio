import React from "react";
import Icon from "./Icon.jsx";

export default function SectionHead({icon, eyebrow, title, sub}) {
  return (
    <header className="section-head" data-reveal>
      <span className="eyebrow">
        {icon && <Icon name={icon} size={14} />}
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </header>
  );
}
