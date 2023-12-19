import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../styles/products.scss";
import Spinner from "./Spinner";
import { getAllProducts } from "../store/apiCall";
import { useDispatch, useSelector } from "react-redux";

const Products = ( { category, filters, sort } ) => {
	const [ loading, setLoading ] = useState( true )
	//const [ products, setProducts ] = useState( [  ] )
	const products = useSelector( state => state.product.products )
	const [ filteredProducts, setFilteredProducts ] = useState( [  ] )
	const dispatch = useDispatch(  )

	console.log( "loop" )

	useEffect( (  ) => { 
		if ( products.length === 0 ) { 
			getAllProducts( category, dispatch )
			}
		setLoading( false )
	}, [ category, dispatch, products ] )

	useEffect( (  ) => { 
		category && setFilteredProducts( products.filter( product => ( 
			Object.entries( filters ).every( ( [ key, value ] ) => ( product[ key ].includes( value ) ) )
		) ) );
	}, [ products, category, filters ] )

	useEffect( (  ) => { 
		if ( sort === "newest" ){ 
			setFilteredProducts( ( prev ) => [ ...prev ].sort( ( a,b ) => a.createdAt - b.createdAt ) )
		} else if ( sort === "asc" ){ 
			setFilteredProducts( ( prev ) => [ ...prev ].sort( ( a,b ) => a.price - b.price ) )
		} else { 
			setFilteredProducts( ( prev ) => [ ...prev ].sort( ( a,b ) => b.price - a.price ) )
		}
	}, [ sort ] )

  return (
			<div className="products-container" style={ { minHeight: "400px" } }>
				{ loading ? ( 
					<div style={ { width: "100vw", margin: "0 auto" } }>
						<Spinner />
					</div>
				) : ( 
					 category ? ( 
						filteredProducts.map((product) => (
							<Product item={product} key={product._id} />
						))
					) : ( 
						products.slice( 0, 8 ).map((product) => (
							<Product item={product} key={product._id} />
						))
					) 
				) }		
			</div>
  );
};

export default Products;
