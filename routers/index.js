const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.get("/", (req, res) => {
	res.render("index", { nama: "Dimas Riatmodjo" });
});

router.get("/add", (req, res) => {
	User.create(
		{ username: "dimasriat", password: "4ice3skrim5troberi" },
		(err) => {
			if (err) throw err;
			res.send("item berhasil dibuat");
		}
	);
});

module.exports = router;
