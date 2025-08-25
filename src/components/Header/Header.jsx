import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png"; // adjust the path

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <div className="nav-logo">
            <img src={logo} alt="logo" />
            <span className="company-name">RDR</span>
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li><a href="/" onClick={closeMenu}>About Me</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#awards" onClick={closeMenu}>Honour</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#books" onClick={closeMenu}>Books</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#av" onClick={closeMenu}>AV</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
