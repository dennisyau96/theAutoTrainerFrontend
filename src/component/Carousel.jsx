import React, { useState, useEffect } from "react";
import "../../src/index.css"; // Optional for styling

const Carousel = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="carousel my-4">
      <button onClick={goToPrev} className="nav-button left">
        ‹
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
      <button onClick={goToNext} className="nav-button right">
        ›
      </button>
    </div>
  );
};

export default Carousel;
