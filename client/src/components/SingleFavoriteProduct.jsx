import React from "react"
import { useDispatch } from "react-redux";
import { removeSingleFavoriteProduct } from "../store/favoriteSlice";
import { Link } from "react-router-dom";
import "../styles/favorite.scss";

const SingleFavoriteProduct = ( { product } ) => {

	const dispatch = useDispatch(  )

	return(
	 <div className="favorite-product-container">
			<span className="close" onClick={ (  ) => dispatch( removeSingleFavoriteProduct( product._id ) ) }>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</span>
			<div className="product-image">
				<img src={ product.img } alt="" />
			</div>
			<div className="product-info wishlist-product">
				<div className="product-left">
					<h3 className="product-title">{ product.title }</h3>
					<p className="product-price">$ { product.price }</p>
					<Link to={`/product/${ product._id }`} style={ { color: "black", marginTop: "1rem" } }>Go to product</Link>
				</div>
				<div className="product-filter">
					<div className="product-color-filter">
						{ product.color.map( color  => ( 
							<span style={{ backgroundColor: `${ color }` }} className="color" key={ color }></span>
						))}
					</div>
					<div className="product-size-filter">
						<span>Size</span>
						<div className="product-size-filter-container" >
							{ product.size.map( size => ( 
								<span className="size" key={ size }>{ size }</span>
							) ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleFavoriteProduct
