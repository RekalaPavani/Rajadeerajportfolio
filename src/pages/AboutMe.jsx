import React, { useEffect } from "react";
import "./AboutMe.css";
import Experience from "../pages/Experience";
import myImage2 from "../assets/profile1.png";
import myImage1 from "../assets/profile.png";
import samplePdf1 from "../assets/profilecard.pdf";
import samplePdf2 from "../assets/CV.pdf";
import Awards from "./Awards";
import Skills from "./Skills";
import Gallery from "./Gallery";
import Books from "./Books";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Milestones from "./Milestones";
import Av from "./Av";
const Home = () => {
  useEffect(() => {
    const homeSection = document.querySelector(".home");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      // Softer gradient with transparency
      homeSection.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(60, 171, 235, 0.8), #058dfcff)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* About Me Section */}
      <section id="aboutme" className="home">
        <div className="home-content">
          <h1>Hello,</h1>
          <h1> I'm Raja DeeRaj </h1>
          <p className="intro">
            Master Trainer - Excellence in CorporateSkills , SoftSkills & Professional Development.
          </p>

          <div className="stats">
            <div>
              <h2>10+ Years Rich Experience in Training Excellence </h2>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="home-buttons">
  <a href={myImage1} target="_blank" rel="noopener noreferrer">
    <button className="btn-profile">Get My Profile</button>
  </a>
  <a href={samplePdf1} target="_blank" rel="noopener noreferrer">
    <button className="btn-portfolio">Get My Portfolio</button>
  </a>
  <a href={samplePdf2} target="_blank" rel="noopener noreferrer">
    <button className="btn-cv">Get My CV</button>
  </a>
</div>

        </div>

        <div className="home-image">
          <img src={myImage2} alt="me" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Awards Section */}
      <section id="awards">
        <Awards />
      </section>
      <section id ="skills">
        <Skills/>
      </section>
      <section id="gallery">
        <Gallery/>
      </section>
      <section id="books">
        <Books/>
      </section>
      <section id="testimonials">
        <Testimonials/>
      </section>
      <section id="">
        <Milestones/>
      </section>
      <section id="av">
        < Av/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
};

export default Home;
