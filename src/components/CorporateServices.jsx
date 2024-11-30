import React from "react";
import { CreditCard, Mail, Banknote } from "lucide-react";
import handshake from "../assets/handshake.png";

const services = [
  {
    title: "Services corporate ",
    image: handshake,
    color: "bg-red-300"
  }
];

const CorporateServices = () => {
  return (
    <div className="flex w-1/3 space-x-6">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex-1 relative rounded-lg overflow-hidden group ${service.color}`}
          style={{
            height: "300px"
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.image})`,
              filter: "brightness(0.5)"
            }}
          ></div>

          {/* Overlay */}
          <div
            className={`absolute inset-0 ${service.color} bg-opacity-20 group-hover:bg-opacity-50 transition duration-300`}
          ></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
            <h2 className="text-xl font-bold text-left">{service.title}</h2>
            <button className="mt-auto bg-white text-black px-4 py-2 rounded-md">
              See More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CorporateServices;
