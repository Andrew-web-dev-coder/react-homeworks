import React, { Component } from "react";
import "./Button.css";

export class Button extends Component {
  render() {
    const { children, onClick, className = "", ...props } = this.props;

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
}
