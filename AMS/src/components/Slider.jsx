import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./SliderImage";
import "./Slider.css";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearTimeout(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
}

export default Slider;
