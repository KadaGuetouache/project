const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => { 
	const authHeader = req.headers.token;

	if (authHeader) { 
		const token = authHeader.split( " " )[ 1 ]

		jwt.verify( token, process.env.JWT_SECRET, (error, user ) => { 
			if (error) response.status(403).json( "token is not valid!" )
			req.user = user
			next();
		});
	} else { 
		return response.status( 401 ).json( "Unauthorized!" )
	}
}

const verifyTokenAndAuthorization = (req, res, next) => { 
	verifyToken( req, res, () => { 
		if ( req.user.id === req.params.id || req.user.isAdmin ) { 
			next();
		} else { 
			res.status( 403 ).json( "you are not authorized to perform this actions!" )
		}
	});
}

const verifyTokenAndAdmin = ( req, res, next ) => { 
	verifyToken( req, res, () => { 
		if ( req.user?.isAdmin ) { 
			next();
		} else { 
			res.status( 403 ).json( "Only admin is authorized to perform this actions!" )
		}
	} )
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
