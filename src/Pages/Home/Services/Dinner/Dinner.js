import React from "react";
import { Link } from "react-router-dom";
import useOnions from "../../../../Hooks/useOnions";

const Dinner = () => {
  const [services] = useOnions();
  const dinners = services.filter((service) =>
    service?.category?.includes("dinner")
  );
  return (
    <div>
      <div className="btn-div">
        <Link to="/">Home</Link>
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
      </div>
      <div className="service-container">
        {dinners.map((service, index) => (
          <div className="single-service" key={index}>
            <h3>{service.name}</h3>
            <img src={service.img} alt="" />
            <p>{service.description}</p>
            <p>${service.price}</p>
            <Link style={{ color: "skyblue" }} to={`${service.id}`}>
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
