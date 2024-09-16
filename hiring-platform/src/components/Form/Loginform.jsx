import React, { useState } from 'react';
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineEyeInvisible} from "react-icons/ai"












const Loginform = () => {
    const [showpassword,setshowpassword] = useState(false)
    const [formData,setFormData] = useState({
        email:"",password:""
    })

    function changeHandler(event) {
        setFormData((prevdata) => {
          return {
            ...prevdata,
            [event.target.name]: event.target.value,
          };
        });
    }

    // const {email,password} = formData
    function submitHandler(event){
        event.preventDefault();
        // dispatch(login(email,password,navigate));
        console.log("formData printing ",formData)
    }

    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            {/* Company Name and Logo */}
            <div className="text-4xl font-bold text-green-700 mb-4">
                Demo Company Name & Logo
            </div>

            {/* Welcome Message */}
            <p className="text-3xl font-semibold text-green-600 mb-6">
                Welcome Back!
            </p>

            {/* Login Form */}
            <form
                onSubmit={submitHandler}
                className="w-full max-w-md bg-gradient-to-r from-green-500 to-green-700 p-8 rounded-lg shadow-lg flex flex-col gap-6"
            >
                {/* Email Input */}
                <label className="text-white">
                <p className="text-lg font-medium">
                    Email Address <sup className="text-red-500">*</sup>
                </p>
                <input
                    type="email"
                    required
                    placeholder="Enter Email Here"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
                />
                </label>

                {/* Password Input */}
                <label className="text-white relative">
                <p className="text-lg font-medium">
                    Password <sup className="text-red-500">*</sup>
                </p>
                <input
                    type={showpassword ? "text" : "password"}
                    required
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
                />
                {/* Password Visibility Toggle */}
                <span
                    onClick={() => setshowpassword(!showpassword)}
                    className="absolute right-4 top-10 cursor-pointer"
                >
                    {showpassword ? (
                    <AiOutlineEyeInvisible className="text-white text-2xl" />
                    ) : (
                    <AiOutlineEye className="text-white text-2xl" />
                    )}
                </span>
                </label>

                {/* Sign In Button */}
                <button
                className="w-full bg-green-700 text-white text-lg font-semibold py-2 rounded-full hover:bg-green-600 transition-all duration-300"
                type="submit"
                >
                Sign In
                </button>

                {/* Forgot Password */}
                <button className="text-sm text-white self-end hover:text-blue-400 transition-colors duration-300">
                Forgot Password?
                </button>

                <div className="flex items-center">
                    <div className="flex-grow border-t border-white"></div>
                    <span className="mx-4 text-white">OR</span>
                    <div className="flex-grow border-t border-white"></div>
                </div>

                {/* Don't have an account? */}
                <div className="text-center -mt-2">
                <p className="text-white">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-white hover:text-blue-600">
                    Go to Signup
                    </a>
                </p>
                </div>

                {/* Google Sign-In Button */}
                <div className="flex justify-center">
                <button
                    className="flex items-center bg-white text-green-700 py-2 px-4 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-500"
                    
                >
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google Logo"
                    className="w-6 h-6 mr-2"
                    />
                    Sign in with Google
                </button>
                </div>
            </form>

            

        </div>
    );
};

export default Loginform
