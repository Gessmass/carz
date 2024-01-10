const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController.js')

router.get('/cars', carController)

module.exports = router