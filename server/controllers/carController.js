const { findAll, addNewCar, getOneCarInfos } = require('../services/CarService')
const { uploadCarPicturePath, getMainCarPicture, getAllPicturesFromACar } = require('../services/CarPictureService');

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
    return res.status(500).send("No file in query")
  }
  const filePath = `/assets/images/${req.file.filename}`
  const carId = req.body.carId

  try {
    await uploadCarPicturePath(filePath, carId)
    res.send("File uploaded and path saved sucessfully")
  } catch (error) {
    console.error(error)
    res.status(500).send("Error saving path to database")
  }
}


const getMainPicture = async (req, res) => {
  const carId = req.query.carId

  try {
    const result = await getMainCarPicture(carId)
    res.send(result)
  } catch (error) {
    console.log(error)
  }
}

const getAllPicturesFromOneCar = async (req, res) => {
  const carId = req.query.carId

  try {
    const result = await getAllPicturesFromACar(carId)
    res.send(result)
  } catch (error) {
    console.log(error)
  }
}

const createNewCar = async (req, res) => {

  let filePath;
  if (req.file) {
    filePath = `/assets/images/${req.file.filename}`;
  }
  const { brand, model, year, color, mileage, version, engine, serialNumber, buyDate, owner, horsepower } = req.body;

  const car = {
    brand,
    model,
    year,
    color,
    mileage,
    version,
    engine,
    serialNumber,
    buyDate,
    owner,
    horsepower,
    filePath
  };

  try {
    await addNewCar(car);
    res.send("Car and file uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving car to database");
  }
};

const getOneCar = async (req, res) => {
  const carId = req.query.carId

  try {
    const carInfos = await getOneCarInfos(carId)
    res.send(carInfos)
  } catch (error) {
    console.log(error)
    res.status(500).send("Error retreiving car infos from database")
  }
}

module.exports = { getAllCars, uploadCarPicture, getMainPicture, getAllPicturesFromOneCar, createNewCar, getOneCar }