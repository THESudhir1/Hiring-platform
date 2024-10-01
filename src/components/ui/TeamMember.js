import React from "react";
import SattuImage from "../../assets/Images/profileimg.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Sample data
const teamMembers = [
  {
    id: 1,
    name: "Ashutosh",
    title: "Full Stack Developer & Team Leader",
    image: SattuImage,
    description:
      "Ashutosh leads the team with expertise in front-end and back-end technologies, ensuring seamless project execution and team success.   ",
    socialLinks: {
      linkdin: "https://linkdin.com",
    },
  },
  {
    id: 2,
    name: "Shivam",
    title: "UI Designer",
    image: SattuImage,
    description:
      "Shivam crafts intuitive, visually stunning user interfaces, enhancing the overall user experience through innovative design choices.  ",
    socialLinks: {
      linkdin: "https://linkdin.com",
    },
  },
  {
    id: 3,
    name: "Sudhir",
    title: "Full Stack Developer",
    image: SattuImage,
    description:
      "Sudhir is a versatile developer proficient in all layers of software development, delivering robust applications for various needs.   ",
    socialLinks: {
      linkdin: "https://linkdin.com",
    },
  },
  {
    id: 4,
    name: "Satyendra",
    title: "FrontEnd Developer",
    image: SattuImage,
    description:
      "Satyendra specializes in creating responsive and engaging front-end experiences, bringing diverse and creative designs to life.   ",
    socialLinks: {
      linkdin: "https://linkdin.com",
    },
  },
];

// Team component

const Team = () => {
  return (
    <div className="text-center mx-auto mt-12 w-[80%]">
      {/* Our team */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-medium text-3xl text-green-700">
          Our Dedicated Team
        </h2>

        <p className="text-center font-light mt-2 w-[85%] leading-6 opacity-70">
          Experience seamless hiring with our outstanding features and dedicated
          customer service. Our team is committed to providing you with a top-notch
          experience, ensuring your journey is efficient and successful every step
          of the way.
        </p>
      </div>

      <div className="team-members flex justify-center gap-12 mb-8 mt-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className=" mt-4 p-7 w-[20%] flex flex-col items-center justify-center"
          >
            {/* images for team */}
            <div className="w-48 h-48 overflow-hidden rounded-full relative mb-2">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover absolute object-center"
              />
            </div>

            {/* team name and title */}
            <h3 className="font-light text-2xl mt-2 opacity-60">{member.name}</h3>
            <h2 className="italic font-light opacity-80 mt-1 mb-2">{member.title}</h2>
            <p className="opacity-60 text-center">{member.description}</p>

            {/* team socialLinks */}
            <div className="social-icons flex space-x-4 opacity-60 mt-4">
              <a href={member.socialLinks.linkdin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin text-2xl transition-transform duration-300 hover:text-black hover:-translate-y-1"></i>
              </a>
              <a href={member.socialLinks.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-2xl transition-transform duration-300 hover:text-black hover:-translate-y-1"></i>
              </a>
              <a href={member.socialLinks.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-2xl transition-transform duration-300 hover:text-black hover:-translate-y-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Team;
