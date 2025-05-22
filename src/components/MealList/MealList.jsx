
import React, { useEffect, useState } from "react";


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




import React, { Component } from "react";

import "./MealList.css";
import { MealCard } from "../MealCard/MealCard";
import { Button } from "../ui/Button/Button";


export default function MealList() {
  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6); 
  };

  const filteredMeals = selectedCategory
    ? meals.filter((meal) => meal.category === selectedCategory)
    : meals;

  const visibleMeals = filteredMeals.slice(0, visibleCount);

  return (
    <div className="mealList-container">
      <div className="meal-buttons-container">
        <Button onClick={() => handleFilter("Dessert")}>Dessert</Button>
        <Button onClick={() => handleFilter("Dinner")}>Dinner</Button>
        <Button onClick={() => handleFilter("Breakfast")}>Breakfast</Button>
      </div>

      {loading ? (
        <p className="load">Loading...</p>
      ) : (
        <div className="mealcard-list">
          {visibleMeals.map((item, index) => (
            <MealCard key={index} item={item} />
          ))}
        </div>
      )}

      {visibleCount < filteredMeals.length && (
        <div className="last-part-container">
          <div className="last-part">
            <Button onClick={handleSeeMore}>See more</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default class MealList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      visibleCount: 6,
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ meals: data, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        this.setState({ loading: false });
      });
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      visibleCount: prevState.visibleCount + 6,
    }));
  };

  render() {
    const { meals, visibleCount, loading } = this.state;
    const visibleMeals = meals.slice(0, visibleCount);

    return (
      <div className="mealList-container">
        <div className="meal-buttons-container">
          <Button>Dessert</Button>
          <Button>Dinner</Button>
          <Button>Breakfast</Button>
        </div>

        {loading ? (
          <p className="load">Loading...</p>
        ) : (
          <div className="mealcard-list">
            {visibleMeals.map((item, index) => (
              <MealCard key={index} item={item} />
            ))}
          </div>
        )}

        {visibleCount < meals.length && (
          <div className="last-part-container">
            <div className="last-part">
              <Button onClick={this.handleSeeMore}>See more</Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

