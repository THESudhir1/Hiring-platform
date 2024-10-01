import React, { useRef, useState } from "react";
import resumebg from "../../assets/Images/Resumebg.jpg";

const ResumeUpload = () => {
  const [step, setStep] = useState(1);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      setStep(2); // Move to the next step
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-cover bg-center h-screen"
        style={{backgroundImage: `url(${resumebg})`}}>
        <div className="flex w-full flex-col items-center mt-12 mb-10 ">
            {/* Step Indicator */}
            <div className="flex flex-col items-center mb-5 w-4/5">
                <div className="flex justify-center items-center w-full relative">
                <div className="flex flex-col items-center relative">
                    <div
                    className={`flex items-center justify-center rounded-full w-10 h-10 ${
                        step >= 1 ? "bg-green-500 text-white" : "bg-gray-300"
                    }`}
                    >
                    1
                    </div>
                    <p
                    className={`text-sm absolute top-[45px] ${
                        step >= 1 ? "text-black-500" : "text-gray-500"
                    }`}
                    >
                    Upload Resume
                    </p>
                </div>

                {/* Line connecting the steps */}
                <div
                    className={`flex-grow h-[2px] ${
                    step >= 2 ? "bg-green-500 duration-1000" : "bg-gray-300"
                    }`}
                ></div>

                <div className="flex flex-col items-center relative">
                    <div
                    className={`flex items-center justify-center rounded-full w-10 h-10 ${
                        step >= 2 ? "bg-green-500 text-white duration-1000" : "bg-gray-300"
                    }`}
                    >
                    2
                    </div>
                    <p
                    className={`text-sm absolute top-[45px] ${
                        step >= 2 ? "text-black-500" : "text-gray-500"
                    }`}
                    >
                    Add Job Details
                    </p>
                </div>

                {/* Line connecting the steps */}
                <div
                    className={`flex-grow h-[2px] ${
                    step >= 3 ? "bg-green-500" : "bg-gray-300"
                    }`}
                ></div>

                <div className="flex flex-col items-center relative">
                    <div
                    className={`flex items-center justify-center rounded-full w-10 h-10 ${
                        step >= 3 ? "bg-green-500 text-white" : "bg-gray-300"
                    }`}
                    >
                    3
                    </div>
                    <p
                    className={`text-sm absolute top-[45px] ${
                        step >= 3 ? "text-black-500" : "text-gray-500"
                    }`}
                    >
                    View Results
                    </p>
                </div>
                </div>
            </div>

            {/* Upload Section */}
            <div className="border border-dashed border-green-500 p-6 w-4/5 text-center mt-20">
                <h2 className="uppercase mb-4 font-semibold">Upload Your Resume</h2>
                <p className="mb-4">Upload your resume to get started</p>

                {/* Upload Button */}
                <button
                onClick={handleUploadClick}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-700 transform hover:scale-105 mb-4"
                >
                {fileName ? `Uploaded: ${fileName}` : "Upload Your Resume"}
                </button>
                <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                />
                <p className="text-sm text-gray-600">as .pdf, .doc, .docx</p>
            </div>

            {/* Step 2: Add Job */}
            {step >= 2 && (
                <div className="mt-5 w-4/5">
                <h3 className="text-center mb-3 font-semibold">
                    Step 2: Add Job Details
                </h3>
                {/* Add your job details form here */}
                </div>
            )}

            {/* Step 3: View Results */}
            {step >= 3 && (
                <div className="mt-5 w-4/5">
                <h3 className="text-center mb-3 font-semibold">
                    Step 3: View Results
                </h3>
                {/* Add results view here */}
                </div>
            )}
        </div>
      
    </div>
  );
};

export default ResumeUpload;
