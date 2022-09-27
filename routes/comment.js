//comment routes
const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

//Route to the controllers
router.get('/',  commentController.getComment)
router.post('/',  commentController.comment)

module.exports = router