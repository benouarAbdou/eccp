import React from "react";
import handshake from "../assets/handshake.png";
import finance from "../assets/finance.png";
import cards from "../assets/cards.png";
import job from "../assets/job.png";
import job2 from "../assets/job2.png";

const JobSection = () => {
  return (
    <div class="grid grid-cols-4 gap-4">
      <div
        class="col-span-2 flex justify-center items-center bg-blue-500 text-white h-48 rounded-lg bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url(${handshake})`,
          filter: "brightness(0.8)"
        }}
      ></div>
      <div class="col-span-2 grid grid-cols-1 gap-2">
        <div
          class="flex justify-center items-center bg-blue-200 h-48 rounded-lg bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105"
          style={{
            backgroundImage: `url(${finance})`,
            filter: "brightness(0.8)"
          }}
        ></div>
      </div>

      <div
        class="bg-green-500 h-48 flex justify-center items-center text-white rounded-lg bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url(${cards})`,
          filter: "brightness(0.8)"
        }}
      ></div>
      <div
        class="col-span-2 bg-gray-300 h-48 flex justify-center items-center rounded-lg bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url(${job})`,
          filter: "brightness(0.8)"
        }}
      ></div>
      <div
        class="bg-orange-480 h-48 flex justify-center items-center text-white rounded-lg bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url(${job2})`,
          filter: "brightness(0.8)"
        }}
      ></div>
    </div>
  );
};

export default JobSection;
