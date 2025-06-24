import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import { headerLinks } from "@data/HeaderLinks";
import Logo from "@images/logo/Logo.png";
import Cart from "@images/icons/Cart.png";

import { useCart } from "@hooks/useCart";
import { useFetch } from "@hooks/useFetch";

interface HeaderLink {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const { data, status, error } = useFetch<any>("https://dummyjson.com/carts");
  useFetch("https://dummyjson.com/products/1", { method: "GET" });

  useEffect(() => {
    if (data) console.log("Fetched carts:", data);
    if (error) console.error("Fetch error:", error);
  }, [data, error]);

  useEffect(() => {
    const auth = sessionStorage.getItem("isAuthenticated");
    const users = localStorage.getItem("users");
    if (auth === "true" && users) {
      const parsed = JSON.parse(users);
      const lastUser = parsed[parsed.length - 1];
      setUsername(lastUser?.username || "User");
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const getTotalItems = (): number => {
    return Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
  };

  return (
    <header className="site-header">
      <div className="header-wrapper">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Site logo" className="logo-image" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            {headerLinks.map((link: HeaderLink, index: number) => {
              if (link.label === "Login") {
                return (
                  <li key={index}>
                    {isAuthenticated ? (
                      <span className="username">{username}</span>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                );
              }

              return (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <Link to="/order" className="cart-button">
            <img src={Cart} alt="Cart icon" />
            <div className="cart-count">
              <span>{getTotalItems()}</span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
