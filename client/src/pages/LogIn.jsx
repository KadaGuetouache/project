import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "../styles/components.scss";
import { useSelector } from "react-redux";
import { login } from "../store/apiCall.js";
import { useDispatch } from "react-redux";

const LogIn = () => {
	const [ userName, setUserName ] = useState( "" )
	const [ password, setPassword ] = useState( "" )
	const { isFetching, error } = useSelector( state => state.user )
	const dispatch = useDispatch(  )

	const handleSubmit = ( event ) => { 
		event.preventDefault(  )

		login( dispatch, { userName, password } )
			.then( user => { 
				console.log( user )
			} )
			.catch( error => { 
				console.log( error )
			})
	}

  return (
    <AuthLayout>
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
            <button type="submit" onClick={ handleSubmit }>Login</button>
            <a href="#">Do not remember your password</a>
            <Link to="/register">Create an Account</Link>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LogIn;
