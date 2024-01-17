const pool = require('./db')
const table = 'car';

const findAll = async () => {
  try {
    const result = await pool.query(`SELECT * FROM ${table}`);
    return result.rows;
  } catch (err) {
    console.log(err)
    throw err;
  }
}

const addNewCar = async (car,) => {
  const { brand, model, color, year, serial_number, buy_date, owner, engine, mileage, horsepower, version, filePath } = car;

  try {
    const result = await pool.query(`INSERT INTO ${table} (brand, model, color, year, serial_number, buy_date, owner, engine, profile_picture_path, mileage, horsepower, version) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id`,
      [brand, model, color, year, serial_number, buy_date, owner, engine, filePath, mileage, horsepower, version])
    return result.rows[0].id
  } catch (error) {
    throw error
  }
}

const getOneCarInfos = async (carId) => {
  try {
    const result = await pool.query(`SELECT * FROM ${table} WHERE "id" = $1`, [carId])
    return result.rows[0]
  } catch (error) {
    throw error
  }
}


module.exports = { findAll, addNewCar, getOneCarInfos }