import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SingleProduct from "../components/SingleProduct";
import "../styles/cart.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants/api.js";
import { loadStripe } from "@stripe/stripe-js"

const Cart = () => {
	const products = useSelector( state => state.cart.products )
	let subTotal = 0;
	const ESTIMATESHIPPING = 150;
	const SHIPPINGDISCOUNT = 50;
	const cart = useSelector( state => state.cart )

	// Calculating the subTotal
	if ( cart.total !== 0 ){ 
		subTotal = Math.round( ( cart.total + ESTIMATESHIPPING ) - SHIPPINGDISCOUNT ).toFixed( 2 );
	}

	// Make purchase with stripe
	const makePayment = async (  ) => { 
		const stripe = await loadStripe( "pk_test_el3DpfhvKo8bjpw2OV3hkR7m00XpKKP3pU" );

		try{ 
			const response = await axios.post( `${ BASE_URL }/checkout/payment`, { products, subTotal });

			const session = await response.data;

			const result = stripe.redirectToCheckout( { sessionId: session.id } )
		} catch ( error ){ 
			console.log( error );
		}
	}


  return (
    <Layout>
      <div className="cart-container">
        <h2>Your Bag</h2>
        <div className="checklist">
          <div className="product-list">
						{ products.length !== 0 ? 
						 ( products.map( product => ( 
							<SingleProduct item={ product } key={ product._id }/>
						) ) ) : ( 
							<div className="msg">
								<p>It seems like there is nothing here!</p>
							</div>
						)
						}
          </div>
          <aside>
            <h3>Order Summry</h3>
            <div className="summary-subtotal">
              <p>Subtotal</p>
              <p>${ subTotal }</p>
            </div>
            <div className="summary-estimate-shipping">
              <p>Estimate Shipping</p>
              <p>${ ESTIMATESHIPPING }</p>
            </div>
            <div className="summary-shipping-discount">
              <p>Shipping Discount</p>
              <p>${ SHIPPINGDISCOUNT }</p>
            </div>
            <div className="summary-total">
              <p>Total</p>
              <p>${ subTotal }</p>
            </div>
            <button className="checkout" onClick={ makePayment }>Checkout</button>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
