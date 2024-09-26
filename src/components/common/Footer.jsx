import React, {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    // // Function for handling the "Find Jobs" button click
    // const handleFindJobsClick = () => {
    //     if (isLoggedIn) {
    //     if (userRole === "employee") {
    //         navigate("/my-jobs");
    //     } else {
    //         alert("You need to be an employee to view jobs.");
    //     }
    //     } else {
    //     alert("Please log in first.");
    //     }
    // };

        // const isLoggedIn = localStorage.getItem('isLoggedIn'); // Replace with your actual authentication check
      
    const handleHireInternClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        handleScrollToTop();
        // Check if the user is logged in
        if (isLoggedIn) {
            // If logged in, navigate to the jobs page
            navigate('/jobs');
        } else {
            // If not logged in, redirect to the login page
            alert("Please log in first.");
            navigate('/login');
        }
    };

    const handlePostClick = (e) => {
        e.preventDefault();
        handleScrollToTop();
        if(isLoggedIn) {
            navigate('/dashboard');
        }else {
            alert("Please log in first");
            navigate('/login');
        }
    };

    const handleScrollToTop = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const handleServiceClick = (e) => {
      e.preventDefault();
      handleScrollToTop();
    }
  return (
    <footer className="bg-green-700 text-white py-8 shadow-lg">

      <div className="flex justify-around">

        <div class="text-white py-4 flex flex-col gap-1">
            <Link to="/about" onClick={handleScrollToTop}>
                About us
            </Link>

            {/* <Link to="About" >
                We are hiring
            </Link> */}

            <Link to="/jobs" onClick={handleHireInternClick}>
                Hire interns for your Company
            </Link>

            <Link to="/dashboard" onClick={handlePostClick}
            >
                Post a job
            </Link>

            <Link to="/services" onClick={handleServiceClick}>
                Our Services
            </Link>
        </div>

        <div class="text-white py-4 flex flex-col gap-1">
          <Link to="/about" onClick={handleScrollToTop}>
            Terms & Conditions
          </Link>

          <Link to="/about" onClick={handleScrollToTop}>
            Privacy
          </Link>

          <Link to="Contact" onClick={handleScrollToTop}>
            Contact us
          </Link>
        </div>

        <div>
            <h2 class="text-yellow-200 py-4">Stay Connected</h2>
            {/* Logos */}
            <div className="flex space-x-2 gap-2 mb-8">

              <Link to="About">
                <img src={require('../../assets/Images/FooterImg/twitteric-2.png')} alt="Twitter Icon" className="h-10 w-10"/>
              </Link>

              <Link to="About">
                <img src={require('../../assets/Images/FooterImg/twitteric-2.png')} alt="Twitter Icon" className="h-10 w-10"/>
              </Link>

              <Link to="About">
                <img src={require('../../assets/Images/FooterImg/twitteric-2.png')} alt="Twitter Icon" className="h-10 w-10"/>
              </Link>

              <Link to="About">
                <img src={require('../../assets/Images/FooterImg/instaic-2.png')} alt="Twitter Icon" className="h-10 w-10"/>
              </Link>

            </div> 

            <div className="text-right mt-16 p-2 -mb-2">
                <p>&copy; 2024 Vowel. All rights reserved.</p>
            </div>  

        </div>

      </div>

    </footer>
  );
};

export default Footer;