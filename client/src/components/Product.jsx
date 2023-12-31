import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/products.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/cartSlice";
import seedrandom from "seedrandom";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { addProductToFavorite } from "../store/favoriteSlice";

const Product = ({ item }) => {
	const dispatch = useDispatch(  );
	const currentUser = useSelector( state => state.user.currentUser )
	const products = useSelector( state => state.cart.products )
	const [ notify, setNotify ] = useState( { display: null, type: null, message: null } )
	const navigate = useNavigate(  )

	const updateNotification = (  ) => { 
			return setNotify( { display: null, type: null, message: null } )
	}

	const handleAddProductToCart = useCallback( (  ) => { 
		if ( currentUser ) { 
			const orderId = seedrandom( item._id + item.color + item.size )().toString(  )
			const userId = currentUser && currentUser._id

			if ( products.length > 0 ) { 
				const index = products.map( product => product.orderId ).indexOf( orderId )

				if ( index === -1 ) { 
					dispatch( addProduct( { ...item, orderId: orderId, quantity: 1, color: item.color[ 0 ], size: item.size[ 0 ], userId: userId } ) )
				} else { 
					setNotify( { display: true, type: "info", message: "Item already in cart!" } )
				}
			} else { 
				dispatch( addProduct( { ...item, orderId: orderId, quantity: 1, color: item.color[ 0 ], size: item.size[ 0 ], userId: userId } ) )
			}
		} else { 
			navigate( "/login" )
		}
	}, [ dispatch, item, currentUser, products, navigate ])

	const addToFavorite = ( ) => { 
		currentUser ? dispatch( addProductToFavorite( item ) ) : navigate( "/login" )
	}

  return (
    <div className="product">
		{ notify.display && <Notification display={ notify.display } type={ notify.type } message={ notify.message } updateNotification={ updateNotification } /> }
      <div className="content">
        <img src={item.img} alt="" />
        <div className="icons">
          <div className="product-shop" onClick={ handleAddProductToCart }>
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
          </div>
          <Link to={`/product/${item._id}`} className="product-search">
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
          </Link>
          <div className="product-like" onClick={ addToFavorite }>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
