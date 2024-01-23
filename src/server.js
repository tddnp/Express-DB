const express = require("express")
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8081

// config route
app.use('/', webRoutes)

// config view template
configViewEngine(app)

app.listen(port, () => {
    console.log(`litsening on port ${port}`)
})