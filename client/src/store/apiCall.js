import { loginFail, loginStart, loginSuccess, registerStart, registerSuccess, registerFail, updateProfileStart, updateProfile, updateProfileError } from "./userSlice.js";
import { deleteAllProducts } from "./cartSlice.js";
import axios from "axios";
import { BASE_URL } from "../constants/api.js";
import { setProducts } from "./productSlice.js";

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

export const updateUserProfile = async ( currentUser, user, dispatch ) => { 
		dispatch( updateProfileStart(  ) )
    try {
			const response = await axios.put( `${ BASE_URL }/user/${ currentUser._id }`, user,{ 
				headers: { 
					token: `Bearer ${ currentUser.accessToken }`,
					"Content-Type": "application/json",
				}
			} )

			let updatedUser = response.data
			updatedUser = { ...updatedUser, accessToken: currentUser.accessToken }
			dispatch( updateProfile( updatedUser ) )
    } catch (error) {
			dispatch( updateProfileError(  ) )
        console.log(error);
    }
}

export const uploadToRemoteCart = async ( headers, cart ) => { 
		try{ 
			const response = await axios.post( `${ BASE_URL }/cart/`, cart, { headers: headers } )	
		} catch ( error ) { 
			console.log( error )	
		}
}

export const uploadToRemoteFavoriteList = async ( headers, favoriteProducts ) => { 
		try{ 
			const response = await axios.post( `${ BASE_URL }/favorite/`, favoriteProducts, { headers: headers } )	
		} catch ( error ) { 
			console.log( error )	
		}
}

export const getAllProducts = async ( category, dispatch ) => { 
	try{ 
			const response = await axios.get( category !== "all" && category !== undefined ? 
			`${ BASE_URL }/product?category=${ category }` : `${ BASE_URL }/product` )
			dispatch( setProducts( response.data ) )
	} catch ( error ) { 
		console.log( error )
	}
}

export const checkoutToStripe = async ( stripe, products, fastShipping, expressShipping ) => { 
	try{ 
		const response = await axios.post( `${ BASE_URL }/checkout/payment`, { products, fastShipping, expressShipping });

		const session = await response.data;

		const result = stripe.redirectToCheckout( { sessionId: session.id } )
		console.log( result )
	} catch ( error ){ 
		console.log( error );
	}
}

export const getSingleProduct = async ( id ) => { 
		try{ 
			const response = await axios.get( `${ BASE_URL }/product/find/${ id }` )
			return response
		} catch ( error ){ 
			console.log( error )
		}
}

export const getCart = async ( user ) => { 
	try{ 
		const response = await axios.get( `${ BASE_URL }/cart/find/${ user._id }`, { 
			headers: { 
				token: `Bearer ${ user?.accessToken }`,
				"Content-Type": "application/json",
			}
		} )
		return response
	} catch ( error ) { 
		console.log( error )
	}
}

export const getFavoriteList = async ( user ) => { 
	try{ 
		const response = await axios.get( `${ BASE_URL }/favorite/${ user._id }`, { headers: { 
				token: `Bearer ${ user?.accessToken }`,
				"Content-Type": "application/json",
		} } )
		return response
	} catch ( error ) { 
		console.log( error )
	}
}
