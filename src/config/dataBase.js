require('dotenv').config()
const mongoose = require('mongoose')

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })

const dbState = [
    {
        value: 0,
        lable: "diconnected"
    },
    {
        value: 1,
        lable: 'connected'
    },
    {
        value: 2,
        lable: 'connecting'
    }
]

const connection = async () => {
    try {
        const option = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD
        }
        await mongoose.connect(process.env.DB_HOST, option)
        const state = Number(mongoose.connection.readyState)
        console.log(dbState.find(f => f.value == state).lable, 'to db')
    } catch (error) {
        console.log('Error db connection:', error)
    }
}

module.exports = connection