import React from 'react';
import profileimg from "../../assets/Images/profileimg.jpg";
import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="text-white flex flex-col h-screen justify-center items-center py-6 pb-10 overflow-y-auto">
      {/* Profile Picture */}
      <div className="mb-8 mt-36">
        <img
          src={profileimg}  // Placeholder image for profile
          alt="Profile"
          className="rounded-full border-4 border-white h-36 w-36"
        />
      </div>

      {/* Navigation Links */}
      <nav className="text-center">
        <Link to="/" className="block text-xl font-bold">
          Go to Home
        </Link>
        <Link to="/dashboard/profile" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4 mt-4">
          ABOUT
        </Link>
        <Link to="/dashboard/" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          EXPERIENCE
        </Link>
        <Link to="/education" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          EDUCATION
        </Link>
        <Link to="/skills" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          SKILLS
        </Link>
        <Link to="/languages" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          LANGUAGES
        </Link>
        <Link to="/interests" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          INTERESTS
        </Link>
        <Link to="/references" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          REFERENCES
        </Link>
        <Link to="/awards" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          AWARDS
        </Link>
        <Link to="/preferred-jobs" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          PREFERRED JOBS
        </Link>
        <Link to="/dashboard/applied-jobs" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          APPLIED JOBS
        </Link>
        <Link to="/edit-profile" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          EDIT PROFILE
        </Link>
        <Link to="/logout" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
          LOG OUT
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
