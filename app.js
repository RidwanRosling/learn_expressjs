// const http = require("http");

const express = require("express");
const app = express();

const adminRoutes = require("./routers/admin");
const shopRoutes = require("./routers/shop");
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
