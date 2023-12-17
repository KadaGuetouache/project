const Cart = require( "../models/Cart.js" );
const router = require( "express" ).Router();
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require( "./verifyToken.js" );

// Create new cart
router.post( "/", verifyToken, async ( req, res ) => { 
	const { userId, quantity, total } = req.body;
	const newCart = new Cart( req.body );
	console.log( "here",req.body )

	try{ 
		await Cart.deleteMany( { userId } )
		if ( quantity !== 0 && total !== 0 ) { 
			const savedCart = await newCart.save();
			res.status( 200 ).json( savedCart )
		}
		res.status( 200 )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

// Update a cart
router.put( "/:id", verifyTokenAndAuthorization, async ( req, res ) => { 
	try{ 
		const updatedCart = await Cart.findByIdAndUpdate( 
			req.params.id,
			{ 
				$set: req.body,
			},
			{ new: true }
		);
		res.status( 200 ).json( updatedCart )
	} catch ( error ){ 
		res.status( 500 ).json( error )
	}
} );

// Delete a cart
router.delete( "/:id", verifyToken, async ( req,res ) => { 
	try{ 
		await Cart.deleteOne( { orderId: req.params.id } );
		res.status( 200 ).json( true )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

// Get user cart
router.get( "/find/:id", verifyTokenAndAuthorization, async ( req, res ) => { 
	try{ 
		const cart = await Cart.find( { userId: req.params.id } );
		res.status( 200 ).json( cart )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

// Get all carts
router.get( "/", verifyTokenAndAdmin, async ( req, res ) => { 
	try{ 
		const carts = await Cart.find(  );
		res.status( 200 ).json( carts )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

module.exports = router;
