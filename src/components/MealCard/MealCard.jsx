import React from "react";
import "./MealCard.css";
import { productList } from "../../data/products";

function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Input({ type, className = "", ...props }) {
  return <input type={type} className={`input ${className}`} {...props} />;
}

export default function MealCard() {
  return (
    <div className="mealcard-list">
      {productList.map((item, index) => (
        <div key={index} className="mealcard">
          <div className="mealcard-left">
            <img src={item.image} alt={item.title} className="mealcard-img" />
          </div>

          <div className="mealcard-right">
            <div className="mealcard-header">
              <h3 className="mealcard-title">{item.title}</h3>
              <span className="mealcard-price">{item.price}</span>
            </div>

            <p className="mealcard-description">{item.description}</p>

            <div className="mealcard-footer">
              <Input type="number" min={0} max={100} defaultValue={1} />
              <Button>Add to cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
