//Edit routes
const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')
//secure edit route
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/', userAuth, editController.getEdit)
router.post('/', editController.createArticle)

module.exports = router