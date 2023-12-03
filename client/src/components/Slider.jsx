import React from "react";
import "../styles/slider.scss";
import { slides } from "../data";
import { useState } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div>
        <div
          className="slides"
          style={{ transform: `translateX( -${activeIndex * 100}vw )` }}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <div
                className="content-container"
                style={{
                  background: `url(${slide.img})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="info-container">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button>show now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow left" onClick={() => updateIndex(activeIndex - 1)}>
        <svg
          width="150"
          height="174"
          viewBox="0 0 150 174"
          style={{ transform: "scale(.5)" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 87L150 0.397461V173.603L0 87Z" fill="white" />
        </svg>
      </div>
      <div className="arrow right" onClick={() => updateIndex(activeIndex + 1)}>
        <svg
          width="150"
          height="174"
          style={{ transform: "rotate(180deg) scale(.5)" }}
          viewBox="0 0 150 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 87L150 0.397461V173.603L0 87Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
