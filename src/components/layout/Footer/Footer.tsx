import React from "react";
import "./Footer.css";

import Logo from "@images/logo/Logo.png";
import Insta from "@images/icons/Instagram.png";
import Twitter from "@images/icons/Twitter.png";
import YouTube from "@images/icons/YouTube.png";

import { footerLinks } from "@data/FooterLinks";


interface FooterLink {
  label: string;
  path: string;
}

interface FooterLinksData {
  [category: string]: FooterLink[];
}

const Footer: React.FC = () => {
  const renderLinks = (category: string) => {
    const isTemplate = category === "Template";

    return (
      <ul className="footer-column-list">
        {(footerLinks as FooterLinksData)[category].map((item, index) => (
          <li key={index}>
            {isTemplate ? (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <a href="#" onClick={(e) => e.preventDefault()}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer>
      <div className="container__top">
        <div className="logo__motto">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <p className="motto">
            Takeaway & Delivery template <br />
            for small – medium businesses.
          </p>
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            {renderLinks("Company")}
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Template</h4>
            {renderLinks("Template")}
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Flowbase</h4>
            {renderLinks("Flowbase")}
          </div>
        </div>
      </div>

      <div className="footer-hr"></div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          Built by{" "}
          <span>
            <a href="#" onClick={(e) => e.preventDefault()} className="Flowbase">
              Flowbase
            </a>
          </span>{" "}
          · Powered by{" "}
          <a href="#" onClick={(e) => e.preventDefault()} className="Webflow">
            Webflow
          </a>
        </p>

        <div className="footer-social-media">
          <div className="circle">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src={Insta} alt="Instagram" />
            </a>
          </div>
          <div className="circle">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src={Twitter} alt="Twitter" />
            </a>
          </div>
          <div className="circle">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src={YouTube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
