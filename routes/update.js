//Routes put

const express = require('express')
const router = express.Router()
const putController = require('../controllers/update')

//Route to the controllers
router.get('/:id', putController.getUpdate)
router.put('/:id', putController.updateArticle)
// router.post('/:id', putController.postPut)

module.exports = router