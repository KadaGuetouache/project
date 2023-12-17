const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema( { 
	userId: { type: String, required: true },
	products: [
		{ 
			product_id: { type: String },
			quantity: { type: Number, default: 1 },
		}
	],
	amount: { type: Number, required: true },
}, {timestamps: true} )

module.exports = mongoose.model("Order", OrderSchema);
