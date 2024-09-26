import React, { useState } from 'react';
// import ReviewCard from "../ui/Reviewcard";
import RCarousel from '../ui/Review-carousel';
// import Review from '../../Data/Review-data';
import reviews from '../../Data/Review-data';

const ReviewSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-center text-3xl font-bold mb-6">User Reviews</h2>
      <p className="text-xl font-medium text-center mb-4">Join the pool of 21Mn+ students and get started with your career</p>
      <RCarousel reviews = {reviews} />
    </div>
  );
}
export default ReviewSection;
