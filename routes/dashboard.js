//dashboard routes
const express = require('express');
const router = express.Router();
//upload image
const upload = require("../middleware/multer");
const dashboardController = require('../controllers/dashboard');
//secure dashboard route
const { userAuth } = require('../middleware/auth');

//Route to the controllers
router.get('/', userAuth, dashboardController.getDashboard);
//upload one or more images
router.post('/', upload.array("file"), dashboardController.createArticle);

//update articles
router.get('/update/:id', userAuth, dashboardController.getUpdate);
router.post('/update/:id',  upload.array("file", 16), dashboardController.updateArticle);
router.get('/update/remove/:id',dashboardController.deleteArticle);

//update coments
router.post('/updateComments/:id', dashboardController.updateComments);

module.exports = router