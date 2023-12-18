const Favorite = require( "../models/Favorite.js" );
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken.js");
const router = require( "express" ).Router(  );

router.post( "/", verifyToken, async ( req, res ) => { 
	const { products, userId } = req.body
	const newFavorite = new Favorite( req.body )

	try {  
		await Favorite.deleteMany( { userId: userId } )
		if ( products.length !== 0 ) { 
			const savedFavorite = await newFavorite.save();
			res.status( 200 ).json( savedFavorite )
		}
		res.status( 200 )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

router.delete( "/:id", verifyToken, async ( req, res ) => { 
	try {  
		await Favorite.deleteOne( { _id: req.params.id } )
		res.status( 200 ).json( true )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

router.get( "/:id", verifyTokenAndAuthorization, async ( req, res ) => { 
	try {  
		const cart = await Favorite.find( { userId: req.params.id } )
		res.status( 200 ).json( cart );
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

module.exports = router
