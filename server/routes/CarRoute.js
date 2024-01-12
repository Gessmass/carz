const express = require('express')
const router = express.Router()

const CarController = require('../controllers/CarController.js')

router.get('/cars', CarController.getAllCars)

module.exports = router