import React, { useState } from 'react';

const JobCard = ({ card }) => {
  const { title, description, companyLogo } = card;
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate the description if it exceeds 100 characters
  const truncatedDescription = description.length > 100 
    ? description.slice(0, 100) + '...' 
    : description;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border p-4 shadow-lg rounded-md mt-5">
      <div className="flex gap-4">
        {/* Company Logo */}
        <img
          src={companyLogo}
          alt={`${title} logo`}
          className="object-contain h-[150px] w-[200px]"
        />

        {/* Title and Description */}
        <div className="mt-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-700">
            {isExpanded ? description : truncatedDescription}
          </p>
          {description.length > 100 && (
            <button onClick={handleToggle} className="text-blue-500 mt-2">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
