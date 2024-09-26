import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Assuming ReviewCard is the review card component
// import ReviewCard from "../ui/Reviewcard";
import JobCard from "../Cards/JobCard";

// Custom Arrow components with Tailwind classes
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 -translate-x-9  transform -translate-y-1/2 bg-green-800 text-white 
    p-2 rounded-full hover:bg-green-600 focus:outline-none z-10 text-xl"
    onClick={onClick}
  >
    &lt; {/* Left Arrow */}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 translate-x-9 transform -translate-y-1/2 bg-green-800 text-white 
    p-2 text-xl rounded-full hover:bg-green-600 focus:outline-none"
    onClick={onClick}
  >
    &gt; {/* Right Arrow */}
  </button>
);

const handleScrollToTop = () => {
  window.scrollTo(0, 0); // Scroll to the top of the page
}

const JobCarousel = ({ filterJobs }) => {
  console.log(filterJobs);

  // Calculate slidesToShow based on the number of reviews
  const slidesToShow = filterJobs.length < 3 ? filterJobs.length : 3;

  const jobSettings = {
    infinite: false,
    speed: 1000,
    slidesToShow: slidesToShow, // Show 1, 2, or 3 reviews based on length
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filterJobs.length < 2 ? filterJobs.length : 2, // Handle responsiveness
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // On mobile, only 1 review is shown
        },
      },
    ],
  };

  return (
    <div className="relative job-carousel-container">
      <Slider {...jobSettings}>
        {filterJobs.map((job, index) => (
          <div className="flex flex-col gap-4 p-6">
            <Link key={index} to={`/job/${index}`} onClick={handleScrollToTop}>
              <JobCard key={index} job={job} index={index} />
            </Link>
          </div>
         
        ))}
      </Slider>
    </div>
  );
};

export default JobCarousel;
