
import React, { useContext, useState } from "react";

import React, { Component } from "react";

import "./Header.css";
import { headerLinks } from "@data/HeaderLinks";
import Logo from "@assets/images/logo/Logo.png";
import Cart from "@assets/images/icons/Cart.png";
import { CartContext } from "../../Context/Context";


const Header = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
  };

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

          <button className="cart-button" onClick={toggleMenu}>
            <img src={Cart} alt="Cart icon" />
            <div className="cart-count">
              <span>{getTotalItems()}</span>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

export default class Header extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  getTotalItems = () => {
    const { cart } = this.context;
    return Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
  };

  render() {
    const { menuOpen } = this.state;

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

            <button className="cart-button" onClick={this.toggleMenu}>
              <img src={Cart} alt="Cart icon" />
              <div className="cart-count">
                <span>{this.getTotalItems()}</span>
              </div>
            </button>
          </nav>
        </div>
      </header>
    );
  }
}
