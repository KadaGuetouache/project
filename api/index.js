const express = require("express");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
	.then(() => console.log("Databata Connected"))
	.catch((error) => console.log(error))

app.use(express.json())
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);

app.listen(process.env.PORT || 5500, () => console.log(`Server is running en port ${process.env.PORT}`))
