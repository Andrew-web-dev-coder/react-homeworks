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
