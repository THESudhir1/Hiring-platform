import React, { useState } from "react";

const AbouCardCard = ({ card, reverse }) => {
  const { title, description, companyLogo } = card;
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate the description if it exceeds 100 characters
  const truncatedDescription =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex h-[500px] mb-6 mt-5 w-full bg-gray-200 rounded-3xl overflow-hidden ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src={companyLogo}
          alt={`${title} logo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content (Overlay) */}
      <div className="flex flex-col justify-center items-start p-6 text-white w-1/2 bg-gradient-to-b from-green-700 to-green-400 ">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-4 opacity-90">
          {isExpanded ? description : truncatedDescription}
        </p>
        {description.length > 100 && (
          <button onClick={handleToggle} className="text-blue-600">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AbouCardCard;
