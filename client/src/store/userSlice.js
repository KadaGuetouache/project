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
			state.currentUser = action.payload
			state.error = false
			state.isFetching = false
		},
		registerFail: ( state ) => { 
			state.error = true
			state.isFetching = false
		},
	}
} )

export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail } = cartSlice.actions
export default cartSlice.reducer; 
