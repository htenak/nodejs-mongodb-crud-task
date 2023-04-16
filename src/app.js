const express = require("express");
const path = require("path");
const morgan = require("morgan");
const indexRoutes = require("./routes/index.routes");

const app = express();

app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "views"));

// middLewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));   // puede leer el req.body

// routes
app.use(indexRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
