const express = require("express")
const bodyParser = require("body-parser")
const { initialize } = require("express-openapi")
const { join } = require("path")

const operations = {
  addPet: (req, res, next) => {
    const message = `Welcome ${req.body.name}!`

    console.log(message)

    res.json({
      message
    })
  },

  updatePet: (req, res, next) => {
    res.json({ message: "updatePet" })
  },

  findPetsByStatus: (req, res, next) => {
    res.json({ message: "findPetsByStatus" })
  },

  findPetsByTags: (req, res, next) => {
    res.json({ message: "findPetsByTags" })
  },

  getPetById: (req, res, next) => {
    res.json({ message: "getPetById" })
  },

  updatePetWithForm: (req, res, next) => {
    res.json({ message: "updatePetWithForm" })
  },

  deletePet: (req, res, next) => {
    res.json({ message: "deletePet" })
  },

  uploadFile: (req, res, next) => {
    res.json({ message: "uploadFile" })
  },

  getInventory: (req, res, next) => {
    res.json({ message: "getInventory" })
  },

  placeOrder: (req, res, next) => {
    res.json({ message: "placeOrder" })
  },

  getOrderById: (req, res, next) => {
    res.json({ message: "getOrderById" })
  },

  deleteOrder: (req, res, next) => {
    res.json({ message: "deleteOrder" })
  },

  createUser: (req, res, next) => {
    res.json({ message: "createUser" })
  },

  createUsersWithArrayInput: (req, res, next) => {
    res.json({ message: "createUsersWithArrayInput" })
  },

  createUsersWithListInput: (req, res, next) => {
    res.json({ message: "createUsersWithListInput" })
  },

  loginUser: (req, res, next) => {
    res.json({ message: "loginUser" })
  },

  logoutUser: (req, res, next) => {
    res.json({ message: "logoutUser" })
  },

  getUserByName: (req, res, next) => {
    res.json({ message: "getUserByName" })
  },

  updateUser: (req, res, next) => {
    res.json({ message: "updateUser" })
  },

  deleteUser: (req, res, next) => {
    res.json({ message: "deleteUser" })
  }
}

const app = express()

app.use(bodyParser.json())

initialize({
  app,
  errorMiddleware: (err, req, res, next) => { // only handles errors for /v3/*
    res.json(err)
  },
  apiDoc: join(__dirname, "../../apiDoc.yml"),
  dependencies: {
    log: console.log
  },
  operations
})

app.listen(3000, () => console.log("api listening on port 3000"))
