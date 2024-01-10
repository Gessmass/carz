const { pool } = require('./db')

const services = {}

const CarService = require('./carService')

services.car = new CarService()
services.car.setDatabase(pool)

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1)

    throw new ReferenceError(
      `services.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Service.js, and did you register it in src/server/services/index.js ?`
    )
  },
}

module.exports = new Proxy(services, handler)