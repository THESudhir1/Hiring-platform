import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import profileimg from "../../../assets/Images/profileimgFemale.jpg";
import profileimgMale from "../../../assets/Images/profileimg.jpg";

const Profile = ({ applicant }) => {

  const navigate = useNavigate();
  const shareRef = useRef(null); // Reference for the dropdown
  const cansee = applicant.profileeveryone;
  console.log(cansee);
  

  // Mock authentication and role checking functions 
  const [userRole, setuserRole] = useState("employee"); // Change this to 'employer' for testing
  const [isLoggedIn, setisLoggedIn] = useState(true);   // Set to true if the user is logged in
  const [everyoneSee, seteveryoneSee] = useState(cansee);
  console.log(everyoneSee);
  
  const [showOptions, setShowOptions] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showAccomplishments, setShowAccomplishments] = useState(false);


  // Function to copy the current page URL to the clipboard
  const copyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        alert('Link copied!');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shareRef]);

  
  return (
    <div className="w-full p-1">
      <div className="flex justify-between items-center">
        <div class="text-gray-600 mt-12 items-start p-4">
          <Link to="/" class="hover:text-gray-800">Home</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/dashboard/profile" class="font-md">Profile</Link>
        </div>

        {/* share link section */}
        <div className="relative mt-12 mr-16" ref={shareRef}>
          {/* Share Button */}
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="text-blue-500 flex justify-end cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7m-5-5l-4-4m0 0l-4 4m4-4v12" />
            </svg>
            Share
          </button>

          {/* Share Options */}
          {showOptions && (
            <div className="absolute opacity-70 top-12 left-0 bg-white border border-gray-300 rounded-md shadow-md z-10">
              <ul>
                <li className="hover:text-blue-500">
                  <a
                    href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20${window.location.href}`}
                    className="block px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share via WhatsApp
                  </a>
                </li>
                <li className="hover:text-blue-500">
                  <a
                    href={`mailto:?subject=Check%20this%20out&body=${window.location.href}`}
                    className="block px-4 py-2"
                  >
                    Share via Gmail
                  </a>
                </li>
                <li className="hover:text-blue-500">
                  <button onClick={copyLink} className="block px-4 py-2 w-full text-left">
                    Copy Link
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
        

      <div className="max-w-6xl mx-auto flex gap-8 mt-2 mb-4 bg-white shadow-lg rounded-lg p-6">
        {/* Basic Info Section */}
        <div className="flex flex-col w-1/3">

                <div className="flex flex-col justify-center items-center gap-2 rounded-lg shadow-md bg-gray-50 p-4">
                    <div className="mb-2">
                        <img
                        src= {everyoneSee ? profileimgMale : profileimg}  // Placeholder image for profile
                        alt="Profile"
                        className="rounded-full border-4 border-white h-36 w-36"
                        />
                    </div>
                    <h2 className="text-2xl font-bold">{applicant.name}</h2>
                    <p className="text-gray-600">{applicant.title}</p>
                    <p className="text-gray-600 text-center">{applicant.description}</p>
                </div>

                {/* Skills Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-2 mt-2 rounded-lg shadow-md bg-gray-50 p-4">
                    {applicant.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 py-2 px-6 rounded-full">{skill}</span>
                    ))}
                    </div>
                </div>

                {/* Language Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Languages</h3>
                    <div className="flex flex-col justify-between gap-2 mt-2 rounded-lg shadow-md bg-gray-50 p-4">
                        {applicant.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center mt-2 mb-2 p-1">
                            <p>{lang.name}</p>
                            <p className="text-gray-600 p-1">{lang.level}</p>
                        </div>
                        ))}
                    </div>
                </div>

                {/* social media link */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Social media Links</h3>
                    <div className="flex flex-col justify-between gap-2 mt-2 rounded-lg shadow-md bg-gray-50 p-4">
                        {applicant.social.map((social, index) => (
                        <div key={index} className="mt-2 mb-2 p-1">
                            <a href={social.link} target='_blank'>{social.link}</a>
                        </div>
                        ))}
                    </div>
                </div>
        </div>

        <div className="flex flex-col w-2/3">
                <h className="text-lg font-semibold mt-2 mb-2 p-2">Basic Information</h>
                <div className="flex flex-col gap-4 p-2">
                    <div className="grid grid-cols-3 gap-6 bg-gray-50 p-4 rounded-lg shadow-md">
                        {/* First Row */}
                        {userRole === "employee" && (
                          <div className="text-center">
                            <p className="font-semibold">Age</p>
                            <p>{applicant.age} years</p>
                          </div>
                        )}
                        
                        <div className="text-center">
                            <p className="font-semibold">Location</p>
                            <p>{applicant.location}</p>
                        </div>
                        
                        {/* Second Row */}
                        {userRole === "employee" && (
                          <div className="text-center">
                            <p className="font-semibold">Phone</p>
                            <p>{applicant.phone}</p>
                          </div>
                        )}
                        
                        <div className="text-center">
                            <p className="font-semibold">Email</p>
                            <p>{applicant.email}</p>
                        </div>
                        {/* Extra column to fill space (or can be used for other info) */}
                        <div className="text-center">
                            <p className="font-semibold">Experience</p>
                            <p>{applicant.experienceYears} years</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-green-700 text-white px-4 py-2 rounded mt-4">Download Resume</button>
                        <button className="border border-green-700 text-green-700 px-4 py-2 rounded mt-4 ml-2">Send Email</button>
                    </div>
                </div>
               

                {/* Experience Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mt-2 mb-2 shadow-md">
                        {applicant.experience.map((exp, index) => (
                        <div key={index} className="mt-2 p-2 mb-2">
                            <p><strong>{exp.company}</strong> - {exp.role}</p>
                            <p className="text-gray-600 p-1">{exp.period} | {exp.location}</p>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold cursor-pointer" onClick={() => setShowEducation(!showEducation)}>
                    Education {showEducation ? '▲' : '▼'}
                    </h3>
                    {showEducation && (
                    <div className="mt-2">
                        <div className="bg-gray-50 p-4 rounded-lg mt-2 mb-2 shadow-md">
                            {applicant.education.map((edu, index) => (
                            <div key={index} className="mt-2 p-2 mb-2">
                                <p><strong>{edu.degree}</strong> - {edu.institution}</p>
                                <p className="text-gray-600 p-1">{edu.period} | {edu.location}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    )}
                </div>

                {/* Certifications Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold cursor-pointer" onClick={() => setShowCertifications(!showCertifications)}>
                    Certifications {showCertifications ? '▲' : '▼'}
                    </h3>
                    {showCertifications && (
                    <div className="mt-2">
                        <div className="bg-gray-50 p-4 rounded-lg mt-2 mb-2 shadow-md">
                            {applicant.certifications.map((cert, index) => (
                            <div key={index} className="mt-2 p-2 mb-2">
                                <p><strong>{cert.name}</strong> - {cert.issuer}</p>
                                <p className="text-gray-600 p-1">{cert.year}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    )}
                </div>

                {/* Accomplishments Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold cursor-pointer" onClick={() => setShowAccomplishments(!showAccomplishments)}>
                    Accomplishments {showAccomplishments ? '▲' : '▼'}
                    </h3>
                    {showAccomplishments && (
                    <div className="mt-2">
                        <div className="bg-gray-50 p-4 rounded-lg mt-2 mb-2 shadow-md">
                            {applicant.accomplishments.map((acc, index) => (
                            <div key={index} className="mt-2 p-2 mb-2">
                                <p><strong>{acc.name}</strong> - {acc.year}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    )}
                </div>
        </div>
      </div>
    </div>

  );
};

const ApplicantProfilePage = () => {

  // user profile data
  const applicantProfile = {
    name: "Ananya Grover",
    image: {profileimg},
    title: "UI/UX Designer",
    age: 28,
    profileeveryone: false,
    experienceYears: 6,
    ctc: "12.5 Lac",
    location: "Ahmedabad, Gujarat",
    phone: "+91 98123 XXXXX",
    email: "ananyasharma@gmail.com",
    description: `Full stack product designer with hands-on experience in solving problems for clients ranging 
    from Real Estate, Hospitality, IT Services, and more. I've good communication skills, 
    well-defined processes for engagement, and a user-centered approach to design.`,
    skills: [
      "User Interface Designing", "UX", "UI", "Adobe XD", "Mobile Apps",
      "User Research", "Wireframing", "Information Architecture"
    ],
    languages: [
      {   
        name: 'English',
        level: 'Intermediate'
      },
      {   
        name: 'Hindi',
        level: 'Intermediate'
      },
    ],
    social: [
      {   
        link: "https://google.com"
      },
      {   
        link: "https://google.com"
      },
    ],
    experience: [
      {
        company: "Infosys",
        role: "Product & UI/UX Designer",
        period: "Apr 2018 - Present",
        location: "Pune, India"
      },
      {
        company: "Pixel Studio",
        role: "UI/UX Designer",
        period: "Oct 2016 - July 2016",
        location: "Bengaluru, India"
      }
    ],
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "University of Delhi",
        period: "2012 - 2016",
        location: "Delhi, India"
      },
      {
        degree: "Diploma in UI/UX Design",
        institution: "NID Ahmedabad",
        period: "2017 - 2018",
        location: "Ahmedabad, Gujarat"
      }
    ],
    certifications: [
      { name: "Certified UX Professional", issuer: "Interaction Design Foundation", year: 2018 },
      { name: "Adobe XD Expert", issuer: "Adobe", year: 2019 }
    ],
    accomplishments: [
      { name: "Top 100 UX Designers in India", year: 2020 },
      { name: "Design Innovation Award", year: 2019 }
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Profile applicant={applicantProfile} />
    </div>
  );
};

export default ApplicantProfilePage;


