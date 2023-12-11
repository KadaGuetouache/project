import React, { useState } from "react";
import Layout from "../components/Layout";
import Products from "../components/Products";
import "../styles/product-list.scss";
import { useLocation } from "react-router-dom";

export const ProductList = () => {
	const category = useLocation(  ).pathname.split( "/" )[ 2 ];
	const [ sort, setSort ] = useState( "newest" );
	const [ filters, setFilters ] = useState( {  } );

	const handleFilter = ( event ) => { 
		const value = event.target.value
		setFilters( { ...filters, [ event.target.name ]: value } )
	}

  return (
    <Layout>
      <div className="product-list-container">
        <h2>Category</h2>
        <div className="filter-container">
          <div className="product-filter">
            <span>Filter Product: </span>
						<button className="reset-btn" onClick={ () => { setSort( "newest" ); setFilters( {  } ) } }>Reset Filters</button>
            <select name="color" onChange={ handleFilter }>
              <option disabled defaultValue value="">Color</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
            <select name="size" onChange={ handleFilter }>
              <option disabled defaultValue value="">Size</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="product-order">
            <span>order Product: </span>
            <select name="order" onClick={ ( event ) => setSort( event.target.value ) }>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products category={ category } filters={ filters } sort={ sort }/>
    </Layout>
  );
};

export default ProductList;
