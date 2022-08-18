//Routes home
//Get request home
//Post artile

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//Route to the controllers
router.get('/', homeController.getIndex)
router.post('/', homeController.createArticle)

module.exports = router