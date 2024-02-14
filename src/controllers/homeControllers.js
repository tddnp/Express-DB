const connection = require('../config/dataBase')
const { getAllUser, getUserById, createUser, updateUser, deleteUserFromDB } = require('../services/crudService')
const User = require('../models/user')

const getHomePage = async (req, res) => {
    //let user = await getAllUser()
    let results = await User.find({})
    return res.render('./home.ejs', { user: results })
}

const getCreateUserForm = (req, res) => {
    res.render('./createUserForm')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    await User.create({
        email: email,
        name: name,
        city: city
    })

    res.send(`create user ${name} successfully`)
}

const getEditUserForm = async (req, res) => {
    id = req.params.id
    // let user = await getUserById(id)
    let user = await User.findById(id).exec()
    res.render('./editUser.ejs', { user: user })
}

const postEditUserForm = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let id = req.body.id
    //await updateUser(email, name, city, id)
    await User.updateOne(
        {
            _id: id
        },
        {
            email: email,
            name: name,
            city: city
        }
    )
    res.redirect('/home-page')
}

const deleteUser = async (req, res) => {
    let id = req.params.id
    await deleteUserFromDB(id)
    res.redirect('/home-page')
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUserForm,
    getEditUserForm,
    postEditUserForm,
    deleteUser
}