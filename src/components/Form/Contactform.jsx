import { useState } from 'react';
import {Link} from "react-router-dom";

const ContactForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(file);  
    console.log('Form submitted');
  };

  return (
    <div className="bg-white w-full p-2">
      <div class="text-gray-600 mt-24 items-start p-4">
          <Link to="/" class="hover:text-gray-800">Home</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/Contact" class="font-md">Contact Us</Link>
          <span class="mx-2 h-4 w-2">›</span>
          <Link to="/contactform" class="font-md">Contact Us Form</Link>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-12 mb-12">
      
        <h2 className="text-xl font-semibold mb-4">Hi, submit your query below</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          
          {/* Subject Dropdown */}
          <div>
            <label htmlFor="subject" className="block font-medium text-gray-700">Subject</label>
            <select
              id="subject"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option>Choose subject</option>
              <option>Internships & Jobs</option>
              <option>General Inquiry</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="In order to post a query, log in here."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          
          {/* File Attachment */}
          <div>
            <label htmlFor="attachment" className="text-green-600 font-semibold flex items-center space-x-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 rounded-full" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 9a3 3 0 106 0v3a4 4 0 01-8 0V7a5 5 0 1110 0v3a6 6 0 11-12 0V5a7 7 0 1114 0v7a8 8 0 11-16 0V5a9 9 0 1118 0v7a10 10 0 11-20 0V5a11 11 0 1122 0v7a12 12 0 11-24 0V5a13 13 0 1126 0v7a14 14 0 11-28 0V5a15 15 0 1130 0v7z" clipRule="evenodd" />
              </svg>
              <span>Add attachment</span>
            </label>
            <input
              type="file"
              id="attachment"
              accept=".jpeg,.jpg,.png,.gif,.bmp,.pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
            <p className="text-xs text-gray-500 mt-1">Maximum file size 5 MB. Only jpeg, jpg, png, gif, bmp, pdf allowed.</p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>

    </div>
    
  );
};

export default ContactForm;
