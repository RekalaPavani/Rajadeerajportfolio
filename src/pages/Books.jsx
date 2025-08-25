import React from "react";
import Slider from "react-slick"; // slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Books.css";

// Import your book cover images
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";

const Books = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // default (desktop)
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  const books = [
    { id: 1, img: book1, title: "English Proficiency Guide" },
    { id: 2, img: book2, title: "Computer & Information Technology" },
    { id: 3, img: book3, title: "Management" },
    { id: 4, img: book4, title: "Soft Skills" },
    { id: 5, img: book5, title: "Personality Development" },
  ];

  return (
    <div className="books-container">
      <h1 className="books-title">MY UPCOMING BOOKS</h1>
      <p className="books-subtitle">
        Prepare to enhance your <b>English proficiency</b> and master essential{" "}
        <b>soft skills</b>. Our collection of impactful guides is launching soon!
      </p>

      <div className="books-slider">
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.img} alt={book.title} className="book-image" />
              <h3 className="book-name">{book.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Books;
