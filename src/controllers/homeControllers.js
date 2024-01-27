const connection = require('../config/dataBase')
const { getAllUser, getUserById, createUser, updateUser } = require('../services/crudService')

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

    await createUser(email, name, city)

    res.send(`create user ${name} successfully`)
}

const getEditUserForm = async (req, res) => {
    id = req.params.id
    let user = await getUserById(id)
    res.render('./editUser.ejs', { user: user })
}

const postEditUserForm = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let id = req.body.id
    await updateUser(email, name, city, id)
    res.redirect('/home-page')
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUserForm,
    getEditUserForm,
    postEditUserForm
}