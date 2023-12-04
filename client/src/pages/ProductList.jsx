import React from "react";
import Layout from "../components/Layout";
import Products from "../components/Products";
import "../styles/product-list.scss";

export const ProductList = () => {
  return (
    <Layout>
      <div className="product-list-container">
        <h2>Category</h2>
        <div className="filter-container">
          <div className="product-filter">
            <span>Filter Product: </span>
            <select name="color">
              <option>Color</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
            <select name="size">
              <option>Size</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="product-order">
            <span>order Product: </span>
            <select name="order">
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
    </Layout>
  );
};
