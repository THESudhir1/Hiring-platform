import React, {useState, useEffect} from 'react';
// import AddExperience from './AddNewExperience';
import { useNavigate } from 'react-router-dom';


const CertificationSection = () => {

    const navigate = useNavigate(); // Define navigate

    const [certification, setCertification] = useState([
        {
          name: "Google Data Analytics",
          provider: "Coursera",
          startDate: "June 22, 2024",
          endDate: "Present",
          certificate: "/path-to-brochure.pdf",
        },
        // {
        //   school: "J.K. University",
        //   course: "B.Tech (ECE)",
        //   startDate: "June 22, 2024",
        //   endDate: "Present",
        // },
    ]);

    // Function to add a new experience to the state
    // const addNewExperience = (newExperience) => {
    //     setExperiences([...experiences, newExperience]);
    // };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const handleCertification = () => {
        // e.preventdefault();
        navigate('/dashboard/newcertificate');
        handleScrollToTop();
    }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Certificates</h2>
      
      {certification.map((cert, index) => (
        <div key={index} className="border p-5 rounded-lg bg-gray-50 mb-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{cert.name}</h3>
              <p className="text-gray-500">{cert.provider}</p>
            </div>
            <span className="text-gray-500">{cert.startDate} - {cert.endDate}</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className="mb-4 p-8 flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">Brochure</h2>
                    <a href={cert.certificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Download Certificate (PDF)
                    </a>
            </div>

            <div className="flex justify-end space-x-4 mt-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring">Edit</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring">Delete</button>
            </div>
          </div>
          
        </div>
      ))}

      <button className="block w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
        hover:bg-blue-600 focus:outline-none focus:ring"
        onClick={handleCertification}>
        Add New Certification
      </button>
    </div>
  );
};

export default CertificationSection;
