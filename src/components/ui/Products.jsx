import React, { useState } from "react";
import Filter from "../ui/Filter";
import JCarousel from "../ui/Job-carousel";

function Products({ jobs, filters }) {
  const [filterJobs, setFilterJobs] = useState(jobs);

  const [activeFilters, setActiveFilters] = useState([
    { type: "job_title", options: [] }, // Using 'role' to filter job roles
  ]);

  const onUpdateFilter = () => {
    let filteredJobs = jobs.filter((job) => {
      // Adjust filtering logic based on job_type being an array
      const matchesJobType = activeFilters.find(
        (filter) => filter.type === "job_title" && filter.options.some(
          (option) => job.job_type.includes(option) // Compare array with array
        )
      );
      return matchesJobType; // Add other conditions as needed
    });

    // return filteredJobs;
    setFilterJobs(filteredJobs);
  };

  const reset = () => {
    setFilterJobs(jobs);
    setActiveFilters([{ type: "job_title", options: [] }]);
  };

 ;

  return (
    <div className="pt-12 flex flex-col mb-16">
      <div className="bg-white py-4 w-full flex flex-row justify-center items-center gap-4 -mt-12">
            <h1 className="text-black font-medium text-xl mb-4">Popular Categories : </h1>
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex flex-row">
              {filters.map((section, sectionIdx) => (
                <Filter
                  key={section.id}
                  section={section}
                  sectionIdx={sectionIdx}
                  activeFilters={activeFilters}
                  setActiveFilters={setActiveFilters}
                  activeFilterOptions={
                    activeFilters.find((af) => af.type === section.id).options
                  }
                  onUpdateFilter={onUpdateFilter}
                />
                ))}
                </div>

                <div
                className="flex items-center cursor-pointer text-white bg-green-700 h-5 w-30 p-4 rounded-full"
                onClick={reset}
                >
                Reset
                </div>
            </div>
        </div>


      {/* Job Grid */}
      <div className="w-full bg-gray-100">
        <div className="mx-auto max-w-2x px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Available Jobs
          </h2>
          {filterJobs.length === 0 && (
            <div className="text-center w-full text-4xl font-normal tracking-tight text-gray-900">
              Sorry no jobs available
            </div>
          )}
          <div className="w-full flex flex-col">
            {filterJobs.length > 0 &&
              <JCarousel filterJobs={filterJobs} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
