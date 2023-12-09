const router = require( "express" ).Router();
const { verifyTokenAndAdmin } = require( "./verifyToken.js" );
const Product = require( "../models/Product.js" );

// Add new product
router.post( "/", verifyTokenAndAdmin, async ( req, res ) => { 
	const newProduct = new Product( req.body );

	try{ 
		const savedProduct = await newProduct.save();
		res.status( 200 ).json( savedProduct );
	} catch ( error ) { 
		res.status( 500 ).json( error );
	}
} );

// Get all products
router.get( "/", async ( req, res ) => { 
	try{  
		let products;
		products = await Product.find(  );
		res.status( 200 ).json( products )
	} catch ( error ) { 
		res.status( 500 ).json( error );
	}
} );

// Delete a product
router.delete( "/:id", verifyTokenAndAdmin, async ( req, res ) => { 
	try{ 
		const product = await Product.findByIdAndDelete( req.params.id );
		res.status( 200 ).json( "Product has been delete successfully" );
	} catch ( error ) { 
		console.log( error )
	}
} );

// Find a product
router.get( "/find/:id", async( req, res ) => { 
	try{ 
		const product = await Product.findById( req.params.id );
		res.status( 200 ).json( product )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

// Update a product
router.put( "/:id", verifyTokenAndAdmin, async (req, res ) => { 
	try{  
		const updateProduct = await Product.findByIdAndUpdate( req.params.id, { 
			$set: req.body
		}, { new: true } );

		res.status( 200 ).json( updateProduct )
	} catch ( error ) { 
		res.status( 500 ).json( error );
	}
} );

module.exports = router;
