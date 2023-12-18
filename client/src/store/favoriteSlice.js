import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( { 
	name: "favorite",
	initialState: { 
		products: [  ],
	},
	reducers: { 
		addProductToFavorite: ( state, action ) => { 
			const productIndex = state.products.findIndex( product => product?._id === action.payload._id )
			productIndex === -1 ? state.products.push( action.payload ) : state.products.splice( state.products.indexOf( productIndex ), 1 )
		},
		removeSingleFavoriteProduct: ( state, action ) => { 
			state.products = state.products.filter( product => product._id !== action.payload )
		},
		updateFavorite: ( state, action ) => { 
			const { products } = action.payload
			state.products = products
		},
		deleteAllFavorite: ( state ) => { 
			state.products = [  ]
		}
	}
} )

export const { deleteAllFavorite, addProductToFavorite, removeSingleFavoriteProduct, updateFavorite } = cartSlice.actions
export default cartSlice.reducer; 
