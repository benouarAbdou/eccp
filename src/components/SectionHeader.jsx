import React from "react";
import { FaArrowRight, FaFilePdf } from "react-icons/fa"; // Importing arrow icon from react-icons

const SectionHeader = ({ title, description, button1Text, button2Text }) => {
  return (
    <div className="py-8">
      {/* Title and Buttons Container */}
      <div className="flex flex-wrap items-center justify-between">
        {/* Title */}
        <h1 className="text-blueCustom text-3xl font-bold font-poppins">
          {title}
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          {button1Text && (
            <button className="flex items-center px-4 py-2 bg-gray-200 text-black font-poppins font-medium rounded-lg hover:bg-gray-300 transition">
              {button1Text} <FaArrowRight className="ml-2" />
            </button>
          )}
          {button2Text && (
            <button className="flex items-center px-4 py-2 bg-gray-200 text-black font-poppins font-medium rounded-lg hover:bg-gray-300 transition">
              {button2Text} <FaArrowRight className="ml-2" />
            </button>
          )}
        </div>
      </div>

      {/* Underline */}
      <hr className="border-yellow-300 border-t-4 mt-2" />

      {/* Description */}
      <p className="text-gray-600 text-md mt-4 font-poppins text-left">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
