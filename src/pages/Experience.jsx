import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Product Trainer",
    company: "Indus Management Consultants,Delhi",
  
  },
  {
    title: "English Language and Soft Skills Trainer",
    company: "Nirmaan Organization,Hyderabad",
    
  },
  {
    title: "Corporate Soft Skills Trainer",
    company: "AA Edutech - British Council,Chennai",
 
  },
  {
    title: "Corporate Soft Skills Trainer",
    company: "ICT Academy,TamilNadu",
    
  },
  {
    title: "Verbal ability & Soft Skills,BFSI,Campus to Corporate & CRT Trainer",
    company: "Freelance Trainer & Entrepreneur",
 
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h1 className="experience-title">WORK EXPERIENCE</h1>
      <p className="experience-subtitle">
        "Crafting Success, Building Futures: A Chronicle of Expertise and Innovation in Every Project."
      </p>

      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h2>{exp.company}</h2>
            <h3> as {exp.title}</h3>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
