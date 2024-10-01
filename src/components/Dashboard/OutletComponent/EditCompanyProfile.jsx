import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditCompanyProfile = ({ company, onSave }) => {

     // State for each form field
    const [companylogo, setCompanylogo] = useState(null);
    const [description, setDescription] = useState('');
    const [vision, setVision] = useState('');
    const [establishmentDate, setEstablishmentDate] = useState('');
    const [website, setWebsite] = useState('');
    const [emailid, setEmailid] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [name, setName] = useState('');
    const [brochure, setBrochure] = useState(null);

    const [formData, setFormData] = useState(company);

    function handlesave(profileData){
        setFormData({ ...company, profileData });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create profile object with entered details
        const profileData = {
            companylogo,  // This would normally be uploaded and the link saved
            name,
            description,
            vision,
            establishmentDate,
            industryType,
            website,
            emailid,
            brochure  // Similarly, resume would normally be uploaded and link saved
        }
        handlesave(profileData);
        onSave(profileData);  // Save the updated data
        console.log(profileData); // For now, log the data to console
        alert('Profile updated successfully!');
    };

    

  return (
    <div className='w-full'>
        <div className="w-full h-36 mt-16 bg-gray-500">
            <h2 className="text-3xl p-6 font-semibold text-center text-white">Edit Your Company Info</h2>
            <div class="text-white items-start p-4">
                <Link to="/" class="hover:text-gray-800">Home</Link>
                <span class="mx-2 h-4 w-2">›</span>
                <Link to="/dashboard/companyprofile" class="font-md">Profile</Link>
                <span class="mx-2 h-4 w-2">›</span>
                <Link to="/editcompanyprofile" class="font-md">Edit Profile</Link>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mt-12 my-8 p-8 bg-white shadow-lg rounded-lg opacity-90">
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Company Name</label>
                <input
                type="text"
                name="name"
                placeholder="Enter your company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="establishmentDate">Establishment Date</label>
                <input
                type="date"
                name="establishmentDate"
                value={establishmentDate}
                onChange={(e) => setEstablishmentDate(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="industryType">Industry Type</label>
                <input
                type="text"
                name="industryType"
                value={industryType}
                placeholder='Enter Industry type'
                onChange={(e) => setIndustryType(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="vision">Vision</label>
                <textarea
                name="vision"
                value={vision}
                placeholder='Enter your vision'
                onChange={(e) => setVision(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Company Description</label>
                <textarea
                name="description"
                value={description}
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="website">Website</label>
                <input
                type="url"
                name="website"
                value={website}
                placeholder='Enter website link'
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="website">Email ID</label>
                <input
                type="url"
                name="emailid"
                value={emailid}
                placeholder='Enter website link'
                onChange={(e) => setEmailid(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Upload Brochure */}
            <div>
            <label className="block font-medium mb-2 mt-2">Upload Brochure</label>
            <input
                type="file"
                className="mt-2 mb-4 p-2"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setBrochure(e.target.files[0])}
            />
            </div>

           {/* Company Profile Picture */}
            <div>
            <label className="block font-medium mb-2 mt-2">Upload Company Profile Picture</label>
            <input
                type="file"
                className="mt-2 mb-4 p-2"
                accept="image/*"
                onChange={(e) => setCompanylogo(e.target.files[0])}
            />
            </div>

            <button type="submit" className="w-full mt-4 mb-4 bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring">
                Save Changes
            </button>
        </form>
    </div>
    
  );
};

const EditCompanyProfilePage = () => {

    const companyData = {
        name: "Tech Innovators Inc.",
        establishmentDate: "2005-08-15",
        industryType: "Software Development",
        vision: "Innovating the future through cutting-edge technology.",
        description: "Tech Innovators Inc. is a global leader in software development.",
        website: "https://techinnovators.com",
        brochure: "/path-to-brochure.pdf",
        logo: "/path-to-logo.png"
    };

    const handleSave = (updatedData) => {
        console.log("Saved Company Data: ", updatedData);
    };

    return (
        <div className="min-h-screen bg-gray-100">
           <EditCompanyProfile company={companyData} onSave={handleSave} />;
        </div>
    );
};

export default EditCompanyProfilePage;
