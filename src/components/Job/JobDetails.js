// JobDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faHome,
  faCalendarAlt,
  faMoneyBillWave,
  faPaperPlane,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import jobs from "../../Data/Jobdata";


const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  
  const job = jobs[id];

  console.log(job);
  

  return (
    <div className="mt-12 p-2">
      <div class="text-gray-600 mt-24 items-start p-4">
          <Link to="/" class="hover:text-gray-800">Home</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/jobs" class="font-md">Jobs</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/jobs" class="font-md">Job Details</Link>
      </div>
      {job ? (
        <div className="flex flex-col item-center justify-center h-auto mx-auto w-[80%] p-4 mb-20">
          
          {/* main title  */}
          <div className="mb-16">
            <h1 className="text-center font-bold text-3xl opacity-85">{job.job_title}</h1>
          </div>

          {/* main div */}
          <div className="border border-solid rounded-xl p-7">
            <div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-xl">{job.job_title}</h1>
                  <p className="text-xl font-semibold opacity-80">{job.company}</p>
                  <p className="opacity-80">Location: {job.location}</p>
                </div>
                <div>
                  <img
                    src={job.image}
                    alt={`${job.job_title} logo`}
                    className="w-24 h-auto object-contain"
                  />
                </div>
              </div>

              {/* work from Home */}
              <div className="mt-8 opacity-80">
                <p>
                  <FontAwesomeIcon icon={faHome} /> {job.job_type}
                </p>
              </div>

              {/* unique feature */}

              <div className="flex items-start gap-20 mt-8 opacity-80">
                <div className="flex flex-col">
                  <span>
                    <FontAwesomeIcon icon={faCalendarAlt} /> Start date
                  </span>{" "}
                  <span>Immediately</span>
                </div>
                <div className="flex flex-col">
                  <span>
                    <FontAwesomeIcon icon={faMoneyBillWave} /> CTC (Annual)
                  </span>{" "}
                  <span>
                    <p>
                      <FontAwesomeIcon icon={faDollarSign} /> {job.salary}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>
                    <FontAwesomeIcon icon={faUserTie} /> Experience
                  </span>{" "}
                  <span> 0-5 years</span>
                </div>
                <div className="flex flex-col">
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} /> Apply By
                  </span>{" "}
                  <span>19 Oct' 24</span>
                </div>
              </div>
            </div>

            {/* about the job */}
            {/* line */}
            <div className="h-[1px] w-[95%] bg-black mt-6 mb-4 mx-auto opacity-30"></div>
            <div className="mt-5 opacity-80">
              <p className="text-left">
                <strong>About the job:</strong> <br /> {job.about_job}
              </p>
            </div>

            {/* responsibility */}
            <div className="mt-6 opacity-80">
              <h3 className="font-bold">Responsibilities:</h3>
              <ul className="list-disc pl-5">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* skill */}
            <div className="mt-6 opacity-80">
              <h3 className="font-bold">Requirements:</h3>
              <ul className="list-disc pl-5">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            {/* salary section */}
            <div className="mt-8 opacity-80">
              <div>
                {" "}
                <strong>
                  Salary: <br />{" "}
                </strong>
              </div>
              <p className="mt-2 opacity-80">
                <FontAwesomeIcon icon={faDollarSign} /> {job.salary} / year
              </p>
            </div>

            {/* experience */}
            <div className="opacity-80 mt-6">
              <h3 className="font-bold mt-2">Experience:</h3>
              <ul className="list-disc pl-5 mt-1">
                {job.experience.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            </div>

            {/* deadline and date posted */}
            <div className="mt-6 p-4 flex flex-row justify-between">
              <p className="text-lg">Deadline: {job.deadline}</p>
              <p className="text-lg">Date Posted: {job.date_posted}</p>
            </div>

            {/* apply button */}
            <div className="flex justify-center items-center mt-6 mb-4">
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-700 transform hover:scale-105 mt-2">
                Apply Now
              </button>
            </div>
            
          </div>
        </div>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
};

export default JobDetails;
