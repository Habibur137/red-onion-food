import React from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { reviewsId } = useParams();
  return (
    <div>
      <h1>this is review page Meal Id {reviewsId}</h1>
    </div>
  );
};

export default Reviews;
