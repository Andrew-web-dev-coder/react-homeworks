
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


import { Menu } from "@pages/Menu/Menu.jsx";

function App() {
  console.log("App is rendering"); // 👈 временный лог

  return (
    <>
      <Menu />
    </>
  );
}

export default App;

import React, { Component } from "react";
import { Menu } from "@pages/Menu/Menu.jsx";
import { CartProvider } from "@components/Context/Context"; // <= импорт провайдера

export default class App extends Component {
  render() {
    return (
      <CartProvider>
        <Menu />
      </CartProvider>
    );
  }
}
