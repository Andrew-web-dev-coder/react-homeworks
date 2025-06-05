import React, { ReactNode } from "react";
import "./Tooltip.css";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );
};

export default Tooltip;
