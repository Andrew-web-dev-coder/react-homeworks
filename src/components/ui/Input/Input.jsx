import React, { Component } from "react";
import "./Input.css";

export function Input({ type, className = "", ...props }) {
    return <input type={type} className={`input ${className}`} {...props} />;
  }