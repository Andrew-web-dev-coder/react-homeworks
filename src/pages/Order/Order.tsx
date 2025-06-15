import React from "react";
import "./Order.css";

const Order: React.FC = () => {
  return (
    <section className="order-section">
      <h2 className="order-title">Finish your order</h2>

      <div className="order-list">
        {[1, 2, 3].map((_, index) => (
          <div className="order-item" key={index}>
            <div className="order-item-left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                alt="Burger"
                className="order-img"
              />
              <p className="order-name">Burger Dreams</p>
            </div>
            <div className="order-item-right">
              <p className="order-price">$ 9.20 USD</p>
              <input type="number" className="order-qty" defaultValue={1} />
              <button className="order-remove">X</button>
            </div>
          </div>
        ))}
      </div>

      <form className="order-form">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder="Street" />

        <label htmlFor="house">House</label>
        <input type="text" id="house" placeholder="House" />

        <button type="submit" className="order-submit">
          Order
        </button>
      </form>
    </section>
  );
};

export default Order;