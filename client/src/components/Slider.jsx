import React from "react";
import "../styles/slider.scss";

const Slider = () => {
  return (
    <div className="slider-container">
      <div>
        <div className="slides">
          <div className="slide">
            <div className="content-container">
              <div className="info-container">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, minima quia, a quae
                </p>
                <button>show now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow left">
        <svg
          width="150"
          height="174"
          viewBox="0 0 150 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 87L150 0.397461V173.603L0 87Z" fill="white" />
        </svg>
      </div>
      <div className="arrow right">
        <svg
          width="150"
          height="174"
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
