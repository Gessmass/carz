const services = require('../services')

const getAllCars = async (req, res) => {
  await services.car
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}

module.exports = getAll