const http = require("http");
const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routers/admin");
const shopRoutes = require("./routers/shop");
const errorController = require('./controllers/error')
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", errorController.page404);
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
