const express = require('express')
const router = express.Router()
const { getCreateUserForm, getHomePage, postCreateUser } = require('../controllers/homeControllers')

router.get('/home-page', getHomePage)

router.get('/createUserForm', getCreateUserForm)
router.post('/create-user', postCreateUser)

module.exports = router