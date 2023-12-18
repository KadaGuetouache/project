import React, { useEffect } from "react";
import Search from "./Search";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { deleteAllProducts } from "../store/cartSlice";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import { deleteAllFavorite } from "../store/favoriteSlice";

const Navbar = () => {
	let cart = useSelector( state => state.cart )
	let favoriteProducts = useSelector( state => state.favorite.products )
	const currentUser = useSelector( state => state.user.currentUser )
	const dispatch = useDispatch(  )

	const headers = { 
		token: `Bearer ${ currentUser?.accessToken }`,
		"Content-Type": "application/json",
	}


	const disconnect = (  ) => {
		cart = { ...cart, userId: currentUser._id }
		favoriteProducts = { products: favoriteProducts,  userId: currentUser._id }
		uploadToRemoteCart(  )
		updloadToRemoteFavoriteList(  )

		setTimeout( (  ) => { 
			dispatch( logoutUser(  ) )
			dispatch( deleteAllProducts(  ) )
			dispatch( deleteAllFavorite(  ) )
		}, [ 1000 ] )
	}

	const uploadToRemoteCart = async () => { 
		try{ 
			const response = await axios.post( `${ BASE_URL }/cart/`, cart, { headers: headers } )	
		} catch ( error ) { 
			console.log( error )	
		}
	}

	const updloadToRemoteFavoriteList = async (  ) => { 
		try{ 
			const response = await axios.post( `${ BASE_URL }/favorite/`, favoriteProducts, { headers: headers } )	
		} catch ( error ) { 
			console.log( error )	
		}
	}

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
					{ currentUser ?  (
						<>
							<Link to="/favorite">Favorite</Link>
							<Link to="/profile">Profile</Link>
						</>
					) : ( 
						<>
							<Link to="/register">Register</Link>
							<Link to="/login">Log In</Link>
						</>
					)
					}
					<Link to="/cart">
          <div className="shopping-cart">
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
            <div className="badge">{ cart.quantity }</div>
          </div>
				</Link>
				{ currentUser && 
					<div onClick={ disconnect } className="diconnect">Disconnect</div>
				}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
