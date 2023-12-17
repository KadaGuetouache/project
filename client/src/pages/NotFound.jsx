import React from "react";
import Layout from "../components/Layout";
import NotFoundImg from "../constants/NotFoundImg";

const NotFound = ( ) => {
	return(
		<Layout>
			<div style={ { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",height: "100vh" } }>
				<h1>It seems like you are lost!</h1>
				<div style={ { width: "50%", height: "50%", margin: "1rem 0" } }>
				<NotFoundImg />
				</div>
				<p>There is not that can be found in here</p>
			</div>
		</Layout>
	)
}

export default NotFound
