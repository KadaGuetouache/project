import React from "react";
import Product from "./Product";
import { popularProducts } from "../data";
import "../styles/products.scss";

const Products = () => {
  return (
    <div className="products-container">
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
