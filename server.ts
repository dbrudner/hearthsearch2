require("dotenv").config();

const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(process.env.ATLAS_URI);

MongoClient.connect(
	process.env.ATLAS_URI,
	function(err, client) {
		if (err) {
			console.log(
				"Error occurred while connecting to MongoDB Atlas...\n",
				err
			);
			return;
		}
		const collection = client.db("user");

		app.prepare().then(() => {
			const server = express();

			server.use(cookieParser(), bodyParser());

			server.post("/signup", (req, res) => {
				// Check is user exists
				console.log(collection);
				// Hash password

				// Set new user

				// Return cookie
				console.log(req.body);
				res.json(collection);
			});

			server.get("*", (req, res) => {
				return handle(req, res);
			});

			server.listen(port, err => {
				if (err) throw err;
				console.log(`> Ready on http://localhost:${port}`);
			});
		});
	}
);
