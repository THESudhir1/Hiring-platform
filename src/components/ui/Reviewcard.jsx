import React, { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? 'green' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-green-600"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="p-6 max-w-sm h-fit mx-auto bg-white rounded-xl shadow-md 
      flex items-center space-x-4 my-4 ml-12 mr-12 hover:shadow-lg transition-transform transform hover:scale-105">
      <img
        className="h-16 w-16 rounded-full"
        src={review.profilePicture}
        alt="Profile"
      />
      <div>
        <div className="text-xl font-medium text-black mb-4">{review.title}</div>
        <div className="text-xl font-medium text-black">{review.name}</div>
        <div className="flex items-center">
          {renderStars(review.rating)}
        </div>
        <p className="text-gray-500">
          {isExpanded ? review.content : `${review.content.substring(0, 100)}...`}
          <button 
            onClick={toggleContent} 
            className="text-green-700 ml-2"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;