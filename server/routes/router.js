const express = require("express");
const router = express.Router();

const carRoute = require("./CarRoute")
const uploadRoute = require('./UploadRoute')


router.use("/car", carRoute);
router.use("/upload", uploadRoute)


module.exports = router;