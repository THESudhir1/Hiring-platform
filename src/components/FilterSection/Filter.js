import React, { useState } from 'react';
import './Filter.css'; // Assuming your CSS is in this file

const FilterSection = () => {
    const initialPreferences = {
        profile: '',
        location: '',
        workFromHome: false,
        partTime: false,
        salary: 0,
        experience: '',
        searchKeywords: '',
        preferencesVisible: false,
    };

    const [profile, setProfile] = useState(initialPreferences.profile);
    const [location, setLocation] = useState(initialPreferences.location);
    const [workFromHome, setWorkFromHome] = useState(initialPreferences.workFromHome);
    const [partTime, setPartTime] = useState(initialPreferences.partTime);
    const [salary, setSalary] = useState(initialPreferences.salary);
    const [experience, setExperience] = useState(initialPreferences.experience);
    const [searchKeywords, setSearchKeywords] = useState(initialPreferences.searchKeywords);
    const [preferencesVisible, setPreferencesVisible] = useState(initialPreferences.preferencesVisible);

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic
    };

    const clearFilters = () => {
        setProfile(initialPreferences.profile);
        setLocation(initialPreferences.location);
        setWorkFromHome(initialPreferences.workFromHome);
        setPartTime(initialPreferences.partTime);
        setSalary(initialPreferences.salary);
        setExperience(initialPreferences.experience);
        setSearchKeywords(initialPreferences.searchKeywords);
        setPreferencesVisible(initialPreferences.preferencesVisible);
    };

    return (
        
        <section className="filter-section">
            <form onSubmit={handleSearch}>
                {/* Preferences Checkbox */}
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="preferences"
                        checked={preferencesVisible}
                        onChange={() => setPreferencesVisible(!preferencesVisible)}
                    />
                    <label htmlFor="preferences">As per my preferences</label>
                </div>

                {/* Conditional rendering of preferences section */}
                {preferencesVisible && (
                    <fieldset className="preferences-section">
                        {/* <legend>Preferences</legend> */}

                        {/* Profile */}
                        
                        <label htmlFor="profile">Profile</label>
                        <input
                            type="text"
                            id="profile"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                            placeholder="e.g. Marketing"
                        />

                        {/* Location */}
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g. Delhi"
                        />

                        {/* Work from home */}
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="work-from-home"
                                checked={workFromHome}
                                onChange={() => setWorkFromHome(!workFromHome)}
                            />
                            <label htmlFor="work-from-home">Work from home</label>
                        </div>

                        {/* Part-time */}
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="part-time"
                                checked={partTime}
                                onChange={() => setPartTime(!partTime)}
                            />
                            <label htmlFor="part-time">Part-time</label>
                        </div>

                        {/* Annual salary */}
                        <label htmlFor="salary">Annual salary (in lakhs)</label>
                        <input
                            type="range"
                            id="salary"
                            min="0"
                            max="10"
                            step="0.5"
                            value={salary}
                            onChange={handleSalaryChange}
                        />
                        <div className="salary-output">
                            <output>{salary}</output> Lakhs
                        </div>

                        {/* Years of experience */}
                        <label htmlFor="experience">Years of experience</label>
                        <select
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        >
                            <option value="">Select years of experience</option>
                            <option value="1">1 year</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                        </select>
                    </fieldset>
                )}

                {/* Clear all / Search */}
                <div className="action-buttons">
                    <button 
                        type="button" 
                        className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-300" 
                        onClick={clearFilters}
                    >
                        Clear all
                    </button>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-300"
                    >
                        Search
                    </button>
                </div>

                {/* Search by keywords */}
                {/* <label htmlFor="search-keywords">Search</label>
                <input
                    type="text"
                    id="search-keywords"
                    value={searchKeywords}
                    onChange={(e) => setSearchKeywords(e.target.value)}
                    placeholder="e.g. Design, Mumbai, Infosys"
                /> */}
            </form>
        </section>
    );
};

export default FilterSection;
