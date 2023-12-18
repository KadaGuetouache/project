import React from "react";
import "../styles/favorite.scss";
import Layout from "../components/Layout";
import SingleFavoriteProduct from "../components/SingleFavoriteProduct";
import { useSelector } from "react-redux";
import Shopping from "../constants/Shopping";

const Favorite = ( ) => {
	const products = useSelector( state => state.favorite.products )
	return(
		<Layout>
			<div className="favorite-products-container">
			{ products.length !== 0 ? ( 
				 products.map( product => ( 
						<SingleFavoriteProduct product={ product } key={ product._id }/>
				) ) 
			) : ( 
			<div className="favorite-product-not-found">
					<h1 style={ { textAlign: "center" } }>It seems like you have no products in here!</h1>
					<div style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
						<Shopping />
					</div>
			</div>
			) }
			</div>
		</Layout>
	)
}

export default Favorite
