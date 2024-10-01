import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
  // State for each form field
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [objective, setObjective] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [website, setWebsite] = useState('');
  const [interests, setInterests] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [resume, setResume] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create profile object with entered details
    const profileData = {
      profilePhoto,  // This would normally be uploaded and the link saved
      objective,
      address,
      dob,
      phoneNumber,
      gender,
      website,
      interests,
      linkedin,
      github,
      twitter,
      facebook,
      resume  // Similarly, resume would normally be uploaded and link saved
    };

    console.log(profileData); // For now, log the data to console
    alert('Profile updated successfully!');

    // Reset form fields if needed
  };

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-16">
        <div className="w-full h-36 bg-gray-500">
            <h2 className="text-3xl p-6 font-semibold text-center mb-6 text-white">Edit Your Personal Info</h2>
            <div class="text-white items-start p-4 -mt-8 ml-2">
                <Link to="/" class="hover:text-blue-800">Home</Link>
                <span class="mx-2 h-4 w-2">›</span>
                <Link to="/dashboard/profile" class="font-md">Profile</Link>
                <span class="mx-2 h-4 w-2">›</span>
                <Link to="/edit-profile" class="font-md">Edit Profile</Link>
            </div>
        </div>
      
      
      <form onSubmit={handleSubmit} className=" max-w-4xl mx-auto mt-12 mb-12 p-6 border bg-gray-50 rounded-lg">
        {/* Profile Picture */}
        <div>
          <label className="block font-medium mb-2 mt-2">Upload Profile Picture</label>
          <input
            type="file"
            className="p-2"
            accept="image/*"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
          />
        </div>

        {/* Objective */}
        <div>
          <label className="block font-medium mb-2 mt-4">Objective</label>
          <textarea
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Enter your objective"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium mb-2 mt-4">Address</label>
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium mb-2 mt-4">Date of Birth</label>
          <input
            type="date"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium mb-2 mt-4">Phone Number</label>
          <input
            type="tel"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium mb-2 mt-4">Gender</label>
          <select
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium mb-2 mt-4">Website Link</label>
          <input
            type="url"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter your website link"
          />
        </div>

        {/* Interests */}
        <div>
          <label className="block font-medium mb-2 mt-4">Interests</label>
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Enter your interests"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block font-medium mb-2 mt-4">LinkedIn Link</label>
          <input
            type="url"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="Enter your LinkedIn profile link"
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block font-medium mb-2 mt-4">GitHub Link</label>
          <input
            type="url"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="Enter your GitHub profile link"
          />
        </div>

        {/* Twitter */}
        <div>
          <label className="block font-medium mb-2 mt-4">Twitter Link</label>
          <input
            type="url"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="Enter your Twitter profile link"
          />
        </div>

        {/* Facebook */}
        <div>
          <label className="block font-medium mb-2 mt-4">Facebook Link</label>
          <input
            type="url"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="Enter your Facebook profile link"
          />
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block font-medium mb-2 mt-4">Upload Resume</label>
          <input
            type="file"
            className="mt-2 mb-4 p-2"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 mb-4 bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
