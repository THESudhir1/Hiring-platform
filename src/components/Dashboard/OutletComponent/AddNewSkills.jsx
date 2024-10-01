import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSkill = () => {
  const navigate = useNavigate(); // To navigate back after submission

  // Define state for each input field
  const [skill, setSkill] = useState('');
  const [proficiency, setProficiency] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new skill object with entered details
    const newSkill = {
      skill,
      proficiency
    };

    // You can pass the new skill to parent component or make an API call here
    console.log(newSkill); // For now, just log the new skill to the console

    // Navigate back to the skill list or dashboard
    navigate('/dashboard/skills');

    // Clear the form after submission
    setSkill('');
    setProficiency('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Skill</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Skill Name</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter skill name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Proficiency Level</label>
        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          value={proficiency}
          onChange={(e) => setProficiency(e.target.value)}
          required
        >
          <option value="" disabled>Select proficiency</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring">
        Add Skill
      </button>
    </form>
  );
};

export default AddSkill;
