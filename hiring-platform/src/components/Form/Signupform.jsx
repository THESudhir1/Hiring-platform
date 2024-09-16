import { useState } from "react";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


const Signupform = () => {
    const [accountType, setAccountType] = useState("Employee");
    const [showPassword, setshowPassword] = useState(false);
    const [showconfirmPassword, setshowconfirmPassword] = useState(false);

    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        accountType: "",
    });

    function changeHandler(event) {
        setformData( (prevdata) => {
            return {
                ...prevdata,
                [event.target.name] : event.target.value,
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            console.log("Password Not Matched");
        }
        formData.accountType = accountType;
        console.log(formData);
        
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
        <p className="text-4xl font-bold text-green-700 mb-16 mt-16">
            Find your Dream Job
        </p>
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full text-white ${
              accountType === "Employee" ? "bg-green-700" : "bg-green-500"
            }`}
            onClick={() => setAccountType("Employee")}
          >
            Employee
          </button>
          <button
            className={`px-4 py-2 rounded-full text-white ${
              accountType === "Employer" ? "bg-green-700" : "bg-green-500"
            }`}
            onClick={() => setAccountType("Employer")}
          >
            Employer
          </button>
        </div>

        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <label className="flex flex-col gap-1 text-white">
              <p className="text-lg font-medium text-white">
                First Name <sup className="text-red-600">*</sup>
              </p>
              <input
                type="text"
                placeholder="Enter First Name"
                required
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <label className="flex flex-col gap-1 text-white">
              <p className="font-semibold text-white">
                Last Name <sup className="text-red-600">*</sup>
              </p>
              <input
                type="text"
                placeholder="Enter Last Name"
                required
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1 mb-6 text-white">
            <p className="font-semibold text-white">
              Email Address <sup className="text-red-600">*</sup>
            </p>
            <input
              type="email"
              placeholder="Enter email here"
              required
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col gap-1 mb-6 text-white">
            <p className="font-semibold text-white">
              Phone Number <sup className="text-red-600">*</sup>
            </p>
            <input
              type="tel"
              placeholder="0123456789"
              required
              value={formData.contactNumber}
              name="contactNumber"
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="relative flex flex-col gap-1 mb-6">
            <p className="font-semibold text-white">
              Password <sup className="text-red-600">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              required
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={() => setshowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform translate-y-1/4 cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-gray-600 text-xl" />
              ) : (
                <AiOutlineEye className="text-gray-600 text-xl" />
              )}
            </span>
          </label>

          <label className="relative flex flex-col gap-1 mb-6">
            <p className="font-semibold text-white">
              Confirm Password <sup className="text-red-600">*</sup>
            </p>
            <input
              type={showconfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 bg-gray-50 text-black rounded-full placeholder-opacity-80 border-none outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={() => setshowconfirmPassword(!showconfirmPassword)}
              className="absolute top-1/2 right-3 transform translate-y-1/4 cursor-pointer text-blue-400"
            >
              {showconfirmPassword ? (
                <AiOutlineEyeInvisible className="text-gray-600 text-xl" />
              ) : (
                <AiOutlineEye className="text-gray-600 text-xl" />
              )}
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    );
};

export default Signupform;
