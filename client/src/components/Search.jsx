import React, { useCallback, useState, } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
	const products = useSelector( state => state.product?.products )
	const [ searchProducts, setSearchProducts ] = useState( [  ] )
	const [ inputValue, setInputValue ] = useState( "" )

	const handleSearch = useCallback( event => { 
		setInputValue( event.target.value )
		setSearchProducts( products.filter( product => { 
			if ( event.target.value === "" ) { 
				return null;
			}

			if ( product.title.toLowerCase(  ).includes( event.target.value.toLowerCase(  ) ) ) { 
				return product;
			}
		} ) )
	}, [ setSearchProducts, products ] )

	const handleProductSelect = () => { 
		setSearchProducts( "" )
		setInputValue( "" )
	}
	
  return (
    <div className="search-container">
      <input type="text" placeholder="Search" onChange={ handleSearch } value={ inputValue }/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
			<ul className="search-result" style={ { display: searchProducts.length !== 0 ? "flex" : "none" } }>
				{ searchProducts && searchProducts.map( product => ( 
					<li key={ product._id } onClick={ handleProductSelect }>
						<Link to={ `/product/${ product._id }`}>
							<div className="search-product-container">
								<img src={ product.img } alt=""/>
								<p>{ product.title }</p>
							</div>
						</Link>
					</li>
				) ) }
			</ul>
    </div>
  );
};

export default Search;
