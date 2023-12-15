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
		}
	}
} )

export const { loginStart, loginSuccess, loginFail } = cartSlice.actions

export default cartSlice.reducer; 
