const connection = require('../config/dataBase')

const getDemo = (req, res) => {
    connection.query(
        'SELECT * FROM Users',
        function (err, result, fields) {
            user = result
            res.send(JSON.stringify(user))
        }
    )
}

const getHomePage = (req, res) => {
    res.render('./home.ejs')
}

const postCreateUser = (req, res) => {
    let email = req.body.email
    let name = req.body.password
    let city = req.body.city
    connection.query(
        `INSERT INTO 
            Users 
                (email, name, city) 
            VALUES 
                (?, ?, ?)`,
        [email, name, city],
        function (err, result) {
            if (err) {
                res.send('Check your statment')
                console.log(err)
            }
        }
    )
}

module.exports = {
    getHomePage,
    getDemo,
    postCreateUser
}