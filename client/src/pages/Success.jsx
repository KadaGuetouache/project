import React, { useState, useEffect } from "react";
import Layout from "../components/Layout.jsx";
import axios from "axios";
import { BASE_URL } from "../constants/api.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/success.scss";

const Success = (  ) => {
	const [orderId, setOrderId] = useState( null );
	const cart = useSelector( state => state.cart )

	// TODO: finish order page
	//useEffect( (  ) => { 
		//const createOrder = async (  ) => { 
			//try{ 
				//const response = await axios.post( `${ BASE_URL }/order`, { 
					//products: cart.products.map( product => ( { 
						//productId: product._id,
						//quantity: product.quantity
					//} ) ),
				//} )
				//setOrderId( response.data._id );
			//} catch ( error ) { 
				//console.log( error )
			//}
		//}
		//createOrder(  )
	//}, [ cart ] )

	//if( orderId !== null ){ 
		
	//}

	return(
		<Layout>
			<div className="order-container">
				{ 
					orderId ? ( 
						<p>Order number { orderId } has been created successfully</p>
					) : (
						<p>Your order is been prepared ...</p>
					)
				}
				<Link to="/">Go to home page</Link>
			</div>
		</Layout>
	)
}

export default Success
