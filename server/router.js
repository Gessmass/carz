const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage })

const CarController = require('./controllers/CarController.js')

router.get('/cars', CarController.getAllCars)
router.post('/uploadCarPicture', upload.single("myFile"), CarController.uploadCarPicture)

module.exports = router