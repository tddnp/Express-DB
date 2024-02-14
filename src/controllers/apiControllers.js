//const connection = require('../config/dataBase')
const { getAllUser, getUserById, createUser, updateUser, deleteUserFromDB } = require('../services/crudService')
const User = require('../models/user')

const getAllUsersApi = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

module.exports = {
    getAllUsersApi
}

