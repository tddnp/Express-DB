const express = require("express")
const path = require('path')
require('dotenv').config()
const connection = require('./config/dataBase')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8081

// config
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

// config view template
configViewEngine(app);

// config route
app.use('/', webRoutes);

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('kitten', kittySchema);
const silence = new Kitten({ name: 'silence' });

silence.save();

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

