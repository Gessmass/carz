const pool = require('./db')
const table = 'car';

const findAll = async () => {
  try {
    const res = await pool.query(`SELECT * FROM ${table}`);
    return res.rows; 
  } catch (err) {
    console.log(err)
    throw err; 
  }
}



module.exports = { findAll }