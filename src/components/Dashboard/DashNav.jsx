import React, { useState } from 'react';
import profileimg from "../../assets/Images/profileimg.jpg";
import {Link } from 'react-router-dom';
import companylogoimg from '../../assets/Images/companylogoimg.jpeg';
const Sidebar = () => {
  const [role, setRole] = useState('employer');
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
    {
      role === "employee" ? (
        <div className="text-white flex flex-col h-screen justify-center items-center py-6 pb-10 overflow-y-auto">
        {/* Profile Picture */}
        <div className="mb-8 mt-36">
          <img
            src={role === 'employee' ? profileimg : companylogoimg}  // Placeholder image for profile
            alt="Profile"
            className="rounded-full border-4 border-white h-36 w-36"
          />
        </div>
  
        {/* Navigation Links */}
        <nav className="text-center">
          <Link to="/" className="block text-xl font-bold">
            Go to Home
          </Link>
          <Link to="/dashboard/profile" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4 mt-4">
            ABOUT
          </Link>
          <Link to="/dashboard/experience" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            EXPERIENCE
          </Link>
          <Link to="/dashboard/education" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            EDUCATION
          </Link>
          <Link to="/dashboard/skills" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            SKILLS
          </Link>
          <Link to="/dashboard/languages" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            LANGUAGES
          </Link>
          <Link to="/dashboard/awards" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            Accomplishment
          </Link>
          <Link to="/applicantprofile" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            VIEW AS EMPLOYER
          </Link>
          <Link to="/dashboard/certificate" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            CERTIFICATES
          </Link>
          {/* <Link to="/dashboard/preferred-jobs" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            PREFERRED JOBS
          </Link> */}
          <Link to="/dashboard/applied-jobs" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            APPLIED JOBS
          </Link>
          <Link to="/edit-profile" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            EDIT PROFILE
          </Link>
          {/* <Link to="/" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
            LOG OUT
          </Link> */}
        </nav>
        </div>
      ): 


      // For Employer......
      (
        <div className="text-white flex flex-col h-screen justify-center items-center py-6 pb-10 overflow-y-auto">
          {/* Profile Picture */}
          <div className="mb-8">
            <img
              src={companylogoimg}  // Placeholder image for profile
              alt="Profile"
              className="rounded-full border-4 border-white h-36 w-36"
            />
          </div>
    
          {/* Navigation Links */}
          <nav className="text-center">
            <Link to="/" className="block text-xl font-bold">
              Go to Home
            </Link>
            <Link to="/dashboard/companyprofile" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4 mt-4">
              ABOUT
            </Link>
            {/* <Link to="/dashboard/experience" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              EXPERIENCE
            </Link>
            <Link to="/dashboard/education" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              EDUCATION
            </Link>
            <Link to="/dashboard/skills" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              SKILLS
            </Link>
            <Link to="/dashboard/languages" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              LANGUAGES
            </Link>
            <Link to="/dashboard/awards" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              Accomplishment
            </Link> */}
            <Link to="/companyprofile" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              VIEW AS EMPLOYEE
            </Link>
            {/* <Link to="/dashboard/certificate" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              CERTIFICATES
            </Link> */}
            <Link to="/dashboard/applied-jobs" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              POST A JOB
            </Link>
            <Link to="/dashboard/applied-jobs" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              POSTED JOBS
            </Link>
            <Link to="/editcompanyprofile" onClick={handleScrollToTop} className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              EDIT PROFILE
            </Link>
            <Link to="/" className="block hover:bg-white hover:text-green-500 rounded py-2 px-4">
              Settings
            </Link>
          </nav>
        </div>
      )
    }
    </>
  );
};

export default Sidebar;
