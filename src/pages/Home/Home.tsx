import React from "react";
import burgerImage from "@assets/images/home/food.png";
import starIcon from "@assets/images/home/star.svg";
import "./Home.css";

export default function Home() {
  return (
    <>
     
      <section className="home-section">
        <div className="container">
          <div>
            <h1 className="title">
              Beautiful food & takeaway, <span className="highlight">delivered</span> to your door.
            </h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500.
            </p>
            <button className="button" disabled>
              Place an Order
            </button>

            <div className="trust-block">
              <img src={starIcon} alt="Trustpilot" />
              <p className="trust-text">
                <span className="rating">4.8 out of 5</span> based on 2000+ reviews
              </p>
            </div>
          </div>

          <img src={burgerImage} alt="Food" className="image" />
        </div>
      </section>

    </>
  );
}
