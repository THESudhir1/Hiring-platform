import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileimg from "../../assets/Images/profileimg.jpg";

const ProfileDropdown = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePicture, setprofilePicture] = useState(true);
  const navigate = useNavigate();
  const shareRef = useRef(null);

  // Toggle the dropdown menu
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Handle logout
  const handleLogoutClick = () => {
    handleLogout(); // Call the logout function (e.g., clearing authentication)
    alert("You have been logged out");
    handleScrollToTop();
    // navigate("/"); // Redirect to the home page after logout
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shareRef]);

  return (
    <div className="relative inline-block text-left" ref={shareRef}>
      {/* Profile Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {/* Profile Icon (You can use any icon or image) */}
        {profilePicture ? (
        // Display the profile picture if available
        <img
          src={profileimg}
          alt="Profile"
          className="h-8 w-8 object-cover rounded-full"
        />
      ) : (
        // Display a fallback human face sketch if no picture
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 19.121A5.002 5.002 0 0012 17a5.002 5.002 0 006.879 2.121M12 15v.01M7 10a5 5 0 1110 0a5 5 0 01-10 0z"
          />
        </svg>
      )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <Link
              to="/dashboard/welcome"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              My Profile
            </Link>
            <Link
              to="/saved-jobs"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Saved Jobs
            </Link>
            <Link
              to="/notifications"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Notifications
            </Link>
            <button
              onClick={handleLogoutClick}
              className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
