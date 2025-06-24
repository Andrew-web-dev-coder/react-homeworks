import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "@components/layout/Layout";
import Home from "@pages/Home/Home";
import Menu from "@pages/Menu/Menu";
import Login from "@pages/Login/Login";
import Order from "@pages/Order/Order";
import PrivateRoute from "@components/ui/PrivateRoute";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
