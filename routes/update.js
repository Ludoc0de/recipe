//Routes put

const express = require('express')
const router = express.Router()
const updateController = require('../controllers/update')

//Route to the controllers
router.get('/:id', updateController.getUpdate)
router.put('/:id', updateController.updateArticle)
router.get('/remove/:id',updateController.deleteArticle)
// router.post('/:id', putController.postPut)

module.exports = router