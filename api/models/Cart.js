const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema( { 
	_id: { type: String, required: true },
	userId: { type: String, required: true },
	orderId: { type: String, required: true },
	title: { type: String, required: true },
	img: { type: String, required: true },
	price: { type: Number, required: true },
	size: { type: String, required: true },
	color: { type: String, required: true },
	quantity: { type: Number, default: 1 },
}, {timestamps: true} )

module.exports = mongoose.model("Cart", CartSchema);
