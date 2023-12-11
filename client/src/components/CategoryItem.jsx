import React from "react";
import "../styles/categories.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="category">
      <div className="content-container">
        <img src={item.img} alt="" />
        <div className="content">
          <p>{item.title}</p>
          <Link to={`/products/${ item.category }`}>shop now</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
