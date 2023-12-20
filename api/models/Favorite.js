const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
	userId: { type: String, required: true },
	products: [
		{
			title: { type: String, required: true },
			description: { type: String, required: true },
			img: { type: String, required: true },
			categories: { type: Array },
			size: { type: Array },
			color: { type: Array },
			price: { type: Number, required: true },
		}
	]
}, { timestamps: true })

module.exports = mongoose.model("Favorite", FavoriteSchema);
