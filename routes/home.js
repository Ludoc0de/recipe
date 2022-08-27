//Routes home
//Get request home

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//Route to the controllers
router.get('/', homeController.getIndex)

module.exports = router