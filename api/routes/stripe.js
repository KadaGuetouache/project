require( "dotenv" ).config(  );
const router = require( "express" ).Router(  );
const stripe = require( "stripe" )( process.env.STRIPE_KEY );

router.post( "/payment", async ( req, res ) => { 
	const { products, subTotal } = req.body;

	console.log( products )

	try{ 
		const lineItems = products.map( product => ( { 
			price_data: { 
				currency: "usd",
				product_data: { 
					name: product.title,
					images: [ product.image ]
				},
				unit_amount: Math.round( subTotal * 100 ),
			},
		} ) )

		const session = await stripe.checkout.sessions.create( { 
			payment_method_types: [ "card" ],
			line_items: lineItems,
			mode: 'payment',
			success_url: `http://localhost:3000?success=true`,
			cancel_url: `http://localhost:3000/cart`,
		} );

		res.status( 200 ).json( { id: session.id } )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

module.exports = router;
