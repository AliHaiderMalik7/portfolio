import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className,
  href,
  newTab,
  handleClick = null
}) {
  return (
    <div className={className} onClick={handleClick}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
