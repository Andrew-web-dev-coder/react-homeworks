import React, { useState } from "react";
import "./Header.css";
import { headerLinks } from "@data/HeaderLinks";
import Logo from "@assets/images/logo/Logo.png";
import Cart from "@assets/images/icons/Cart.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-wrapper">
        <a href="/" className="logo-link">
          <img src={Logo} alt="Site logo" className="logo-image" />
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            {headerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button className="cart-button">
            <img src={Cart} alt="Cart icon" />
            <div className="cart-count">
              <span>0</span>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
