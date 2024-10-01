import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddAward = () => {

    //   const location = useLocation();  // To access state from navigate
    const navigate = useNavigate();  // To navigate back after submission
    //   const { addNewExperience } = location.state || {};  // Destructure the function from state

    // Define state for each input field
    const [name, setName] = useState('');
    const [provider, setProvider] = useState('');
    const [description, setDescription] = useState('');
    const [awardimage, setAwardimage] = useState(null);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an experience object with entered details
        const newAward = {
            name,
            provider,
            description,
            awardimage 
        };

        // Pass the new experience object to parent component
        // if (addNewExperience) {
        //     addNewExperience(newExperience);  // Call the function passed from parent
        // }
    
        // Navigate back to experience list
        navigate('/dashboard/award');

        // Clear the form after submission
        setName('');
        setProvider('');
        setDescription('');
        setAwardimage(null);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-12 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Award</h2>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Award Name</label>
            <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter award name"
            required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">provider</label>
            <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            placeholder="Enter provider name"
            required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='enter your description'
            required
            />
        </div>

        {/* Upload Image */}
        <div>
            <label className="block font-medium mb-2 mt-2">Upload Image</label>
            <input
                type="file"
                className="mt-2 mb-4 p-2"
                accept="image/*"
                onChange={(e) => setAwardimage(e.target.files[0])}
            />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring">
            Add Award
        </button>
        </form>
    );
};

export default AddAward;
