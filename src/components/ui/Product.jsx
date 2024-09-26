import React from "react";

function Job({ job }) {
    console.log(job);
    
  return (
    <div key={job.id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={job.imageSrc}
          alt={job.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={job.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {job.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{job.role}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{job.salary}</p>
      </div>
    </div>
  );
}

export default Job;
