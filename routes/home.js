//Get request home
//Post artile

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//
router.get('/', homeController.getIndex)
//router.post('/add', homeController.creatArticle)

module.exports = router