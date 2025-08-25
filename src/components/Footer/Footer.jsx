import React from "react";
import "./Footer.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Get In Touch.</h2>
        <p>
          Have a project in mind or need expert guidance? Let’s collaborate to create
          something exceptional! Connect with us to turn your ideas into reality with
          innovation and precision.
        </p>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Follow Me</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/raja-deeraj-b5200a34a" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61577124824119" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/raja_dheeraj3/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Me</h3>
            <p>
              <a href="mailto:arajadeeraj@gmail.com">
                <FaEnvelope className="footer-icon" /> arajadeeraj@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+917337372250">
                <FaPhoneAlt className="footer-icon" /> +91 7337372250
              </a>
            </p>
          </div>
        </div>

        {/* Message Me button sends email */}
        <a
          href="mailto:arajadeeraj@gmail.com?subject=Contact%20Request&body=Hi%20Raja,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you."
        >
          <button className="message-btn">Message Me</button>
        </a>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/raja-deeraj-b5200a34a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.facebook.com/profile.php?id=61577124824119" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/raja_dheeraj3/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
        <p>© Copyright Raja DeeRaj 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
