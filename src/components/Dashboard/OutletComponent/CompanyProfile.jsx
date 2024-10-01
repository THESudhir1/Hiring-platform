import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import companyimgbg from "../../../assets/Images/companyimgbg.jpg";

const CompanyProfile = ({ company }) => {

    const navigate = useNavigate();
    const shareRef = useRef(null); // Reference for the dropdown
    // const cansee = applicant.profileeveryone;
    // console.log(cansee);
    

    // Mock authentication and role checking functions 
    const [showOptions, setShowOptions] = useState(false);
    const [userRole, setuserRole] = useState("employee"); // Change this to 'employer' for testing
    const [isLoggedIn, setisLoggedIn] = useState(true);   // Set to true if the user is logged in
    // const [everyoneSee, seteveryoneSee] = useState(cansee);
    // console.log(everyoneSee);

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
    <div className='w-full p-1'>
        <div className="flex justify-between items-center">
            <div class="text-gray-600 mt-12 items-start p-4">
                <Link to="/" class="hover:text-gray-800">Home</Link>
                <span class="mx-2 h-4 w-2">›</span>
                <Link to="/dashboard/companyprofile" class="font-md">Profile</Link>
            </div>

            {/* share link section */}
            <div className="relative mt-12 mr-32" ref={shareRef}>
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

        <div className="max-w-5xl mx-auto my-8 bg-white shadow-lg rounded-lg">
            <div>
                <img
                src={companyimgbg}
                className='w-full max-h-60 rounded-t-lg'
                >
                </img>
            </div>
            <div className="flex justify-between items-center mt-4 mb-4 p-8">
                <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-30 h-20 rounded-2xl"
                />
                <div className='flex flex-col gap-3'>
                <h1 className="text-2xl font-bold">{company.name}</h1>
                <p className="text-sm text-gray-500">Established: {company.establishmentDate}</p>
                </div>
            </div>

            <div className="mb-4 p-8 flex items-center gap-8">
                <h2 className="text-xl font-semibold">Industry Type</h2>
                <p>{company.industryType}</p>
            </div>

            <div className="mb-4 p-8 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Vision</h2>
                <p>{company.vision}</p>
            </div>

            <div className="mb-4 p-8 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Company Description</h2>
                <p>{company.description}</p>
            </div>

            <div className="mb-4 flex flex-col gap-3 p-8">
                <h2 className="text-xl font-semibold">Website</h2>
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {company.website}
                </a>
            </div>

            <div className="mb-4 flex flex-col gap-3 p-8">
                <h2 className="text-xl font-semibold">Email Id</h2>
                <a href={company.emailid} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {company.emailid}
                </a>
            </div>

            <div className="mb-4 p-8 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Brochure</h2>
                <a href={company.brochure} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Download Brochure (PDF)
                </a>
            </div>
        </div>
    </div>
    
  );
};


const CompanyProfilePage = () => {

    // Example company object
    const companyData = {
        name: "Tech Innovators Inc.",
        establishmentDate: "2005-08-15",
        industryType: "Software Development",
        vision: "Innovating the future through cutting-edge technology.",
        description: "Tech Innovators Inc. is a global leader in software development, delivering high-quality solutions for a wide range of industries.",
        website: "https://techinnovators.com",
        brochure: "/path-to-brochure.pdf",
        emailid : "www.google.com",
        logo: companyimgbg
    };
    
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <CompanyProfile company={companyData} />
      </div>
    );
};
  
export default CompanyProfilePage;
