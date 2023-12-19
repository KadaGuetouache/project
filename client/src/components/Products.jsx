import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../styles/products.scss";
import Spinner from "./Spinner";
import { getAllProducts } from "../store/apiCall";

const Products = ( { category, filters, sort } ) => {
	const [ loading, setLoading ] = useState( true )
	const [ products, setProducts ] = useState( [  ] )
	const [ filteredProducts, setFilteredProducts ] = useState( [  ] )

	useEffect( (  ) => { 
		const getProducts = async (  ) => { 
			getAllProducts( category )
				.then( response => { 
					setProducts( response.data )
					setLoading( false )
				} )
		}
		getProducts(  )
	}, [ category ] )

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
					<Spinner />
				) : ( 
					 category ? ( 
						filteredProducts.map((product) => (
							<Product item={product} key={product._id} />
						))
					) : ( 
						products.map((product) => (
							<Product item={product} key={product._id} />
						))
					) 
				) }		
			</div>
  );
};

export default Products;
