//Routes home
//Get request home

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const { ensureGuest } = require('../middleware/auth')

//Route to the controllers
router.get('/', ensureGuest, homeController.getIndex)

module.exports = router