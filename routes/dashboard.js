//dashboard routes
const express = require('express')
const router = express.Router()
//upload image
const upload = require("../middleware/multer");
const dashboardController = require('../controllers/dashboard')
//secure dashboard route
const { userAuth } = require('../middleware/auth')

//Route to the controllers
router.get('/', userAuth, dashboardController.getDashboard)
//upload one or more images
router.post('/', upload.array("file"), dashboardController.createArticle)

module.exports = router