import React, { useState } from "react";
import "../styles/singleproduct.scss";

const SingleProduct = () => {
  const INCREASE = "increase";
  const DECREASE = "decrease";
  const QUANTITIYLIMITER = 10;
  const [quantity, setQuantity] = useState(1);

  const img =
    "https://ae01.alicdn.com/kf/S6e0cc9e9872546038bf906cdd5f18f683/New-Moto-Racing-Men-s-Zip-Up-Sweatshirt-Gresini-Racing-Team-Lovers-Track-Hoodie.jpg_.webp";

  const quantityValueHandler = (operation) => {
    if (operation === INCREASE && quantity < QUANTITIYLIMITER) {
      setQuantity((quantity) => quantity + 1);
    } else if (operation === DECREASE && quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <span className="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div className="product-details">
          <p>
            <strong>
              Product: <span>Jacket</span>
            </strong>
          </p>
          <p>
            <strong>
              ID: <span>Jacket</span>
            </strong>
          </p>
          <div className="product-color"></div>
          <p>
            <strong>
              Size: <span>Jacket</span>
            </strong>
          </p>
        </div>
        <div className="product-order">
          <div className="product-quantity">
            <button onClick={() => quantityValueHandler(INCREASE)}>+</button>
            <input type="text" readOnly value={quantity} />
            <button onClick={() => quantityValueHandler(DECREASE)}>-</button>
          </div>
          <div className="product-price">
            <p>$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
