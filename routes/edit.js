//Routes edit
//Get request home
//Post artile

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/', userAuth, editController.getEdit)
router.post('/', editController.createArticle)
// router.post('/', editController)

module.exports = router