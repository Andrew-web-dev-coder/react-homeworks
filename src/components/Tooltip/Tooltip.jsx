import React from "react";
import "./Tooltip.css";

export default function Tooltip({ children, text }) {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );
}
