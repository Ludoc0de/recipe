//Edit routes
const express = require('express')
const router = express.Router()
//upload image
const upload = require("../middleware/multer");
const editController = require('../controllers/edit')
//secure edit route
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/', userAuth, editController.getEdit)
//upload one or more images
router.post('/', upload.array("file"), editController.createArticle)

module.exports = router