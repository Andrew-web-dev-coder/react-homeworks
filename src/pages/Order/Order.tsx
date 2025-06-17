import React, { useEffect, useState } from "react";
import "./Order.css";
import { useCart } from "@hooks/useCart";
import { Button } from "@components/ui/Button/Button"; // ✅ импорт компонента

interface Meal {
  id: string;
  name: string;
  meal: string;
  img: string;
  price: number;
}

const Order: React.FC = () => {
  const { cart, remove } = useCart();
  const productIds = Object.keys(cart);

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const cached = localStorage.getItem("mealData");
        if (cached) {
          const parsed = JSON.parse(cached) as Meal[];
          const filtered = parsed.filter((meal) =>
            productIds.includes(meal.id)
          );
          setMeals(filtered);
          setLoading(false);
          return;
        }

        const results: Meal[] = [];

        for (const id of productIds) {
          const res = await fetch(
            `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals/${id}`
          );
          const data = await res.json();
          results.push(data);
          await new Promise((r) => setTimeout(r, 250));
        }

        setMeals(results);
        localStorage.setItem("mealData", JSON.stringify(results));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productIds.length > 0) {
      fetchMeals();
    } else {
      setMeals([]);
      setLoading(false);
    }
  }, [productIds.join(",")]);

  if (loading) return <p className="order-loading">Loading...</p>;

  return (
    <section className="order-section">
      <h2 className="order-title">Finish your order</h2>

      <div className="order-list">
        {meals.map((meal) => (
          <div className="order-item" key={meal.id}>
            <div className="order-item-left">
              <img src={meal.img} alt={meal.meal} className="order-img" />
              <p className="order-name">{meal.meal}</p>
            </div>

            <div className="order-item-right">
              <p className="order-price">
                ${(meal.price * cart[meal.id]).toFixed(2)} USD
              </p>
              <input
                type="number"
                className="order-qty"
                value={cart[meal.id]}
                disabled
              />
              <button
                className="order-remove"
                onClick={() => remove(meal.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      <form className="order-form">
        <div className="order-form-group">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
        </div>

        <div className="order-form-group">
          <label htmlFor="house">House</label>
          <input type="text" id="house"  />
        </div>

        <Button type="submit" className="order-submit">Order</Button>
      </form>
    </section>
  );
};

export default Order;
