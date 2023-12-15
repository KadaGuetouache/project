require( "dotenv" ).config(  );
const router = require( "express" ).Router(  );
const stripe = require( "stripe" )( process.env.STRIPE_KEY );

router.post( "/payment", async ( req, res ) => { 
	const { products, fastShipping, expressShipping } = req.body;

	try{ 
		const lineItems = products.map( product => ( { 
			price_data: { 
				currency: "usd",
				product_data: { 
					name: product.title,
					description: product.description,
					images: [ product.img ]
				},
				unit_amount: Math.round( product.price * 100 ),
			},
			quantity: product.quantity
		} ) )

		const shippingOptions = [ 
			{
				shipping_rate_data: {
					type: 'fixed_amount',
					fixed_amount: {
						amount: 0,
						currency: 'usd',
					},
					display_name: 'Free shipping',
					delivery_estimate: {
						minimum: {
							unit: 'business_day',
							value: 9,
						},
						maximum: {
							unit: 'business_day',
							value: 14,
						},
					},
				},
			},
			{
				shipping_rate_data: {
						type: 'fixed_amount',
						fixed_amount: {
							amount: Math.round(fastShipping * 100),
							currency: 'usd',
						},
						display_name: 'Fast Shipping',
						delivery_estimate: {
							minimum: {
								unit: 'business_day',
								value: 5,
							},
							maximum: {
								unit: 'business_day',
								value: 9,
							},
						},
					},
				},
				{
				shipping_rate_data: {
						type: 'fixed_amount',
						fixed_amount: {
							amount: Math.round(expressShipping * 100),
							currency: 'usd',
						},
						display_name: 'Express Shipping',
						delivery_estimate: {
							minimum: {
								unit: 'business_day',
								value: 1,
							},
							maximum: {
								unit: 'business_day',
								value: 1,
							},
						},
					},
				},
			]

		const session = await stripe.checkout.sessions.create( { 
			shipping_options: shippingOptions,
			payment_method_types: [ "card" ],
			line_items: lineItems,
			mode: 'payment',
			success_url: `http://localhost:3000/cart?success=true`,
			cancel_url: `http://localhost:3000/cart?canceled=true`,
		} );

		res.status( 200 ).json( { id: session.id } )
	} catch ( error ) { 
		res.status( 500 ).json( error )
	}
} );

module.exports = router;
