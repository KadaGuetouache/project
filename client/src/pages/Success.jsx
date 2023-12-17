import React, { useMemo, useState, useEffect, useRef } from "react";
import Layout from "../components/Layout.jsx";
import { BASE_URL } from "../constants/api.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/success.scss";
import { deleteAllProducts } from "../store/cartSlice.js";
import { userRequest } from "../requests.js";
import { useNavigate, useLocation } from "react-router-dom";

const Success = (  ) => {
	const [orderId, setOrderId] = useState( null );
	const cart = useSelector( state => state.cart )
	const currentUser = useSelector( state => state.user.currentUser )
	const dispatch = useDispatch(  )
	const navigate = useNavigate(  )
	const location = useLocation(  )

	// send order to api
	useEffect( (  ) => { 
		const createOrder = async (  ) => { 
			try{ 
				const response = await userRequest.post( `${ BASE_URL }/order`, { 
					userId: currentUser._id,
					amount: cart.total,
					products: cart.products.map( product => ( { 
						productId: product._id,
						quantity: product.quantity,
					} ) ),
				} )
				setOrderId( response.data._id )
			} catch ( error ) { 
				console.log( error )
			}
		}
		// if user tried to access this component through url will be redirected
		if ( !location?.state?.valid ) { 
			navigate( "/lost" )
		} else { 
		// if user is been redirected from cart page then procceed
			location?.state?.valid && createOrder(  )
		}

	}, [ cart, currentUser, navigate, location ] )

	// use useMemo hook to prevent an endless loop 
	useMemo( (  ) => { 
		// use setTimeout promise to prevent navbar update collission with this component render
		setTimeout( (  ) => { 
			dispatch( deleteAllProducts(  ) )
		}, [ 5000 ] )
	}, [ dispatch ] )


	return(
		<Layout>
			<div className="order-container">
				{ 
					orderId ? ( 
						<p>Order number <strong>{ orderId }</strong> has been created successfully</p>
					) : (
						<p>Your order is been prepared ...</p>
					)
				}
				<Link to="/products/all">Shope more</Link>
			</div>
		</Layout>
	)
}

export default Success
