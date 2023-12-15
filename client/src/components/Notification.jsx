import { useState } from "react";
import "../styles/notification.scss";

const Notification = ( { display, type, message, updateNotification } ) => {
	const [ color, setColor ] = useState( type )

	if ( color === "error" ) { 
		setColor( "tomato" )
	}

	return(
		<div className={ `notification-container ${ type }` } style={ { display: display ? "block" : "none" } }>
			<span className="close" onClick={ () => updateNotification(  ) }>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</span>			
			<p>{ message }</p>
		</div>
	)
}

export default Notification
