const express = require('express')
const routerAPI = express.Router()
const { getAllUsersApi } = require('../controllers/apiControllers')

routerAPI.get('/', (req, res) => {
    res.send("Hello world from api")
})

routerAPI.get('/users', getAllUsersApi)

module.exports = routerAPI