import React from "react";
import Layout from "../components/Layout";
import "../styles/product-page.scss";

const Product = () => {
  const img =
    "https://ae01.alicdn.com/kf/S6e0cc9e9872546038bf906cdd5f18f683/New-Moto-Racing-Men-s-Zip-Up-Sweatshirt-Gresini-Racing-Team-Lovers-Track-Hoodie.jpg_.webp";

  return (
    <Layout>
      <div className="product-container">
        <div className="product-image">
          <img src={img} alt="" />
        </div>
        <div className="product-info">
          <div className="product-info-header">
            <h3>Jacket</h3>
            <div className="product-like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="tomato"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="tomato"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nostrum
            veniam temporibus omnis, ab laboriosam fugit non.
          </p>
          <p className="product-price">40.001</p>
          <div className="product-filter">
            <div className="product-color filter">
              <input
                type="radio"
                name="color"
                value=""
                className="radioButton"
                style={{ background: "blue" }}
                onChange={() => {}}
              />
              <input
                type="radio"
                name="color"
                value=""
                className="radioButton"
                style={{ background: "black" }}
                onChange={() => {}}
              />
              <input
                type="radio"
                name="color"
                value=""
                className="radioButton"
                style={{ background: "tomato" }}
                onChange={() => {}}
              />
            </div>
            <div className="product-size-filter">
              <span>Size</span>
              <select name="product-size-filter">
                <option value="l">Large</option>
                <option value="m">Meduim</option>
                <option value="s">Small</option>
              </select>
            </div>
          </div>
          <div className="product-order">
            <div className="product-quantity">
              <button>+</button>
              <input type="text" readOnly value={1} />
              <button>-</button>
            </div>
            <div className="product-buy">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
