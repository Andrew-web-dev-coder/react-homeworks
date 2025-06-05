import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";
import { NavLink } from "react-router-dom";

import { headerLinks } from "@data/HeaderLinks";
import Logo from "@images/logo/Logo.png";
import Cart from "@images/icons/Cart.png";

import { CartContext } from "../../Context/Context";
import { useFetch } from "@hooks/useFetch";

interface HeaderLink {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const context = useContext(CartContext);
  if (!context) return null;

  const { cart } = context;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { data, status, error } = useFetch<any>("https://dummyjson.com/carts");

  useFetch("https://dummyjson.com/products/1", { method: "GET" });

  useEffect(() => {
    if (data) console.log("Fetched carts:", data);
    if (error) console.error("Fetch error:", error);
  }, [data, error]);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const getTotalItems = (): number => {
    return Object.values(cart as Record<string, number>).reduce(
      (acc, quantity) => acc + quantity,
      0
    );
  };

  return (
    <header className="site-header">
      <div className="header-wrapper">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Site logo" className="logo-image" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            {headerLinks.map((link: HeaderLink, index: number) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                </NavLink>
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
