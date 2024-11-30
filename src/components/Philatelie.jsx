import React from "react";
import philatelie from "../assets/tamber.png"; // Replace with your image path

const Philatelie = () => {
  return (
    <div className="w-full">
      <img
        src={philatelie}
        alt="Philatelie"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Philatelie;
