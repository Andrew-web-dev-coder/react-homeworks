import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  ...props
}) => {
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
};
