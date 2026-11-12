import React from "react";

export default function SectionHead({index, title, kicker}) {
  return (
    <header className="section-head" data-reveal>
      <span className="mono section-index">({index})</span>
      <h2 className="section-title">{title}</h2>
      {kicker && <p className="mono section-kicker">{kicker}</p>}
    </header>
  );
}
