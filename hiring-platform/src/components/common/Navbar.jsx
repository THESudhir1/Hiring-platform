import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Here you can check if the user is logged in (this is a placeholder example)
        const user = localStorage.getItem('user'); // Assuming you store the user in localStorage
        if (user) {
        setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear user data on logout
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    return(
        <nav className="bg-green-700 text-white py-4 px-8 flex justify-between items-center">
            {/* Company Name */}
            <a href='/'>
                <h1 className="text-2xl font-bold">Demo</h1>
            </a>

            {/* Navbar Links */}
            <div className="flex gap-6 items-center">
                {/* <Link
                to="/"
                className="hover:text-blue-500 hover:underline transition-colors duration-300"
                >
                Home
                </Link> */}
                <Link
                to="/jobs"
                className="hover:text-blue-500 hover:underline transition-colors duration-300"
                >
                Jobs
                </Link>
                {/* Check if user is logged in to show different links */}
                {isLoggedIn ? (
                <>
                    <Link
                    to="/dashboard"
                    className="hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                    Dashboard
                    </Link>
                    <button
                    onClick={handleLogout}
                    className="hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                    Logout
                    </button>
                </>
                ) : (
                <>
                    <Link
                    to="/login"
                    className="hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                    Login
                    </Link>
                    <Link
                    to="/signup"
                    className="hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                    Signup
                    </Link>
                </>
                )}
                <Link
                to="/about"
                className="hover:text-blue-500 hover:underline transition-colors duration-300"
                >
                About
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;