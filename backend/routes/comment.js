//comment routes
const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

//Route to the controllers
router.post('/:id',  commentController.comment)

module.exports = router