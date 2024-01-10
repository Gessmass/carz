const pool = require('./db')

const findAll = async () => {
  try {
    const res = await pool.query('SELECT * FROM car')
    return res
  } catch (err) {
    console.log(err)
  }
}

module.exports = findAll