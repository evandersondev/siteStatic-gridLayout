const express = require("express");
const app = express();
const { resolve } = require("path");
const routes = require("./routes");

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.use(express.static(resolve(__dirname, "public")));

app.use(routes);

module.exports = app;
