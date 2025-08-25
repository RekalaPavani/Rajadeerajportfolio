import React, { useState, useEffect } from "react";
import "./Awards.css";
import AOS from "aos";
import "aos/dist/aos.css";

import award1 from "../assets/award1.png"; 
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // animate only once
      easing: "ease-in-out"
    });
  }, []);

  const awards = [
    {
      title: "Gold medal from Cambridge Assessment English",
      subtitle: "MASTER TRAINER - English Language",
      image: award1,
      animation: "fade-up"
    },
    {
      title: "Best Achiever Award",
      subtitle: "Young Professional Leader",
      image: award2,
      animation: "fade-right"
    },
    {
      title: "Appreciation Award - (From Top Engineering Colleges)",
      subtitle: "Excellence in Profession",
      image: award3,
      animation: "fade-left"
    },
  ];

  return (
    <div className="awards-container">
      <h2 className="awards-title" data-aos="zoom-in">HONOUR</h2>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div
            key={index}
            className="award-card"
            data-aos={award.animation}  // 👈 different animations
            onClick={() => setSelectedAward(award)}
          >
            <h3>{award.title}</h3>
            <p>{award.subtitle}</p>
          </div>
        ))}
      </div>

      {selectedAward && (
        <div className="modal-overlay" onClick={() => setSelectedAward(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
            <img src={selectedAward.image} alt="Award" />
            <button onClick={() => setSelectedAward(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
