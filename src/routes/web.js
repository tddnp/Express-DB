const express = require('express')
const router = express.Router()
const {
    getCreateUserForm,
    getHomePage,
    postCreateUser,
    getEditUserForm,
    postEditUserForm,
    deleteUser
} = require('../controllers/homeControllers')

router.get('/home-page', getHomePage)

router.get('/createUserForm', getCreateUserForm)
router.post('/create-user', postCreateUser)

router.get('/edit/:id', getEditUserForm)
router.post('/update-user/', postEditUserForm)

router.get('/delete-user/:id', deleteUser)

module.exports = router