const express = require("express");
const router = express.Router();

const carRoute = require("./CarRoute")
const uploadRoute = require('./UploadRoute')

router.get("/", (req, res) => {
  res.status(200).send("On /api from router");
});

router.use("/car", carRoute);
router.use("/upload", uploadRoute)


module.exports = router;