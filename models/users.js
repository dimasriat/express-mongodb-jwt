const db = require("mongoose");

const UserSchema = new db.Schema({
	username: String,
	password: String,
});

const User = db.model("User", UserSchema);

module.exports = User;
