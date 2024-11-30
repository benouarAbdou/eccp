import React, { useState } from "react";

const NewsCard = ({ title, description, date, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg  overflow-hidden cursor-pointer hover:scale-105 transition duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <div>
          <div className=" w-full">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2 text-left">{title}</h3>
            <p className="text-gray-600 text-sm text-left">{date}</p>
          </div>
        </div>
      ) : (
        <div className="py-4 flex items-center justify-center flex-col h-full px-8">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{date}</p>
          <p className="mt-2">{description}</p>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
