import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="py-8">
      <h1 className="text-blueCustom text-3xl font-bold font-poppins text-left">
        {title}
      </h1>
      <hr className="border-yellow-300 border-t-4 mt-2 " />
      <p className="text-gray-600 text-md mt-4 font-poppins text-left">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
