const router = require("express").Router();
const User = require("../models/User.js");

router.post("/register", async (req, res) => { 
	const newUser = new User( { 
		username: req.body.username,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
	} )

	try{ 
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error){ 
		res.status(500).json("Internal Server Error")
		console.log(error)
	}
});

module.exports = router;
