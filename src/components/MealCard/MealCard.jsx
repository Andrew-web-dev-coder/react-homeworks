
import React, { useContext, useState } from "react";

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

import React, { Component } from "react";

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

export class MealCard extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: Number(event.target.value) });
  };

  handleAddToCart = () => {
    const { item } = this.props;
    const { amount } = this.state;
    this.context.addToCart(item.id, amount);
    this.setState({ amount: 1 }); 
  };

  render() {
    const { item } = this.props;
    const { amount } = this.state;

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
              onChange={this.handleAmountChange}
            />
            <Button onClick={this.handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }

}

