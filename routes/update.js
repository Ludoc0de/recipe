//Routes put

const express = require('express')
const router = express.Router()
const updateController = require('../controllers/update')
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/:id', userAuth, updateController.getUpdate)
router.post('/:id', updateController.updateArticle)
router.get('/remove/:id',updateController.deleteArticle)
// router.post('/:id', putController.postPut)

module.exports = router