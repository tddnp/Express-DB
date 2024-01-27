const connection = require('../config/dataBase')

const getAllUser = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users`)
    return results
}

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.query(`
        INSERT INTO 
            Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    )
    return results
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [id])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUser = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE
            Users
        SET
            email = ?, 
            name = ?,
            city = ?
        WHERE 
            id = ?`,
        [email, name, city, id]
    )
    return results
}

const deleteUserFromDB = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM
            Users
        WHERE
            id = ?`,
        [id]
    )
    return
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUserFromDB
}