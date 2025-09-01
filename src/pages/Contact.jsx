import React from "react";
import "./Contact.css";
import { 
  FaWhatsapp, FaLinkedin, FaInstagram, 
  FaFacebook, FaEnvelope, FaPhoneAlt 
} 
from "react-icons/fa";

const Contact = () => {
  // handle sending email via mailto
  const handleSendMessage = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Redirects to user's email client
    window.location.href = `mailto:arajadeeraj@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="contact-page">
      {/* Right Side → Now placed first (left visually) */}
      <div className="contact-right">
        <div className="contact-section">
          <h3>Follow Us</h3>
          <p>
            <a 
              href="https://www.linkedin.com/in/raja-deeraj-b5200a34a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="inline-icon linkedin" /> LinkedIn
            </a>
          </p>
          <p>
            <a 
              href="https://www.facebook.com/profile.php?id=61577124824119" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaFacebook className="inline-icon facebook" /> Facebook
            </a>
          </p>
          <p>
            <a 
              href="https://www.instagram.com/raja_dheeraj3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaInstagram className="inline-icon instagram" /> Instagram
            </a>
          </p>
        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>
            <a href="mailto:arajadeeraj@gmail.com" className="contact-link">
              <FaEnvelope className="inline-icon mail" /> arajadeeraj@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+917337372250" className="contact-link">
              <FaPhoneAlt className="inline-icon phone" /> +91 7337372250
            </a>
          </p>
        </div>
            {/* QR Code */}
        
        <div className="qr-section">
        <p className="qr-text">Scan to Visit</p>
        <img src="/rajadheeraj-qr.png" alt="Website QR Code" className="qr-code" />
      </div>
    </div>

      {/* Left Side → Now second (right visually) */}
      <div className="contact-left">
        <div className="contact-box">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-sub">Let’s connect through social or drop me a message.</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://wa.me/+917337372250" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/raja-deeraj-b5200a34a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://www.instagram.com/raja_dheeraj3/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577124824119" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon facebook" />
            </a>
            <a href="mailto:arajadeeraj@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon mail" />
            </a>
          </div>

          {/* Message Form */}
          <div className="contact-form">
            <h3>Message Me</h3>
            <input id="name" type="text" placeholder="Your Name" required />
            <input id="email" type="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="button" onClick={handleSendMessage}>
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Raja Deeraj. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
