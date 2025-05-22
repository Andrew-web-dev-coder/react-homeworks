
import React from "react";
import "./Tooltip.css";

export default function Tooltip({ children, text }) {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );

import React, { Component } from "react";
import "./Tooltip.css";

export default class Tooltip extends Component {
  render() {
    const { children, text } = this.props;

    return (
      <div className="tooltip">
        {children}
        <div className="tooltip-text">{text}</div>
      </div>
    );
  }

}
