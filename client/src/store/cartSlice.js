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
			state.total += action.payload.price * action.payload.quantity;
		},
		updateCart: ( state, action ) => { 
			const { products, quantity, total } = action.payload
			state.products = products
			state.quantity = quantity
			state.total = total
		},
		updateSingleProduct: ( state, action ) => { 
			const currentProduct = action.payload.product;
			const products = state.products;
			const INCREASE = "increase";
			const DECREASE = "decrease";

			state.products = products.map( product => { 
				if ( product.orderId === currentProduct.orderId ) { 
					product.quantity = currentProduct.quantity;

					if ( action.payload.operation === INCREASE ) { 
						state.total += currentProduct.price;
					} else if ( action.payload.operation === DECREASE ) { 
						state.total -= currentProduct.price;
					}
				}

				return product;
			} )
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
		},
		deleteAllProducts: ( state, action ) => { 
			state.products = [  ]
			state.quantity = 0
			state.total = 0
		}
	}
} )

export const { addProduct, updateSingleProduct, removeSingleProduct, deleteAllProducts, updateCart } = cartSlice.actions;
export default cartSlice.reducer; 
