// const http = require("http");

const express = require("express");
const app = express();

const adminRoutes = require("./routers/admin");
const shopRoutes = require("./routers/shop");
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
