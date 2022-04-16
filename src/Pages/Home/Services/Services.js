import React from "react";
import { Link } from "react-router-dom";
import useOnions from "../../../Hooks/useOnions";
import Service from "../Service/Service";
import Breakfast from "./Breakfast/Breakfast";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";
import "./services.css";

const Services = () => {
  const [services] = useOnions();

  const dinners = services.filter((service) =>
    service?.category?.includes("dinner")
  );
  if (services.length) {
    services.length = 6;
  }

  return (
    <div>
      <div className="btn-div">
        <Link to="/Breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
      <div className="service-container">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
