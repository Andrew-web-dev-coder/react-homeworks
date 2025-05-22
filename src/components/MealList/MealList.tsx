import React, { useEffect, useState } from "react";
import "./MealList.css";
import { MealCard } from "../MealCard/MealCard";
import { Button } from "../ui/Button/Button";
import type { Meal } from "../../types/products";


const MealList: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data: Meal[]) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, []);

  const handleSeeMore = (): void => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleFilter = (category: string): void => {
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
};

export default MealList;
