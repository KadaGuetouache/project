import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( { 
	name: "user",
	initialState: { 
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: { 
		loginStart: ( state ) => { state.isFetching = true },
		loginSuccess: ( state, action ) => { 
			state.isFetching = false;
			state.currentUser = action.payload
		},
		loginFail: ( state ) => { 
			state.error = true;
			state.isFetching = false;
		},
		registerStart: ( state ) => { state.isFetching = true },
		registerSuccess: ( state, action ) => { 
			state.error = false
			state.isFetching = false
		},
		registerFail: ( state ) => { 
			state.error = true
			state.isFetching = false
		},
		updateProfileStart: ( state ) => { state.isFetching = true },
		updateProfile: ( state, action ) => { 
			state.currentUser = action.payload
			state.isFetching = false
			state.error = false
		},
		updateProfileError: ( state ) => { state.error = true },
		logoutUser: ( state ) => { 
			state.currentUser = null;
			state.isFetching = false;
			state.error = false;
		},
	}
} )

export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail, logoutUser, updateProfileStart, updateProfile, updateProfileError } = cartSlice.actions
export default cartSlice.reducer; 
