import React, {useState, useEffect} from 'react';
// import AddExperience from './AddNewExperience';
import { useNavigate } from 'react-router-dom';
import awardimg from "../../../assets/Images/companyimgbg.jpg";


const AwardSection = () => {

    const navigate = useNavigate(); // Define navigate

    const [awards, setAwards] = useState([
        {
          name: "Football Tournament",
          provider: "At college Fest",
          description: "At college i attend football tournament and my team won 1st prize. At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize.At college i attend football tournament and my team won 1st prize. At college i attend football tournament and my team won 1st prize.",
          awardimage: awardimg,
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

    const handleAwards = () => {
        // e.preventdefault();
        navigate('/dashboard/newawards');
        handleScrollToTop();
    }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Awards</h2>
      
      {awards.map((award, index) => (
        <div key={index} className="border p-5 rounded-lg bg-gray-50 mb-6 shadow-sm">
          <div className="flex flex-col justify-between items-start gap-2 p-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{award.name}</h3>
              <p className="text-gray-500">{award.provider}</p>
              <p className="text-gray-500">{award.description}</p>
            </div>
            <div>
                <img
                    src={award.awardimage}
                    className='w-30 h-50 rounded-lg'
                    alt='award image'
                    >
                </img>
            </div>
          </div>
          <div>
            <div className="flex justify-start gap-4 items-center mt-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring">Edit</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring">Delete</button>
            </div>
          </div>
          
        </div>
      ))}

      <button className="block w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
        hover:bg-blue-600 focus:outline-none focus:ring"
        onClick={handleAwards}>
        Add New Award
      </button>
    </div>
  );
};

export default AwardSection;
