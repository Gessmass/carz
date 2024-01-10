require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('node:fs')
const path = require('node:path')

app.use(express.join())

app.use(cors({
  origin: 'http:localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}))

const router = require()

app.get("/", (req, res) => {
  res.status(200).send("On / from server")
})

app.use("/api", router)

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found" })
})

module.exports = app