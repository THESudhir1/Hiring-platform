import React from "react";
import {Link} from "react-router-dom";


const ContactUs = () => {
    return (
      <div className="bg-gray-100 py-12 px-4 mt-16">
        <div class="text-gray-600 p-4 items-start">
          <Link to="/" class="hover:text-gray-800">Home</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/Contact" class="font-md">Contact Us</Link>
        </div>

        <div className="flex flex-col gap-1 mb-8">
            <h2 className="text-center text-3xl font-bold">Contact Us</h2>
            {/* Underline without animation */}
            <div
            className="w-10 h-1 bg-green-600 mx-auto"
            ></div>
        </div>
        
        {/* Help Center Section */}
        <div className="flex justify-evenly mb-12">
          <div className="flex flex-col justify-evenly items-start bg-gradient-to-r from-green-500 to-green-700 shadow-md rounded-3xl p-6 w-80">
            <h3 className="text-xl font-bold mb-4 text-white">Students - Internships & Jobs</h3>
            <p className="mb-6 text-white font-medium">For internships and jobs related queries, visit Student Help Center.</p>
            <a href="/contactform" className="bg-white text-green-700 text-lg font-semibold rounded-full 
                p-2 py-1 hover:bg-green-600 hover:text-white transition-all duration-1000">
              Visit student help center
            </a>
          </div>
  
          <div className="flex flex-col justify-evenly items-start bg-gradient-to-r from-green-500 to-green-700 shadow-md rounded-3xl p-6 w-80">
            <h3 className="text-xl font-bold mb-4 text-white">Employers</h3>
            <p className="mb-6 text-white font-medium">For employer queries, visit Employer Help Center.</p>
            <a href="/contactform" className="bg-white text-green-700 text-lg font-semibold rounded-full 
                p-2 py-1 hover:bg-green-600 hover:text-white transition-all duration-1000 ">
              Visit employer help center
            </a>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="flex justify-center items-start mb-12 p-2 gap-20">
          <div className=" p-4 ml-20">
            <h4 className="font-bold mb-4 text-xl">For others</h4>
            <ul>
              <li className="mb-2">
                <h1 className="text-black font-semibold -mb-6">University/college associations</h1><br />
                <div className="flex flex-row gap-2">
                    <p>Email us: </p>
                    <a href="mailto:university.relations@example.com" className="text-blue-600">
                    university.relations@example.com
                    </a>
                </div>
                
              </li>
              <li className="mb-2">
              <h1 className="text-black font-semibold -mb-6">Media queries</h1><br />
                <div className="flex flex-row gap-2">
                    <p>Email us: </p>
                    <a href="mailto:university.relations@example.com" className="text-blue-600">
                    university.relations@example.com
                    </a>
                </div>
              </li>
              <li className="mb-2">
              <h1 className="text-black font-semibold -mb-6">Fest sponsorships</h1><br />
                <div className="flex flex-row gap-2">
                    <p>Email us: </p>
                    <a href="mailto:university.relations@example.com" className="text-blue-600">
                    university.relations@example.com
                    </a>
                </div>
              </li>
              <li>
              <h1 className="text-black font-semibold -mb-6">For everything else</h1><br />
                <div className="flex flex-row gap-2">
                    <p>Email us: </p>
                    <a href="mailto:university.relations@example.com" className="text-blue-600">
                    university.relations@example.com
                    </a>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Address Section */}
          <div className=" p-4 ml-20">
            <h4 className="font-bold mb-4">Address</h4>
            <p className="font-normal text-base">Vowel Pvt. Ltd.<br />
            STPI Prayagraj MNNIT Allahabad Campus, Teliarganj, Prayagraj,
            Uttar Pradesh 211001, IN</p>
            <div className="mt-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.387354934981!2d81.85869257416499!3d25.4921249196942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3ce7f39e89%3A0x2cc3f9aec49962a4!2sSTPI%20Allahabad!5e0!3m2!1sen!2sin!4v1726902657674!5m2!1sen!2sin" 
                className="w-3/4 h-[200px] rounded-lg mb-4" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              <a href="https://maps.app.goo.gl/QpignoqXrEMuPxRT8" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png"
                  alt="Google Maps"
                  className="w-30 h-20"
                />
              </a>
              <p className="mt-2">Working Hours: Monday to Friday, 10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  