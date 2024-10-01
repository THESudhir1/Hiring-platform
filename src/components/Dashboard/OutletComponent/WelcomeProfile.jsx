import React, {useState, useEffect} from 'react';
// import AddExperience from './AddNewExperience';
import { useNavigate } from 'react-router-dom';
import profilebg1 from "../../../assets/Images/profilebg.jpeg";

const WelcomeSection = () => {

  return (
    <div className="w-full h-screen flex justify-center items-center text-5xl font-light bg-fixed bg-cover bg-center"
    style={{backgroundImage: `url(${profilebg1})`}}>
      Welcome To Profile Section
    </div>
  );
};

export default WelcomeSection;
