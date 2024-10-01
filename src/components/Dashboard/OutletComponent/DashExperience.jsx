import React, {useState, useEffect} from 'react';
// import AddExperience from './AddNewExperience';
import { useNavigate } from 'react-router-dom';


const ExperienceSection = () => {

    const navigate = useNavigate(); // Define navigate

    const [experiences, setExperiences] = useState([
        {
          title: "Software Developer",
          company: "Vowell, AT Online",
          startDate: "June 22, 2024",
          endDate: "Present",
        },
        {
          title: "Junior Developer",
          company: "Tech Innovations, Inc.",
          startDate: "Jan 10, 2023",
          endDate: "June 10, 2024",
        },
        {
            title: "Junior Developer II",
            company: "Tech Innovations, Inc.",
            startDate: "Jan 10, 2023",
            endDate: "June 10, 2024",
          },
    ]);

    // Function to add a new experience to the state
    // const addNewExperience = (newExperience) => {
    //     setExperiences([...experiences, newExperience]);
    // };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const handleExperience = () => {
        // e.preventdefault();
        navigate('/dashboard/newexperience');
        handleScrollToTop();
    }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Experience</h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="border p-5 rounded-lg bg-gray-50 mb-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{exp.title}</h3>
              <p className="text-gray-500">{exp.company}</p>
            </div>
            <span className="text-gray-500">{exp.startDate} - {exp.endDate}</span>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring">Edit</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring">Delete</button>
          </div>
        </div>
      ))}

      <button className="block w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
        hover:bg-blue-600 focus:outline-none focus:ring"
        onClick={handleExperience}>
        Add New Experience
        {/* <AddExperience onAddExperience={addNewExperience} /> */}
      </button>
    </div>
  );
};

export default ExperienceSection;
