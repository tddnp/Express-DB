const express = require("express")
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2')

const app = express()
const port = process.env.PORT || 8081

// config route
app.use('/', webRoutes)

// config view template
configViewEngine(app)

// test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'express'
})

connection.query(
    'SELECT * FROM Users',
    function (err, results, field) {
        console.log('results = ', results)
        console.log('field = ', field)
    }
)

app.listen(port, () => {
    console.log(`litsening on port ${port}`)
})