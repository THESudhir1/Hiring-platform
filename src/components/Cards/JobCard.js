// JobCard.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const JobCard = ({ job, index }) => {
  console.log(job);
  
  const { job_title,company, image, location, job_desc, job_type, experience, salary, is_active } = job;

  // const handleJobDetails(){

  // }

  return (
    <Link to={`/job/${index}`} className="job-card block border rounded-lg p-6 mb-6 mt-4 bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-800">{job_title}</h2>
          <p className="text-xl font-semibold text-gray-800">{company}</p>
        </div>
        
        <img
          src={image}
          alt={`${job_title} logo`}
          className="w-24 h-auto object-contain"
        />
      </div>
      <div className="job-card-body">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-500">{location}</p>
          {is_active ? (
            <button className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition duration-300">
              Actively Hiring
            </button>
          ) : (
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">
              Closed
            </button>
          )}
        </div>
        <p className="text-gray-700 mb-3">{job_desc}</p>
        <div className="flex space-x-4 text-gray-600">
          <p className="flex items-center"><FontAwesomeIcon icon={faBriefcase} className="mr-1" /> {job_type}</p>
          <p className="flex items-center"><FontAwesomeIcon icon={faClock} className="mr-1" /> {experience}</p>
          <p className="flex items-center"><FontAwesomeIcon icon={faDollarSign} className="mr-1" /> {salary}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
