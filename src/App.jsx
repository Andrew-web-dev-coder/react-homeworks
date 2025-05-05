import React from "react";
import Home from "@pages/Home/Home.jsx";

import { CartProvider } from "@components/Context/Context"; 

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}
