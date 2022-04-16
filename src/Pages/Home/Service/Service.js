import React from "react";
import "./service.css";
const Service = ({ service }) => {
  const { name, description, img, category, id, price } = service;
  return (
    <div className="single-service">
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default Service;
