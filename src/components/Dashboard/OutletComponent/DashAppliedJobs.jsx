import React from 'react';
import JobCard from '../../Cards/JobCard';
import { Link, useNavigate } from 'react-router-dom';


const AppliedJobs = () => {
  const jobs = [
    {
        id: 1,
        job_title: "Software Developer",
        company: "Vowell",
        image: "https://via.placeholder.com/50",
        location: "Prayagraj, India",
        job_desc: "Join our team to build cutting-edge software applications.",
        job_type: ["Work From Home"],
        experience: ["Bachelor Degree in computer science",
          "0-5 Years with React"],
        salary: " 300000-350000",
        vacancy: "100",
        responsibilities: [
          "Build from scratch and maintain our website",
          "Collaborate with cross-functional teams",
          "Participate in code reviews",
        ],
        requirements: [
          "Bachelor degree in Computer Science or related field",
          "Strong knowledge of PHP, Node.js, and Python",
          "Experience with C++, OS concepts, and DBMS",
          "Familiarity with HTML, REST APIs, MongoDB, MySQL, Java, Django, Express.js, and Bubble.io",
        ],
        deadline: "16 October 2024",
        date_posted: "22 sept 2024",
        is_active: true,
        about_job:
          "We are looking for a highly skilled Senior Backend Developer to join our dynamic team at MoorLaval. As a Senior Backend Developer, you will be responsible for designing, developing, and implementing backend solutions for our web applications. You must have strong knowledge and experience with PHP, Node.js, HTML, REST API, MongoDB, MySQL, Python, Java, Django, Express.js, and Bubble.io.",
      },
      {
        id: 2,
        job_title: "Deops",
        company: "Vowell",
        image: "https://via.placeholder.com/50",
        location: "Prayagraj, India",
        job_desc: "Join our team to build cutting-edge software applications.",
        job_type: ["Work From Home"],
        experience: ["Bachelor Degree in computer science",
          "0-5 Years with React"],
        salary: " 300000-350000",
        vacancy: "100",
        responsibilities: [
          "Build from scratch and maintain our website",
          "Collaborate with cross-functional teams",
          "Participate in code reviews",
        ],
        requirements: [
          "Bachelor degree in Computer Science or related field",
          "Strong knowledge of PHP, Node.js, and Python",
          "Experience with C++, OS concepts, and DBMS",
          "Familiarity with HTML, REST APIs, MongoDB, MySQL, Java, Django, Express.js, and Bubble.io",
        ],
        deadline: "16 October 2024",
        date_posted: "22 sept 2024",
        is_active: false,
        about_job:
          "We are looking for a highly skilled Senior Backend Developer to join our dynamic team at MoorLaval. As a Senior Backend Developer, you will be responsible for designing, developing, and implementing backend solutions for our web applications. You must have strong knowledge and experience with PHP, Node.js, HTML, REST API, MongoDB, MySQL, Python, Java, Django, Express.js, and Bubble.io.",
      },
  ];


  const navigate = useNavigate();

  // Mock authentication and role checking functions
  const isLoggedIn = true; // Set to true if the user is logged in
  const userRole = "employee"; // Change this to 'employer' for testing

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

  return (
    <div className="mt-12 p-2">
        <h className="text-2xl font-semibold text-center">Applied Jobs</h>
        <div className="flex flex-col w-2/3 mt-8 justify-center items-center mx-auto">
          {jobs.map((job, index) => (
            <Link key={index} to={`/job/${index}`}>
              <JobCard key={index} job={job} index={index} />
            </Link>
          ))}
        </div>
        <button
              onClick={handleFindJobsClick}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg 
                hover:bg-green-700 transition-colors duration-300 shadow-md ml-[42%] mt-8"
            >
              New Jobs
        </button>
    </div>
  );
};

export default AppliedJobs;
