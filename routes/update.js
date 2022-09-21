//Updates routes

const express = require('express')
const router = express.Router()
//upload image
const upload = require("../middleware/multer");
const updateController = require('../controllers/update')
//secure updates routes
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/:id', userAuth, updateController.getUpdate)
//router.post('/:id',  upload.array("file"), updateController.updateArticle)
router.put('/:id',  upload.array("file"), updateController.updateArticle)
router.get('/remove/:id',updateController.deleteArticle)

module.exports = router