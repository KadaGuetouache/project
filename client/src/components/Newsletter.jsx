import React from "react";
import "../styles/newsletter.scss";

const Newsletter = () => {
  return (
    <form>
      <div className="newsletter-container">
        <h2>Newsletter</h2>
        <p>Get timely updates from your favorite products</p>
        <div className="input-container">
          <input type="email" placeholder="Your email" />
          <button
            type="submit"
            style={{ border: "none", padding: 0, margin: 0 }}
          >
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M322 127L9 3.5L2.5 1.5L64.5 111.5L214 129.5L64.5 148L2 260.5L9 257L329.5 129.5L322 127Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;
