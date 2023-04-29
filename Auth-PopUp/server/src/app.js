const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const router = require("./routes/router");
const chekBody = require("./middleware/checkBody");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(router);
app.use(chekBody);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
