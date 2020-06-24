const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.get("/", (req, res) => {
	res.render("index", { nama: "Dimas Riatmodjo" });
});

router.get("/create", (req, res) => {
	res.render("create");
});

router.post("/create", (req, res) => {
	const data = { username: req.body.username, password: req.body.password };
	User.create(data, (err) => {
		if (err) throw err;
		res.redirect("/read");
	});
});

router.get("/read", (req, res) => {
	User.find((err, results) => {
		if (err) throw err;
		res.render("read", { results: results });
	});
});

router.get("/delete/:id", (req, res) => {
	User.findByIdAndDelete(req.params.id, (err) => {
		if (err) throw err;
		res.redirect("/read");
	});
});

module.exports = router;
