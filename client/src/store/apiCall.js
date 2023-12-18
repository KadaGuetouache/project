import { loginFail, loginStart, loginSuccess, registerStart, registerSuccess, registerFail } from "./userSlice.js";
import { deleteAllProducts } from "./cartSlice.js";
import axios from "axios";
import { BASE_URL } from "../constants/api.js";

export const login = async ( dispatch, user ) => { 
	dispatch( loginStart(  ) )

	try{ 
		const response = await axios.post( `${ BASE_URL }/auth/login`, user );
		dispatch( loginSuccess( response.data ) )
		return response.data;
	} catch ( error ) { 
		dispatch( loginFail(  ) );
		console.log( error )
		return error;
	}
}

export const register = async ( dispatch, user ) => { 
		dispatch( registerStart(  ) )
	try{ 
		const response = await axios.post( `${ BASE_URL }/auth/register`, user );
		dispatch( registerSuccess( response.data ) )
		//return response.data
	} catch ( error ) { 
		dispatch( registerFail(  ) );
		console.log( error )
		return error
	}
}

export const removeAllProductsFromCart = ( dispatch ) => { 
	try{ 
		dispatch(deleteAllProducts(  ))
	} catch ( error ) { 
		console.log( error )
		return error
	}
}

export const getFavoriteProducts = async (user) => {
    try {
        const response = await axios.get(`${BASE_URL}/favorite/${user._id}`, {
            headers: { token: `Bearer ${user.accessToken}` },
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const addFavoriteProduct = async (user, product) => {
    try {
        const response = await axios.post(`${BASE_URL}/favorite/`, product, {
            headers: { token: `Bearer ${user.accessToken}` },
        })
        return response
    } catch (error) {
        console.log(error);
    }
}

export const removeFavoriteProduct = async (user, productId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/favorite/${productId}`, {
            headers: { token: `Bearer ${user.accessToken}` },
        })
        return response
    } catch (error) {
        console.log(error);
    }
}

