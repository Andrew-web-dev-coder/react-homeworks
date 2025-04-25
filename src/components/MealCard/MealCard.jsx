import React, { useContext, useState } from "react";
import "./MealCard.css";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { CartContext } from "../Context/Context";

export const MealCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(item.id, amount);
    setAmount(1);
  };

  return (
    <div className="mealcard">
      <div className="mealcard-left">
        <img src={item.img} alt={item.meal} className="mealcard-img" />
      </div>

      <div className="mealcard-right">
        <div className="mealcard-header">
          <h3 className="mealcard-title">{item.meal}</h3>
          <span className="mealcard-price">
            ${parseFloat(item.price).toFixed(2)} USD
          </span>
        </div>

        <p className="mealcard-description">
          {item.instructions.slice(0, 139)}
        </p>

        <div className="mealcard-footer">
          <Input
            type="number"
            min={1}
            max={100}
            value={amount}
            onChange={handleAmountChange}
          />
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};
