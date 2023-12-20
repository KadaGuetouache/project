import React, { useState } from "react";
import Layout from "../components/Layout";
import Notification from "../components/Notification";
import { updateUserProfile } from "../store/apiCall";
import { useDispatch } from "react-redux";
import "../styles/profile.scss";

const Profile = ( { currentUser } ) => {
	const [ firstName, setFirstName ] = useState( currentUser.firstname )
	const [ lastName, setLastName ] = useState( currentUser.lastname )
	const [ userName, setUserName ] = useState( currentUser.username )
	const [ email, setEmail ] = useState( currentUser.email )
	const [ password, setPassword ] = useState( "" )
	const [ confirmPassword, setConfirmPassword ] = useState( "" )
	const [ notify, setNotify ] = useState( { display: null, type: null, message: null } )
	const dispatch = useDispatch(  )

	const handleSubmit = async ( event ) => { 
		event.preventDefault(  )

		const user = { firstName, lastName, userName, email, password }
		
		if ( password === "" || confirmPassword === "" || ( password !== confirmPassword ) ) { 
			return setNotify( { display: true, type: "error", message: "Password don't match up!" } )
		}

		updateUserProfile( currentUser, user, dispatch )
			.then( (  ) => { 
				setNotify( { display: true, type: "success", message: "Your profile has been updated" } )
			} )
			.catch( error => { 
				setNotify( { display: true, type: "error", message: error } )
			} )
	}

	const updateNotification = (  ) => { 
		setNotify( { display: null, type: null, message: null } )
	}

	return(
		<Layout>
			<div className="account-container">
				{ notify.display && <Notification display={ notify.display } type={ notify.type } message={ notify.message } updateNotification={ updateNotification } /> }
				<div className="content">
					<h2>Account Details</h2>
					<form>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
									value={ firstName }
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
									value={ lastName }
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
									value={ userName }
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
									value={ email }
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
              <button type="submit" onClick={ handleSubmit }>
                Update
              </button>
            </div>
          </form>
				</div>
			</div>
		</Layout>
	)
}

export default Profile
