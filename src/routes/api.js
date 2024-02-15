const express = require('express')
const routerAPI = express.Router()
const { getAllUsersApi, createUser, updateUser, deleteUser } = require('../controllers/apiControllers')

routerAPI.get('/', (req, res) => {
    res.send("Hello world from api")
})

routerAPI.get('/users', getAllUsersApi)
routerAPI.post('/users', createUser)
routerAPI.put('/users', updateUser)
routerAPI.delete('/users', deleteUser)

module.exports = routerAPI