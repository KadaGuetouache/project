const Order = require( "../models/Order.js" );
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifyToken.js");
const router = require( "express" ).Router();

// Create an order
router.post( "/", verifyToken, async ( req, res ) => { 
	const newOrder = new Order( req.body );

	try{ 
		const savedOrder = await newOrder.save();
		res.status( 200 ).json( savedOrder );
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

// Update an order
router.put( "/:id", verifyTokenAndAdmin, async ( req, res ) => { 
	try{ 
		const updatedOrder = await Order.findByIdAndUpdate( 
			req.params.id,
			{ 
				$set: req.body,
			},
			{ new: true }
		);
		res.status( 200 ).json( updatedOrder );
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

// Delete an order
router.delete( "/:id", verifyTokenAndAdmin, async ( req, res ) => { 
	try{ 
		await Order.findByIdAndDelete( {UserId: req.params.id } );
		res.status( 200 ).json( "Order has been deleted." );
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );


// Get user orders
router.get( "/find/:id", verifyTokenAndAuthorization, async ( req, res ) => { 
	try{ 
		const orders = await Order.find( { userId: req.params.id } )
		res.status( 200 ).json( orders );
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );


// Get all orders
router.get( "/find/:id", verifyTokenAndAdmin, async ( req, res ) => { 
	try{ 
		const orders = await Order.find(  )
		res.status( 200 ).json( orders );
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

module.exports = router;
