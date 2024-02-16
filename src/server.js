const express = require("express")
const path = require('path')
require('dotenv').config()
const connection = require('./config/dataBase')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoute = require('./routes/api')
//const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 8081

// config file upload
app.use(fileUpload())

// config
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

// config view template
configViewEngine(app);

// config route
app.use('/', webRoutes);
app.use('/v1/api', apiRoute);

(async () => {
    try {
        await connection()
        app.listen(port, () => {
            console.log(`litsening on port ${port}`)
        })
    } catch (error) {
        console.log("err: ", error)
    }
})()

