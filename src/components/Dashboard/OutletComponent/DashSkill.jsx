import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillComponent = () => {
    const navigate = useNavigate();
    const [skills, setSkills] = useState([
        { name: 'Python',
        level: 'Intermediate'
        },
        { name: 'C++',
        level: 'Intermediate'
        },
    ]);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const handleEducation = () => {
        // e.preventdefault();
        navigate('/dashboard/newskills');
        handleScrollToTop();
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">SKILLS</h2>

        {skills.map((skl, index) => (
            <div key={index} className="flex justify-between border p-5 rounded-lg bg-gray-50 mb-6 shadow-sm">
                <div className="mt-4">
                    <p><span className="font-semibold">Skill:</span> {skl.name}</p>
                    <p><span className="font-semibold">Proficiency Level:</span> {skl.level}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                    <button 
                    // onClick={onEdit} 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring">
                    Edit
                    </button>
                    <button 
                    // onClick={onDelete} 
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring">
                    Delete
                    </button>
                </div>
            </div>
            ))}
            <button className="block w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
            hover:bg-blue-600 focus:outline-none focus:ring"
            onClick={handleEducation}>ADD NEW SKILL</button>
        </div>
    );
};

export default SkillComponent;
