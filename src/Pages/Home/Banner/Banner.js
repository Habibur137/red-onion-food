import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <input type="text" placeholder="Search Food...." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Banner;
