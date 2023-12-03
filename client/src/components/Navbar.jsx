import React from "react";
import Search from "./Search";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <span>
            <Search />
          </span>
        </div>
        <div className="center">
          <h1>Clothing Circle</h1>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default Navbar;
