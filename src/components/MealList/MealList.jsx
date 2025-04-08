import React from "react";
import "./MealList.css";
import MealCard from "../MealCard/MealCard";


function MealButton({ children, onClick, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default function MealList() {
  return (
    <div className="mealList-container">
      <div className="meal-buttons-container">
        <MealButton className="Desert-button">Desert</MealButton>
        <MealButton className="Dinner-button">Dinner</MealButton>
        <MealButton className="Breakfast-button">Breakfast</MealButton>
      </div>

      <MealCard/> 

        <div className="last-part-container">
          <div className="last-part">See more</div>
        </div>

    </div>

  );
}



