import React, { useState, useEffect } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "../styles/components.scss";
import { useSelector } from "react-redux";
import { login } from "../store/apiCall.js";
import { useDispatch } from "react-redux";
import Notification from "../components/Notification.jsx";
import { getCart, getFavoriteList } from "../store/apiCall.js";
import { updateCart } from "../store/cartSlice";
import { updateFavorite } from "../store/favoriteSlice";
import {unSetProducts} from "../store/productSlice";

const LogIn = () => {
	const [ userName, setUserName ] = useState( "" )
	const [ password, setPassword ] = useState( "" )
	const [ error, setError ] = useState( null )
	const [ notify, setNotify ] = useState( { display: false, type: null, message: null } )
	const { isFetching } = useSelector( state => state.user )
	const dispatch = useDispatch(  )

	useEffect( (  ) => { 
		if ( error ) { 
			setNotify( { display: true, type: "error", message: error } )
		}
	}, [ error ] )

	const handleSubmit = ( event ) => { 
		event.preventDefault(  )

		login( dispatch, { userName, password } )
			.then( async response => { 
				if ( response.code === "ERR_BAD_REQUEST" ) { 
					return setError( response.response.data )
				}

				dispatch( unSetProducts(  ) )

				if ( response?._id ) { 
					// Fetch cart
					getCart( response )
						.then( res => { 
								if ( res.data.length !== 0 ) { 
									dispatch( updateCart( res.data[ 0 ] ) )
								}
						} )

					// Fetch favorite products
					getFavoriteList( response )
						.then( res => { 
							if ( res.data.length !== 0 ) { 
								dispatch( updateFavorite( res.data[ 0 ] ) )
							}
						} )
				}
			} )
	}

	const updateNotification = (  ) => { 
		setNotify( { display: false, type: '', message: '' } )
		setError( null )
	}

  return (
    <AuthLayout>
			{ notify.display && <Notification display={ notify.display } type={ notify.type } message={ notify.message } updateNotification={ updateNotification } /> }
      <div className="login-container">
        <div className="content">
          <h2>Log In</h2>
          <form>
            <div className="field-container">
              <label htmlFor="userName">User Name</label>
              <input type="text" name="userName" placeholder="Username" onChange={ ( event ) => setUserName( event.target.value ) }/>
            </div>
            <div className="field-container">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password"  onChange={ ( event ) => setPassword( event.target.value ) }/>
            </div>
            <button type="submit" onClick={ handleSubmit } disabled={ isFetching }>Login</button>
            <a href="#">Do not remember your password</a>
            <Link to="/register">Create an Account</Link>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LogIn;
