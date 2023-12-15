import axios from "axios";
import { BASE_URL } from "./constants/api.js";

let token = "";

try{ 
	token = JSON.parse( JSON.parse( localStorage?.getItem( 'persist:root' ) ).user ).currentUser.accessToken;
} catch ( error ) {  }

export const publicRequest = axios.create( { 
	baseURL: BASE_URL
} )

export const userRequest = axios.create( { 
	baseURL: BASE_URL,
	headers: { token, `Bearer ${ token }` }
} )
