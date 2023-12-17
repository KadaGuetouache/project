import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SingleProduct from "../components/SingleProduct";
import "../styles/cart.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants/api.js";
import { loadStripe } from "@stripe/stripe-js"
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
	const products = useSelector( state => state.cart.products )
	const cart = useSelector( state => state.cart )
	let total = 0;
	let subTotal = cart.total;
	const expressShipping = 334;
	const fastShipping = 47;
	const freeShipping = 0;
	const location = useLocation(  );
	const navigate = useNavigate(  );

	useEffect( (  ) => { 
		if ( location.search == "?success=true" ){ 
		navigate( "/success", { state: { valid: true } } );
		}
	}, [ location, navigate, cart ] )


	// Make purchase with stripe
	const makePayment = async (  ) => { 
		const stripe = await loadStripe( "pk_test_el3DpfhvKo8bjpw2OV3hkR7m00XpKKP3pU" );

		try{ 
			const response = await axios.post( `${ BASE_URL }/checkout/payment`, { products, fastShipping, expressShipping });

			const session = await response.data;

			const result = stripe.redirectToCheckout( { sessionId: session.id } )
			console.log( result )
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
            <div>
              <p>Free Shipping</p>
              <p>$0</p>
            </div>
            <div>
              <p>Fast Shipping</p>
              <p>${ fastShipping }</p>
            </div>
            <div>
              <p>Express Shipping</p>
              <p>${ expressShipping }</p>
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
