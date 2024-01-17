const pool = require('./db')
const table = 'car_picture';

const uploadCarPicturePath = async (carId, picturePath) => {
  try {


    const result = await pool.query(`INSERT INTO ${table} (car_id, path) VALUES ($1, $2) RETURNING id`, [picturePath, carId]);
    return `Path successfully uploaded in database with ID: ${result.rows[0].id}`;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMainCarPicture = async (carId) => {
  try {
    const carPicturePath = await pool.query(`SELECT "path" FROM ${table} WHERE "car_id" = $1 AND "is_main_picture" = true`, [carId])
    return carPicturePath.rows[0].path
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getAllPicturesFromACar = async (carId) => {
  try {
    const carPicturesPath = await pool.query(`SELECT "path" FROM ${table} WHERE "car_id" = $1`, [carId])
    return carPicturesPath.rows
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = { uploadCarPicturePath, getMainCarPicture, getAllPicturesFromACar }