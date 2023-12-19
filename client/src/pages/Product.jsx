import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/product-page.scss";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { getSingleProduct } from "../store/apiCall";

const Product = () => {
  const INCREASE = "increase";
  const DECREASE = "decrease";
  const QUANTITIYLIMITER = 10;
	const [ loading, setLoading ] = useState( true );
  const [quantity, setQuantity] = useState(1);
	const [ product, setProduct ] = useState( {  } );
	const [ color, setColor ] = useState( "" );
	const [ size, setSize ] = useState( "" );
	const dispatch = useDispatch(  )
	const id = useLocation(  ).pathname.split( "/" )[ 2 ]
	const currentUser = useSelector( state => state.user.currentUser )
	const navigate = useNavigate(  )

	// Fetch product data on page load
	useEffect( (  ) => { 
		const getProduct = async (  ) => { 
			getSingleProduct( id )
				.then( response => { 
					setProduct( response.data )
					setColor( response.data.color[ 0 ] )
					setSize( response.data.size[ 0 ] )
					setLoading( false )
				} )
		}
		getProduct(  )
	}, [ id ] )

  // Increase the quantity of product
  const quantityValueHandler = (operation) => {
    if (operation === INCREASE && quantity < QUANTITIYLIMITER) {
      setQuantity((quantity) => quantity + 1);
    } else if (operation === DECREASE && quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

	// handle submit
	const handleSubmit = (  ) => { 
		 currentUser ? dispatch( addProduct( { ...product, color, size, quantity } ) )	: navigate( "/login" )
	}

  return (
    <Layout>
			{ loading ? ( 
			<div style={ { margin: "0 auto" } }>
				<Spinner /> 
			</div>
			) : ( 
				<div className="product-container">
					<div className="product-image">
						<img src={product.img} alt="" />
					</div>
					<div className="product-info">
						<div className="product-info-header">
							<h3>{ product.title }</h3>
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
						<p className="product-description">{ product.description }</p>
						<p className="product-price">${ product.price }</p>
						<div className="product-filter">
							<div className="product-color-filter" onClick={ ( event ) => setColor( event.target.value ) }>
								{product.color.map((color) => (
									<input
										key={color}
										type="radio"
										name="color"
										value={color}
										className="radioButton"
										style={{ backgroundColor: `${color}` }}
									/>
								))}
							</div>
							<div className="product-size-filter">
								<span>Size</span>
								<select name="product-size-filter" defaultValue="0" onClick={ ( event ) => setSize( event.target.value ) }>
									<option value="0" disabled>
										Select your Size
									</option>
									{product.size.map((size) => (
										<option key={size} value={size.toLowerCase()}>
											{size}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="product-order">
							<div className="product-quantity">
								<button onClick={() => quantityValueHandler(INCREASE)}>+</button>
								<input type="text" readOnly value={quantity} />
								<button onClick={() => quantityValueHandler(DECREASE)}>-</button>
							</div>
							<div className="product-buy">
								<button onClick={ handleSubmit }>Add to cart</button>
							</div>
						</div>
					</div>
				</div>
			) }
    </Layout>
  );
};

export default Product;
