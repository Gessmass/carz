const express = require('express')
const router = express.Router()

const CarController = require('../controllers/CarController.js')

router.get('/cars', CarController.getAllCars)
router.get('/getmainpicture', CarController.getMainPicture)
router.get('/getallcarpictures', CarController.getAllPicturesFromOneCar)
router.get('/getonecar', CarController.getOneCar)

module.exports = router