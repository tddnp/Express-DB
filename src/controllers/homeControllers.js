const connection = require('../config/dataBase')
const { getAllUser } = require('../services/crudService')

const getHomePage = async (req, res) => {
    let user = await getAllUser()
    res.render('./home.ejs', { user: user })
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