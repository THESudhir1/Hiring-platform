// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import './tailwind.css';
import React from 'react';
import Signup from "./pages/Signup";
import NavBar from "./components/common/Navbar";
import Home from './components/common/Home';
import Footer from "./components/common/Footer";
import About from "./components/common/About";
import Contact from "./components/common/Contact";
import ContactForm from './components/Form/Contactform';
import Job from './components/Job/Job';
import JobDetails from './components/Job/JobDetails';
import Jobdata from "./Data/Jobdata";
import DashLayout from "./components/Dashboard/DashLayout";
import DashAppliedJobs from "./components/Dashboard/OutletComponent/DashAppliedJobs";
import BuildResume from "./components/Dashboard/OutletComponent/DashBuildResume";
import Profile from "./components/Dashboard/OutletComponent/DashProfile";
import ExperienceSection from "./components/Dashboard/OutletComponent/DashExperience";
import EducationSection from "./components/Dashboard/OutletComponent/DashEducation";
import AddExperience from './components/Dashboard/OutletComponent/AddNewExperience';
import AddEducation from './components/Dashboard/OutletComponent/AddNewEducation';
import SkillComponent from './components/Dashboard/OutletComponent/DashSkill';
import AddSkill from './components/Dashboard/OutletComponent/AddNewSkills';
import LanguageComponent from './components/Dashboard/OutletComponent/DashLanguage';
import AddLanguage from './components/Dashboard/OutletComponent/AddNewLanguage';
import ProfileEdit from './components/Dashboard/OutletComponent/DashEditProfile';
import Notification from './components/Dashboard/DashNotify';
import ApplicantProfilePage from './components/Dashboard/OutletComponent/Applicantprofile';
import CompanyProfilePage from './components/Dashboard/OutletComponent/CompanyProfile';
import EditCompanyProfilePage from './components/Dashboard/OutletComponent/EditCompanyProfile';
import CertificationSection from './components/Dashboard/OutletComponent/DashCertification';
import AddCertification from './components/Dashboard/OutletComponent/AddNewCertificates';
import AwardSection from './components/Dashboard/OutletComponent/DashAccomplishment';
import AddAward from './components/Dashboard/OutletComponent/Addaccomplishment';
import WelcomeSection from './components/Dashboard/OutletComponent/WelcomeProfile';
import CompanyProfile from './components/Dashboard/OutletComponent/DashCompanyprofile';
import ResumeUpload from './components/ui/UploadResume';
 

function App() {

  // for observer functionality but does not work
  // useEffect(() => {
  //   const navbar = document.querySelector("Navbar");
  //   const footer = document.querySelector("Footer");

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         navbar.style.display = "none";
  //         console.log("navbar is hide");
  //          // Hide the navbar
  //       } else {
  //         navbar.style.display = "flex"; // Show the navbar
  //         console.log("navbar is visible");
          
  //       }
  //     },
  //     {
  //       root: null, // Observe within the viewport
  //       threshold: 0.1, // Trigger when 10% of the footer is visible
  //     }
  //   );

  //   if (footer) {
  //     observer.observe(footer); // Start observing the footer
  //   }

  //   return () => {
  //     if (footer) observer.unobserve(footer); // Clean up the observer
  //   };
  // }, []);

  return (
    <Router> {/* Wrap your application inside Router */}
      <div className="min-h-screen bg-richblack-900 flex flex-col font-inter overflow-y-hidden">
        <NavBar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path = "/contact" element={<Contact />} />
          <Route path = "/contactform" element = {<ContactForm />} />
          <Route path = "/jobs" element = {<Job/>} />
          <Route path = "/job/:id" element = {<JobDetails Jobdata={Jobdata} />} />
          <Route path = "/edit-profile" element = {<ProfileEdit />} />
          <Route path = "/editcompanyprofile" element = {<EditCompanyProfilePage />} />
          <Route path='/applicantprofile' element={<ApplicantProfilePage />} />
          <Route path='/companyprofile' element={<CompanyProfilePage />} />
          <Route path='/uploadresume' element={<ResumeUpload />} />
          <Route path = "/notifications" element = {<Notification />} />
          <Route path="/dashboard" element={<DashLayout />}>
              <Route path="welcome" element={<WelcomeSection />} />
              {/* These will render inside the <Outlet /> in DashLayout */}
              <Route path='companyprofile' element={<CompanyProfile />} />
              <Route path="applied-jobs" element={<DashAppliedJobs />} />
              {/* <Route path="experience" element={<DashExperience />} /> */}
              <Route path="build-resume" element={<BuildResume />} />
              <Route path="profile" element={<Profile />} />
              <Route path="experience" element={<ExperienceSection />} />
              <Route path="education" element={<EducationSection />} />
              <Route path="newexperience" element={<AddExperience />} /> 
              <Route path="neweducation" element={<AddEducation />} />
              <Route path="skills" element={<SkillComponent />} />
              <Route path="newskills" element={<AddSkill />} />
              <Route path="languages" element={<LanguageComponent />} />
              <Route path="newlanguage" element={<AddLanguage />} />
              <Route path="certificate" element={<CertificationSection />} />
              <Route path="newcertificate" element={<AddCertification />} />
              <Route path="awards" element={<AwardSection />} />
              <Route path="newawards" element={<AddAward />} />
              {/* Add more child routes here */}
            </Route>
        </Routes>

        {/* Footer section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
