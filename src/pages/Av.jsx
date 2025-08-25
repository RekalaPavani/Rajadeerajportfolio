import React from "react";
import "./Av.css";
import companyVideo from "../assets/av.mp4"; // your video file

const Companies = () => {
  return (
    <div className="companies-section">
      <h2 className="av-heading">AV</h2>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={companyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="coming-soon-overlay">
          <h1>Coming Soon....</h1>
        </div>
      </div>
    </div>
  );
};

export default Companies;
