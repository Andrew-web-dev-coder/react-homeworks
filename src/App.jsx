import React from "react";
import { Menu } from "@pages/Menu/Menu.jsx";
import { CartProvider } from "@components/Context/Context"; 

export default function App() {
  return (
    <CartProvider>
      <Menu />
    </CartProvider>
  );
}
