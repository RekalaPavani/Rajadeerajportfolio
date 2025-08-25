import React from "react";
import "./Gallery.css";

// Import your company images from assets
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.png";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/19.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/15.jpg";
import img17 from "../assets/17.jpeg";
import img20 from "../assets/20.jpg";
import img14 from "../assets/18.jpg";
const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10,img11,img12,img16,img13,img15,img17,img20,img14]; // ✅ Add more images here

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GALLERY</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Company ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
