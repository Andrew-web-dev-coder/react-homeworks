import React from "react";
import Header from "@components/Header/Header";
import Tooltip from "../../components/Tooltip/Tooltip";
import MealList from "../../components/MealList/MealList";
import Footer from "../../components/Footer/Footer";
import "./Menu.css";


export function Menu() {
  return (
    <>
      <Header />

      <section className="menu-section">
        <div className="menu-heading-container">
          <h1 className="menu-heading">Browse our menu</h1>
          <div className="menu-subtext">
            Use our menu to place an order online, or{" "}
            <Tooltip text="+37066685000"><span className="phone">phone</span></Tooltip> our store <br></br> to place a pickup order. Fast and fresh food.
          </div>
        </div>
      </section>


      <MealList/>
      <Footer/>

    </>
  );
}
