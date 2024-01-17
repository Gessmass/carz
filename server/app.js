const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require('./routes/router');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200,
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("On / from server");
});

app.use("/api", router);

app.use(express.static('public'));

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" })
});


module.exports = app;