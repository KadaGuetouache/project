import React from "react";
import Search from "./Search";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector( state => state.cart )
	const user = useSelector( state => state.user.currentUser )

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
					<Link to="/">
						<h1>Clothing Circle</h1>
					</Link>
        </div>
        <div className="right">
					{ user ?  (
						<>
							<Link to="/favorie">Favorite</Link>
							<Link to="/profile">Profile</Link>
						</>
					) : ( 
						<>
							<Link to="/register">Register</Link>
							<Link to="/login">Log In</Link>
						</>
					)
					}
          <div className="shopping-cart">
            <Link to="/cart">
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            <div className="badge">{ cart.quantity }</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
