import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( { 
	name: "cart",
	initialState: { 
		products: [  ],
		quantity: 0,
		total: 0
	},
	reducers: { 
		addProduct: ( state, action ) => { 
			// increasing cart quantity
			state.quantity += 1;

			// adding product to products array
			state.products.push( action.payload );

			// updating the total price in the cart
			state.total = action.payload.price * action.payload.quantity;
		},
		removeSingleProduct: ( state, action ) => { 

			// removing the product from products array
			state.products = state.products.filter( product => product.orderId !== action.payload.orderId )

			// updating the total in cart
			if ( state.total > 0 ) { 
				state.total = state.total - ( action.payload.price * action.payload.quantity )
			}

			// decreading cart quantity
			if ( state.quantity > 0 ) { 
				state.quantity -= 1
			}
		}
	}
} )

export const { addProduct, removeSingleProduct } = cartSlice.actions;
export default cartSlice.reducer; 
