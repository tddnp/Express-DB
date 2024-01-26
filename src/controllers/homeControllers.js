const connection = require('../config/dataBase')

const getHomePage = async (req, res) => {
    let [result, field] = await connection.query(
        `SELECT * FROM Users`
    )
    res.render('./home.ejs', result)
    console.log(result)
}

const getCreateUserForm = (req, res) => {
    res.render('./createUserForm')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    let [result, field] = await connection.query(
        `INSERT INTO
            Users (email, name, city)
            VALUES (?, ?, ?)
        `, [email, name, city]
    )
    res.send(`create user ${name} successfully`)
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUserForm
}