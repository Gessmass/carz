const pool = require('./db')
const table = 'car_picture';

const uploadCarPicturePath = async (picturePath, carId) => {
  try {
    await pool.query(`INSERT INTO ${table} (car_id, path) VALUES (?, ?)`, [picturePath, carId])
    res.send("Path successfully uploaded in database")
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}


module.exports = { uploadCarPicturePath }