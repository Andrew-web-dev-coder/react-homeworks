import React from "react";
import Login from "@pages/Login/Login.jsx";

import { CartProvider } from "@components/Context/Context"; 

export default function App() {
  return (
    <CartProvider>
      <Login />
    </CartProvider>
  );  
}
