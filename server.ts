require("dotenv").config();
const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
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
		db.User.find({}, (err, users) => {
			console.log(users);
		});

		// Check is user exists
		db.User.create(req.body, (err, user) => {
			if (err) throw err;
			console.log(user);
			res.json(user);
		});
		// Hash password

		// Set new user

		// Return cookie
		console.log(req.body);
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
