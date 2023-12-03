import React from "react";
import "../styles/categories.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="category">
      <div className="content-container">
        <img src={item.img} alt="" />
        <div className="content">
          <p>{item.title}</p>
          <a href={`/products/${item.category}`}>shop now</a>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
