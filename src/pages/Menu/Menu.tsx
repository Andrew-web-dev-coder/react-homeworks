import React from "react";

import Tooltip from "@components/ui/Tooltip/Tooltip";
import MealList from "@components/MealList/MealList";

import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <>
      

      <section className="menu-section">
        <div className="menu-heading-container">
          <h1 className="menu-heading">Browse our menu</h1>
          <div className="menu-subtext">
            Use our menu to place an order online, or{" "}
            <Tooltip text="+37066685000">
              <span className="phone">phone</span>
            </Tooltip>{" "}
            our store <br /> to place a pickup order. Fast and fresh food.
          </div>
        </div>
      </section>

      <MealList />
      
    </>
  );
};

export default Menu;