import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice( { 
	name: "products",
	initialState: { 
		products: [  ],
	},
	reducers: { 
		setProducts: ( state, action ) => { 
			state.products = action.payload
		},
		unSetProducts: ( state ) => { 
			state.products = [  ]
		}
	}
})

export const { setProducts, unSetProducts } = productSlice.actions;

export default productSlice.reducer;
