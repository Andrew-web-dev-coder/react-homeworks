import React from "react";
import "./Footer.css";
import Logo from "@images/logo/Logo.png";
import Insta from "@images/icons/Instagram.png";
import Twitter from "@images/icons/Twitter.png";
import YouTube from "@images/icons/YouTube.png";
import { footerLinks } from "@data/FooterLinks.js";

export default function Footer() {
  return (
    <footer>
      <div className="container__top">
        <div className="logo__motto">
          <a href="#">
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
            <ul className="footer-column-list">
              {footerLinks.Company.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Template</h4>
            <ul className="footer-column-list">
              {footerLinks.Template.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Flowbase</h4>
            <ul className="footer-column-list">
              {footerLinks.Flowbase.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-hr"></div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          Built by{" "}
          <span>
            <a
              href="#"
              className="Flowbase"
            >
              Flowbase
            </a>
          </span>{" "}
          · Powered by{" "}
          <a href="#" className="Webflow">
            Webflow
          </a>
        </p>

        <div className="footer-social-media">
          <div className="circle">
            <a href="#"><img src={Insta} alt="Instagram" /></a>
          </div>
          <div className="circle">
            <a href="#"><img src={Twitter} alt="Twitter" /></a>
          </div>
          <div className="circle">
            <a href="#"><img src={YouTube} alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
