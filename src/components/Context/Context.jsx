
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, amount) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + amount,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

import React, { Component, createContext } from "react";

export const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cart: JSON.parse(sessionStorage.getItem("cart")) || {},
  };

  addToCart = (id, amount) => {
    this.setState((prevState) => {
      const updatedCart = {
        ...prevState.cart,
        [id]: (prevState.cart[id] || 0) + amount,
      };
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => {
      const updatedCart = { ...prevState.cart };
      delete updatedCart[id];
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

