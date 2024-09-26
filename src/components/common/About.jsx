import React from "react";
import AbouCard from "../ui/AbouCard";

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
    <div className="mt-14">

          {/* main image */}
      <div>
        <img
          src={require("../../assets/Images/main.png")}
          alt="main"
          className="object-cover w-full h-auto "
        />
      </div>

      <div className="w-[70%] mx-auto">

        {/*  for main heading and something  */}

        <div className="p-2">
          <h1 className="text-center text-5xl font-semibold">Our vision</h1>

          <h3 className="text-center font-semibold opacity-90 mt-2">
            At Demo, we envision a future where technology and talent converge
            to redefine the hiring process.
          </h3>

          <p className="mt-5 text-center leading-7">
            We believe in simplifying connections and recognizing potential. Our
            platform enables candidates to showcase their talents while
            providing recruiters with streamlined insights for informed
            decision-making. Together, we’re building a future where every
            graduate is ready to confidently step into their career, making the
            hiring process efficient and accessible for all. Join us in
            redefining career readiness and opportunity!
          </p>
        </div>

        {/*  for cards */}

        <div className="grid grid-cols-2 gap-2 ">
          {card.map((card, index) => (
            <AbouCard key={index} card={card} />
          ))}
        </div>

      </div>


    </div>
  );
};

export default About;
