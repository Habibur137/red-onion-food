import React, { useEffect, useState } from "react";

const useOnions = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("/onionData.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return [meals, setMeals];
};

export default useOnions;
