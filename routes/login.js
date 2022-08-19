//Routes login

const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login')

//Route to the controllers
router.get('/', loginController.getLogin)

module.exports = router