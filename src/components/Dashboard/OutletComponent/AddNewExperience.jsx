import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddExperience = () => {

//   const location = useLocation();  // To access state from navigate
  const navigate = useNavigate();  // To navigate back after submission
//   const { addNewExperience } = location.state || {};  // Destructure the function from state

  // Define state for each input field
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an experience object with entered details
    const newExperience = {
      title,
      company,
      startDate,
      endDate: endDate || 'Present', // Default to "Present" if left empty
    };

    // Pass the new experience object to parent component
    // if (addNewExperience) {
    //     addNewExperience(newExperience);  // Call the function passed from parent
    // }
  
    // Navigate back to experience list
    navigate('/dashboard/experience');

    // Clear the form after submission
    setTitle('');
    setCompany('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Experience</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Job Title</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter job title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Company</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter company name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Start Date</label>
        <input
          type="date"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">End Date</label>
        <input
          type="date"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="Leave empty if ongoing"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring">
        Add Experience
      </button>
    </form>
  );
};

export default AddExperience;
