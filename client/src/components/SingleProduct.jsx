import React, { useState } from "react";
import "../styles/singleproduct.scss";
import { useDispatch } from "react-redux";
import { removeSingleProduct } from "../store/cartSlice.js";

const SingleProduct = ( { item } ) => {
  const INCREASE = "increase";
  const DECREASE = "decrease";
  const QUANTITIYLIMITER = 10;
  const [quantity, setQuantity] = useState( 1 );
	const dispatch = useDispatch(  )

	// Control product quantity
  const quantityValueHandler = (operation) => {
    if (operation === INCREASE && quantity < QUANTITIYLIMITER) {
      setQuantity((quantity) => quantity + 1);
    } else if (operation === DECREASE && quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

	const handleRemoveSingleProductFromCart = (  ) => { 
		dispatch( removeSingleProduct( item ) )
	}

  return (
    <div className="product">
      <div className="product-img">
        <img src={item.img} alt="" />
      </div>
      <div className="product-info">
        <span className="close" onClick={ handleRemoveSingleProductFromCart }>
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
              Product: <span>{ item.title }</span>
            </strong>
          </p>
          <p>
            <strong>
              ID: <span>{ item._id }</span>
            </strong>
          </p>
          <div className="product-color" style={{ "background": item.color }}></div>
          <p>
            <strong>
              Size: <span>{ item.size }</span>
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
