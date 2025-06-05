import React from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type = "text", className = "", ...props }) => {
  return <input type={type} className={`input ${className}`} {...props} />;
};
