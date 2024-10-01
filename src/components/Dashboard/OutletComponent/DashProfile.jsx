import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    // Mock authentication and role checking functions
    const isLoggedIn = true; // Set to true if the user is logged in
    // const userRole = "employee"; // Change this to 'employer' for testing
  
      // Function for handling the "Find Jobs" button click
      const handleEditClick = () => {
        navigate("/edit-profile");
      };


  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-24 mb-12">
      <header className="text-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Ashutosh Tiwari</h1>
        <p className="text-gray-500 text-lg">23 Years Old</p>
      </header>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-gray-700">Location</h3>
          <p className="text-gray-600 mt-1">
            Pasaipur, Keshampur, Phaphund, Auraiya, Uttar Pradesh, 206247
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
          <p className="text-gray-600 mt-1">
            <strong>Email:</strong> <a href="mailto:student@gmail.com" className="text-blue-500">student@gmail.com</a>
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Phone:</strong> 09368803857
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-gray-700">Links</h3>
          <p className="mt-2">
            <Link to="/portfolio" className="text-blue-500 hover:underline">Portfolio</Link>
          </p>
          <p>
            <Link to="/profile" className="text-blue-500 hover:underline">Public Profile</Link>
          </p>
          <p>
            <Link to="/resume" className="text-blue-500 hover:underline">View Resume</Link> | 
            <Link to="/dashboard/build-resume" className="text-blue-500 hover:underline ml-2">Build Your Resume</Link>
          </p>
        </div>
      </div>

      <section className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700">About Me</h3>
        <p className="text-lg text-gray-600 italic mt-2">"Aim Higher, Achieve Higher"</p>
      </section>

      <div>
        <div className='flex justify-center items-center'>
          <p className="text-xs font-light"><span className="text-xl text-red-700 font-extrabold">*</span>It is basic overview, If you want your profile as Employer. Please go to view as Employer section</p>
        </div>
        <button
            onClick={handleEditClick}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg 
                hover:bg-green-700 transition-colors duration-300 shadow-md ml-[40%] mt-4"
            >
            Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
