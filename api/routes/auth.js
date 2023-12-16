const router = require("express").Router();
const User = require("../models/User.js");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => { 
	const newUser = new User( { 
		username: req.body.userName,
		firstname: req.body.firstName,
		lastname: req.body.lastName,
		email: req.body.email,
		password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_TOKEN).toString(),
	} )

	try{ 
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error){ 
		res.status(500).json(error)
		console.log(error)
	}
});

router.post("/login", async (req, res) => { 
	try{ 
		const user = await User.findOne( {"username": req.body.userName } )

		let userPassword

		user ? userPassword = cryptoJS.AES.decrypt(user.password, process.env.PASS_TOKEN).toString(cryptoJS.enc.Utf8) : null

		if (user && req.body.password === userPassword) { 

			const accessToken = jwt.sign( { 
				id: user._id,
				isAdmin: user.isAdmin
			}, process.env.JWT_SECRET, { expiresIn: '3d' } )

			const { password, ...others } = user._doc;
			res.status(200).json({ ...others, accessToken } );
		} else { 
			res.status(400).json("Unauthorized User: please make sure that your credentials are correct and try again!");
		}

	} catch (error) { 
		res.status(500).json(error);
		console.log(error)
	}
} )

module.exports = router;
