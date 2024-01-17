const express = require('express')
const router = express.Router()

const upload = require('../helpers/multerConfig.js')

const CarController = require('../controllers/CarController.js')

router.post('/uploadCarPicture', upload.single("myFile"), CarController.uploadCarPicture)
router.post('/createnewcar', upload.single('myFile'), CarController.createNewCar)

module.exports = router