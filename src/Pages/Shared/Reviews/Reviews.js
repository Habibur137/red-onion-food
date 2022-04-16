import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useOnions from "../../../Hooks/useOnions";
import "./reviews.css";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const Reviews = () => {
  const [services] = useOnions();
  const [count, setCount] = useState(1);

  const { reviewsId } = useParams();
  const singleService = services?.find((service) => service.id == reviewsId);
  const { name, price, description, img } = singleService || {};
  return (
    <div>
      <div className="btn-div">
        <Link to="/Breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
      <div className="reviews-container">
        <div className="meal-info">
          <h1>{name}</h1>
          <p>{description}</p>
          <p className="amount">
            $ <sapn style={{ marginRight: "30px" }}>{price}</sapn>{" "}
            <span className="quantity">
              <span
                onClick={() => setCount(count - 1)}
                style={{
                  fontSize: "25px",
                  fontweight: "bold",
                  cursor: "pointer",
                }}
              >
                -
              </span>{" "}
              <span style={{ margin: "0 15px" }}>{count}</span>
              <span
                onClick={() => setCount(count + 1)}
                style={{
                  fontSize: "25px",
                  fontweight: "bold",
                  cursor: "pointer",
                }}
              >
                +
              </span>
            </span>
          </p>
          <button>
            <ShoppingCartIcon
              style={{ height: "25px", color: "white", marginRight: "10px" }}
            />{" "}
            <span>Add To Cart</span>
          </button>
        </div>
        <div className="meal-img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
