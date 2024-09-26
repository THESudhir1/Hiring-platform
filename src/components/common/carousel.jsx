import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import companies from '../../Data/companies'; // Assuming companies is exported from companies.jsx
import Job from "../ui/Product";

const Carousel = () => {
  const settings = {
    // dots: true, // Show dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 2000, // Transition speed
    slidesToShow: 6, // Number of logos shown at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // 3 seconds for each slide
    // nextArrow: <NextArrow />, // Custom right arrow
    // prevArrow: <PrevArrow />, // Custom left arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container p-4">
      <Slider {...settings}>
        {companies.map((company) => (
          <div key={company.id} className="flex justify-center items-center p-10 h-20 w-22">
            <img
              src={company.path}
              alt={company.name}
              className="object-cover" // Fit logos properly
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;



