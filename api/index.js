const express = require("express");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require( "cors" );

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
	.then(() => console.log("Databata Connected"))
	.catch((error) => console.log(error))

app.use(express.json())
app.use(cors(  ))
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5500, () => console.log(`Server is running en port ${process.env.PORT}`))
