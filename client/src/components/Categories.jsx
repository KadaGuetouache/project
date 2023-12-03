import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import "../styles/categories.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
