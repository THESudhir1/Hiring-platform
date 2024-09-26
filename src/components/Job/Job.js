import React from "react";
import FilterSection from "../FilterSection/Filter";
import JobCard from "../Cards/JobCard";
// import RightOpportunity from "./RightOpportunity";
import { Link } from "react-router-dom";
import jobs from "../../Data/Jobdata";


export const Job = () => {
  return (
    <div className="mt-20 mb-16 p-2">
      <div class="text-gray-600 mt-12 items-start p-4">
          <Link to="/" class="hover:text-gray-800">Home</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/jobs" class="font-md">Jobs</Link>
      </div>
      <div>
      <div className="bg-white py-2 mt-4 mb-12 opacity-90">
        <h1 className='text-center text-black capitalize font-semibold text-5xl' >finds the right opportunity!</h1>
        <p className='text-center text-black text-xl mt-2'>Find jobs with salaries up to ₹30 LPA</p>
      </div>
      {/* <Card/> */}

      <div className="flex gap-12 justify-center ">
        <FilterSection />

        <div className="flex flex-col">
          {jobs.map((job, index) => (
            <Link key={index} to={`/job/${index}`}>
              <JobCard key={index} job={job} index={index} />
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Job;
