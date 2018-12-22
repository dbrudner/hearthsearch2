require("dotenv").config();
const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("./app/models");

console.log(process.env.ATLAS_URI);

mongoose.connect(
	process.env.ATLAS_URI,
	{ useNewUrlParser: true }
);

app.prepare().then(() => {
	const server = express();

	server.use(cookieParser());
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());

	server.post("/signup", (req, res) => {
		const { username, email } = req.body;
		db.User.findOne({ username }, (err, user) => {
			if (err) throw err;
			if (user) {
				return res.status(422).json("Username already exists.");
			}

			db.User.findOne({ email }, async (err, email) => {
				if (err) throw err;
				if (email) {
					return res
						.status(422)
						.json("That e-mail has already been used.");
				}

				const password = await bcrypt.hash(req.body.password, 10);

				await db.User.create(
					{ username, email, password },
					(err, user) => {
						if (err) throw err;
						console.log(user);
						res.json(user);
					}
				);
			});
		});

		// Check is user exists
		// Hash password

		// Set new user

		// Return cookie
		console.log(req.body);
	});

	server.post("/login", (req, res) => {
		const { username, password } = req.body;
		db.User.findOne({ username }, (err, user) => {
			if (err) throw err;
			if (!user) {
				return res.json("No user found");
			}

			if (!bcrypt.compare(password, user.password)) {
				return res.status(401).json("Incorrect password");
			}

			const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

			res.cookie("token", token, { httpOnly: true });
			res.json({ user });
		});
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
