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

mongoose.connect(
	"mongodb+srv://db:4gekzi2q@hearthsearch-etf9e.mongodb.net/hearthsearch?retryWrites=true",
	{ useNewUrlParser: true }
);

app.prepare().then(() => {
	const server = express();

	server.use(cookieParser());
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());

	server.use((req, res, next) => {
		const { token } = req.cookies;

		if (token) {
			const { _id } = jwt.verify(token, process.env."app-secret-lol");
			req._id = _id;
		}

		next();
	});

	server.post("/api/signup", (req, res) => {
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
						const token = jwt.sign(
							{ _id: user.id },
							process.env."app-secret-lol"
						);

						res.cookie("token", token, { httpOnly: true });
						res.json({ user });
					}
				);
			});
		});
	});

	// Logs a user in and issues token
	server.post("/api/login", (req, res) => {
		const { username, password } = req.body;
		db.User.findOne({ username }, (err, user) => {
			if (err) throw err;
			if (!user) {
				return res.status(422).json("No user found");
			}

			if (!bcrypt.compare(password, user.password)) {
				return res.status(401).json("Incorrect password");
			}

			const token = jwt.sign({ _id: user.id }, process.env."app-secret-lol");

			res.cookie("token", token, { httpOnly: true });
			res.json({ user });
		});
	});

	// Checks if a user already has a valid token
	server.get("/api/fetch-user", (req, res) => {
		db.User.findOne({ _id: req._id }, (err, user) => {
			if (err) throw err;
			res.json(user);
		});
	});

	server.get("/api/logout", (req, res) => {
		res.clearCookie("token");
		res.json({ message: "Signed out", signedOut: true });
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
