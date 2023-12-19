const router = require("express").Router();
const User = require( "../models/User.js" );
const cryptoJS = require( "crypto-js" );
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require( "./verifyToken.js" );


router.put( "/:id", verifyTokenAndAuthorization, async ( req, res ) => { 

	const user = { 
		username: req.body.userName,
		firstname: req.body.firstName,
		lastname: req.body.lastName,
		email: req.body.email,
		password: cryptoJS.AES.encrypt( req.body.password, process.env.PASS_TOKEN ).toString(  ),
	}

	try{ 
		const updatedUser = await User.findByIdAndUpdate( { _id: req.params.id }, { $set: user }, { new: true });
		res.status( 200 ).json( updatedUser )
	} catch ( error ) { 
		response.status( 500 ).json( error )
	}
} )

router.delete( "/:id", verifyTokenAndAuthorization, async ( req, res ) => { 
	try{ 
		await User.findByIdAndDelete( req.params.id )
		res.status( 200 ).json( "account has been deleted successfully" )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} )

router.get( "/find/:id", verifyTokenAndAdmin, async ( req, res ) => { 
	try{ 
		const user = await User.findById( req.params.id );
		const { password, ...others } = user._doc;
		res.status( 200 ).json( others )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} )

router.get( "/", verifyTokenAndAdmin, async ( req, res ) => { 
	try{
		const query = req.query.new;
		const users = query ? await User.find(  ).sort( { _id: -1 } ).limit( 5 ) : await User.find(  );
		res.status( 200 ).json( users )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} )

module.exports = router;
