import React, { Component } from "react";
import "./MealList.css";
import { MealCard } from "../MealCard/MealCard";
import { Button } from "../ui/Button/Button";

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
