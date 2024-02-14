const express = require('express')
const routerAPI = express.Router()
const { getAllUsersApi, createUser } = require('../controllers/apiControllers')

routerAPI.get('/', (req, res) => {
    res.send("Hello world from api")
})

routerAPI.get('/users', getAllUsersApi)
routerAPI.post('/users', createUser)

module.exports = routerAPI