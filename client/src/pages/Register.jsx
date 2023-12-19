import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import "../styles/register.scss";
import "../styles/components.scss";
import Notification from "../components/Notification";
import { register } from "../store/apiCall.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [submitButtonVisibility, setSubmitButtonVisibility] = useState(true);
	const [ firstName, setFirstName ] = useState( null )
	const [ lastName, setLastName ] = useState( null )
	const [ userName, setUserName ] = useState( null )
	const [ email, setEmail ] = useState( null )
	const [ password, setPassword ] = useState( null )
	const { isFetching } = useSelector( state => state.user )
	const [ confirmPassword, setConfirmPassword ] = useState( null )
	const [ notify, setNotify ] = useState( { display: null, type: null, message: null } )
	const dispatch = useDispatch(  )
	const navigate = useNavigate(  )

  const checkBoxHandler = () => {
    setSubmitButtonVisibility(!submitButtonVisibility);
  };

	const handleSubmit = ( event ) => { 
		event.preventDefault(  )

		// TODO: make register redirect to login page and remove user state
		// Safe guards for empty fields and mismatch passwords
		if ( firstName == null || lastName == null || userName == null|| email == null || password == null || confirmPassword == null ) { 
			return setNotify( { display: true, type: "error", message: "Fields must not be empty" } )
		}

		if ( password !== confirmPassword ) { 
			return setNotify( { display: true, type: "error", message: "Password do not match!, Try again" } )
		}

		// Dispaching data
		const profile = { firstName, lastName, userName, email, password }

		const response = register( dispatch, profile )

		// Handle errors
		response.then( res => { 
			if ( res?.code === "ERR_BAD_RESPONSE" && res?.response?.data?.keyPattern?.username === 1 ){ 
				return setNotify( { display: true, type: "error", message: "Usrname is already in use!" } )
			}

			if ( res?.code === "ERR_BAD_RESPONSE" ){ 
				return setNotify( { display: true, type: "error", message: res.code } )
			}
		})

		// Sends notification to user
		setNotify( { display: true, type: "success", message: "Your account has been created successfully" } )

		// Redirect to login page
		setTimeout( (  ) => { 
			navigate( "/login" )
		}, [ 2000 ] )
	}

	const updateNotification = (  ) => { 
			setNotify( { display: null, type: null, message: null } )
	}

  return (
    <AuthLayout>
			{ notify.display && <Notification display={ notify.display } type={ notify.type } message={ notify.message } updateNotification={ updateNotification }/> }
      <div className="register-container">
        <div className="content">
          <h2>Create an account</h2>
          <form>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
									onChange={ ( event ) => setFirstName( event.target.value ) }
                />
              </div>
              <div className="field-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
									onChange={ ( event ) => setLastName( event.target.value ) }
                />
              </div>
            </div>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="User Name"
									onChange={ ( event ) => setUserName( event.target.value ) }
                />
              </div>
              <div className="field-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
									onChange={ ( event ) => setEmail( event.target.value ) }
                />
              </div>
            </div>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
									onChange={ ( event ) => setPassword( event.target.value ) }
                />
              </div>
              <div className="field-container">
                <label htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Password Confirmation"
									onChange={ ( event ) => setConfirmPassword( event.target.value ) }
                />
              </div>
            </div>
            <div className="form-submit">
              <div className="form-agreement">
                <input type="checkbox" onClick={checkBoxHandler} />
                <p>
                  by creating an account!, I consent to the proccessing of my
                  personal data in accordance with
                  <a href="/privacypolicy"> Privacy Policy</a>
                </p>
              </div>
              <button type="submit" disabled={submitButtonVisibility || isFetching} onClick={ handleSubmit }>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
