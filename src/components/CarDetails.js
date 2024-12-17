import React, { useState } from "react";

const CarDetails = () => {
  const [carDeatils, setCarDetails] = useState({
    carName: "Ferari",
    color: "Red",
    price: "1.5 million",
  });

  const handleClick = () => {
    setCarDetails((prev) => ({ ...prev, color: "blue", price: "1.6 million" }));
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-5">
      <p className="font-bold text-2xl">
        My Car is {carDeatils.color} color {carDeatils.carName} which is{" "}
        {carDeatils.price} price
      </p>
      <button className="border hover:shadow-md px-5" onClick={handleClick}>
        Change my Car
      </button>
    </div>
  );
};

export default CarDetails;
