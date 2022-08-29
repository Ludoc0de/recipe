//Updates routes

const express = require('express')
const router = express.Router()
const updateController = require('../controllers/update')
//secure updates routes
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/:id', userAuth, updateController.getUpdate)
router.post('/:id', updateController.updateArticle)
router.get('/remove/:id',updateController.deleteArticle)

module.exports = router