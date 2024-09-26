import React, { useState, useEffect, useRef } from "react";
import Bghome from "../../assets/Images/Bghome.jpg";
import { ReactTyped as Typed } from 'react-typed';
import { useNavigate } from "react-router-dom";
import Carousel from "./carousel";
import apply from "../../assets/Images/apply-image.jpeg"
import certificate from "../../assets/Images/certificate-image.jpg";
import qualified from "../../assets/Images/qualified-image.jpg";
import ATS from "../../assets/Images/bg-ats.jpg";
import jobs from "../../Data/Jobdata";
import filters from "../../Data/Filter";
import Products from "../ui/Products";
import ReviewSection from "./Reviewsection";

const Home = () => {
  const navigate = useNavigate();

  // Mock authentication and role checking functions
  const isLoggedIn = true; // Set to true if the user is logged in
  const userRole = "employee"; // Change this to 'employer' for testing

  const sectionRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsAnimated(true); // Trigger animation
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function for handling the "Find Jobs" button click
  const handleFindJobsClick = () => {
    if (isLoggedIn) {
      if (userRole === "employee") {
        navigate("/jobs");
      } else {
        alert("You need to be an employee to view jobs.");
      }
    } else {
      navigate("/login");
      alert("Please log in first.");
    }
  };

  // Function for handling the "Post a Job" button click
  const handlePostJobClick = () => {
    if (isLoggedIn) {
      if (userRole === "employer") {
        navigate("/post-job");
      } else {
        alert("You need to be an employer to post a job.");
      }
    } else {
      navigate("/login");
      alert("Please log in first.");
    }
  };

  // Function for handling the "Scan your Resume" button click
  const handleScanClick = () => {
    if (isLoggedIn) {
        // navigate("/login");
        alert("Abhi Resume scan page ready nahi hai");
    } else {
      navigate("/login");
      alert("Please log in first.");
    }
  };

  return (
    <div className="w-full relative opacity-90">
      <div className="absolute w-full h-screen z-10">
        {/* Background Image */}
        <img
          src={Bghome}
          alt="Background"
          className="absolute max-w-full max-h-full object-contain p-12"
        />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-12">
          {/* Typing effect for heading */}
          <Typed
            strings={["Connecting Talent with Opportunities"]}
            typeSpeed={100}
            backSpeed={50}
            loop
            className="text-4xl md:text-4xl text-green-800 font-extrabold mb-4"
          />
          <p className="text-green-700 text-lg md:text-md max-w-2xl mb-8 font-semibold">
            Find the perfect match for your team or your career. <br/> Our platform
            bridges the gap between skilled professionals and employers looking
            for the best fit.
          </p>
          {/* Buttons */}
          <div className="space-x-4">
            <button
              onClick={handleFindJobsClick}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              Find Jobs
            </button>
            <button
              onClick={handlePostJobClick}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              Post a Job
            </button>
          </div>
        </div>
      </div>

      {/* Carousel content wrapped in green box */}
      <div className="relative flex flex-col justify-center items-center h-screen mt-72">
        {/* Heading above the carousel */}
        <p className="text-2xl font-semibold text-center">Top companies trust us</p>

        {/* Carousel Container with Green Box */}
        <div className="w-[97%] p-6 bg-white rounded-xl relative overflow-hidden"> {/* Adjust margins here */}
          
          {/* Shading Effect on the Left and Right */}
          <div className="absolute left-0 top-0 h-full w-96 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-96 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

          {/* Carousel */}
          <div className="relative z-0"> {/* Ensure Carousel stays behind the shading */}
            <Carousel /> {/* Carousel component */}
          </div>
        </div>
      </div>

      {/* dream line */}
      <div ref={sectionRef} className="relative w-full flex flex-col justify-center items-center -mt-40">
        <h1 className="text-3xl font-bold text-center text-black mb-4 opacity-90">
          Make your dream career a reality
        </h1>

        {/* Underline with animation */}
        <div
          className={`w-0 h-1 bg-green-600 transition-all duration-1000 ease-in-out ${
            isAnimated ? 'w-[20%]' : 'w-0'
          }`}
          style={{ width: isAnimated ? '20%' : '0', transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
      
      {/* How It Works section */}
      <div className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">How does it Work?</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Leverage AI to match top talent with your needs by analyzing skills, experience, and job requirements for the perfect fit.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* 1st Card */}
          <div className="bg-white shadow-lg rounded-xl p-4 w-80 border border-green-600 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              {/* Image in a circle */}
              <img
                src={apply}
                alt="apply"
                className="h-24 w-24 rounded-full mb-4 object-cover"
              />
              
              {/* Heading */}
              <h3 className="text-2xl font-semibold text-green-800 mb-2 text-center">Apply Quickly and Easily</h3>

              {/* Description */}
              <p className="text-gray-600 text-center">
                Apply quickly and easily with AI-driven tools that match your skills to the best job opportunities effortlessly.
              </p>
            </div>

            {/* Full-width Button at the bottom */}
            <button className="w-full mt-4 px-4 py-2 bg-white text-green-800 border border-green-800 rounded-full transition-colors duration-300 hover:bg-green-800 hover:text-white"
              onClick={handleFindJobsClick}
            >
              Find a Job
            </button>
          </div>

          {/* 2nd Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 w-80 border border-green-600 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img 
                src={certificate} 
                alt="certificate" 
                className="h-24 w-24 rounded-full mb-4 object-cover"
              />

              <h3 className="text-2xl font-semibold text-green-800 mb-2 text-center">Access the Largest Pool of Talents</h3>

              <p className="text-gray-600 text-center">
                Access the largest pool of talent with AI-powered matching to find the perfect candidates quickly and efficiently.
              </p>
            </div>
            
            <button onClick={handlePostJobClick}
            className="w-full mt-4 px-4 py-2 bg-white text-green-800 border border-green-800 rounded-full transition-colors duration-300 hover:bg-green-800 hover:text-white">
              Post a Job
            </button>
          </div>

          {/* 3rd Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 w-80 border border-green-600 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img 
                src={qualified} 
                alt="qualify" 
                className="h-24 w-24 rounded-full mb-4 object-cover" 
              />

              <h3 className="text-2xl font-semibold text-green-800 mb-2 text-center">Get More Qualified Applicants</h3>

              <p className="text-gray-600 text-center">
                Get more qualified applicants with AI-enhanced screening, ensuring you connect with the best candidates faster.
              </p>
            </div>
            
            <button onClick={handlePostJobClick}
            className="w-full mt-4 px-4 py-2 bg-white text-green-800 border border-green-800 rounded-full transition-colors duration-300 hover:bg-green-800 hover:text-white">
              Post a Job
            </button>

          </div>

        </div>
      </div>

      {/* Know your ATS Score section */}
      <div className="flex flex-col items-center justify-center w-full p-4 mt-12">
        <div className="flex flex-col w-full bg-white rounded-lg overflow-hidden -mt-12">
          <h1 className="text-3xl font-bold text-green-700 text-center p-2">Optimize your resume for an ATS</h1>
          <p className="text-gray-700 text-center px-6 mx-auto w-3/4">Optimize your resume for an ATS with AI-powered analysis to ensure it meets job requirements and stands out to employers.</p>
        </div>
      </div>
      
      {/* image page and scan button */}
      <div className="flex w-full bg-green-700 shadow-lg overflow-hidden mt-12">
        {/* Content (Left Side) */}
        <div className="w-1/2 p-24 flex flex-col justify-center items-start text-left text-white gap-8">
          <h1 className="text-4xl font-semibold">Optimize your resume to get more interviews</h1>
          <p className="w-3/4 text-left text-xl">Demo.... helps you optimize your resume for any job, highlighting the key experience and skills recruiters need to see.</p>
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 w-3/4"
            onClick={handleScanClick}
          >
            Scan your resume
          </button>
        </div>

        {/* Image (Right Side) */}
        <div className="w-[60%] flex justify-center items-center p-12">
          <img src={ATS} alt="ATS" className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-black translate-y-8 translate-x-8" />
        </div>
      </div>
      

      {/* Latest Jobs section */}
      <div>
        <h1 className="text-center font-semibold text-4xl text-black p-4 mt-12">Latest jobs on Demo....Company</h1>
        
        {/* Underline without animation */}
        <div
          className="w-1/4 h-1 bg-green-600 mx-auto -mt-2 mb-4"
        ></div>
      </div>
      
      {/* Jobs section */}
      <div>
        <Products jobs={jobs} filters={filters} />
      </div>
      

      {/* Review section */}
      < ReviewSection />


      {/* Newsletter section */}
      <div>NEWS LETTER SECTION</div>
      
    </div>
  );
};

export default Home;
