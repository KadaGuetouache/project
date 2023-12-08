const router = require("express").Router();
const User = require( "../models/User.js" );
const cryptoJS = require( "crypto-js" );
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require( "./verifyToken.js" );


router.put( "/:id", verifyTokenAndAuthorization, async ( req, res ) => { 

	if ( req.body.password ) { 
		req.body.password = cryptoJS.AES.decrypt( req.body.password, process.env.PASS_TOKEN ).toString();
	}

	try{ 
		const updatedUser = await User.findByIdAndUpdate( req.params.id, { 
			$set: req.body	
		}, { new: true } );

		res.status( 200 ).json( updatedUser )
	} catch ( error ) { 
		response.status( 500 ).json( error )
	}
} )

module.exports = router;
