import React from "react";
import AbouCard from "../Cards/AboutCard";
import Team from "../ui/TeamMember";
import Aboutbg from "../../assets/Images/main.png";
const card = [
  {
    title: "AI-Powered Interviews",
    companyLogo: "/images/interview.png",
    description:
      "Candidates engage in a dynamic interview experience where AI presents questions in both text and video formats. They respond by speaking or typing, allowing them to express their skills, personality, and creativity in a flexible environment.",
  },
  {
    title: "Smart Score Evaluation",
    companyLogo: "/images/interview.png",
    description:
      "Once responses are submitted, the AI analyzes them based on multiple criteria: content relevance, articulation, creativity, and confidence. This results in a comprehensive score for each response.",
  },
  {
    title: "Real-Time Feedback",
    companyLogo: "/images/interview.png",
    description:
      "As candidates respond, the AI provides instant feedback on their answers, helping them understand their strengths and areas for improvement. This iterative process empowers candidates to refine their responses and better prepare for future interviews.",
  },
  {
    title: "Recruiter Selection",
    companyLogo: "/images/interview.png",
    description:
      "Recruiters receive scores and insights to choose candidates for the next round. This streamlined process helps them focus on top talent efficiently.",
  },
];

export const About = () => {
  return (
    <div>
      {/* Main image */}
      <div>
        <img
          src={Aboutbg}
          alt="main"
          className="bg-cover bg-center w-full h-auto mt-12"
        />
      </div>

      <div className="w-[80%] mx-auto mt-2 p-2">
        {/* Main heading */}
        <div className="p-2">
          <h1 className="text-center text-5xl font-semibold text-green-700">Our vision</h1>
          <h3 className="text-center font-normal opacity-80 mt-2">
            At Demo, we envision a future where technology and talent converge
            to redefine the hiring process.
          </h3>
          <p className="mt-5 text-center leading-7 opacity-70">
            We believe in simplifying connections and recognizing potential. Our
            platform enables candidates to showcase their talents while
            providing recruiters with streamlined insights for informed
            decision-making. Together, we’re building a future where every
            graduate is ready to confidently step into their career, making the
            hiring process efficient and accessible for all. Join us in
            redefining career readiness and opportunity!
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12">
          {card.map((card, index) => (
            <AbouCard key={index} card={card} reverse={index % 2 !== 0} />
          ))}
        </div>

        
      </div>
        <Team/>
    </div>
  );
};

export default About;
