const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("mongoose");
db.connect("mongodb://127.0.0.1:27017/belajar_lagi");
db.Promise = global.Promise;
db.connection.on("error", console.error.bind(console, "mongodb error"));

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const indexRouter = require("./routers/");

app.use("/", indexRouter);

app.listen(8000, () => console.log("8000 cukk"));
