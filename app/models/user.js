const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	email: String,
	password: String,
	username: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);
