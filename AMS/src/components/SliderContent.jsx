import React from "react";

const SliderContent = ({ sliderImage, activeIndex }) => {
  return (
    <section className="slider-content">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      {/* Floating Text */}
      <div className="floating-text">
        From <span>Training</span> to <span>Triumph</span> – We’ve Got You Covered
      </div>
    </section>
  );
};

export default SliderContent;
