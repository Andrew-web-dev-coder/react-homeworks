import React from "react";
import "./Button.css";

export function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
