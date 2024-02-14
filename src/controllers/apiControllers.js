//const connection = require('../config/dataBase')
const User = require('../models/user')

const getAllUsersApi = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const createUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let result = await User.create(
        { email, name, city }
    )

    return res.status(200).json(
        {
            errorCode: 200,
            data: result
        }
    )
}

module.exports = {
    getAllUsersApi,
    createUser
}

