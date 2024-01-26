const express = require('express')
const router = express.Router()
const { getDemo, getHomePage, postCreateUser } = require('../controllers/homeControllers')

router.get('/', getDemo)
router.get('/home-page', getHomePage)

router.post('/create-user', postCreateUser)

module.exports = router