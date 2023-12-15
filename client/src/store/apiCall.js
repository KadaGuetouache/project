import { loginFail, loginStart, loginSuccess } from "./userSlice.js";
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
