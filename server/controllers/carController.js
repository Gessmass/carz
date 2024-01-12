const { findAll } = require('../services/CarService')
const { uploadCarPicturePath } = require('../services/CarPictureService')

const getAllCars = async (req, res) => {
  try {
    const rows = await findAll();
    if (!Array.isArray(rows)) {
      throw new Error("Data is not an array");
    }
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retreiving data from database");
  }
}

const uploadCarPicture = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded")
  }

  const filePath = `assets/images/${req.file.filename}` // no "public" in path bcz expres.static("public") in app.js
  const carId = req.params.carId

  try {
    await uploadCarPicturePath({ picturePath: filePath }, carId)
    res.status(200).send(`File uploaded successfully at path ${filePath}`)
  } catch (err) {
    console.error(err)
    res.status(500).send("Error while saving a picture path")
  }

}


module.exports = { getAllCars, uploadCarPicture }