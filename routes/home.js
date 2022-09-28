//Home routes
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
//if login, stay on edit page
// const { ensureGuest } = require('../middleware/auth')

//Route to the controllers
// router.get('/', ensureGuest, homeController.getIndex)
router.get('/', homeController.getIndex);
router.get('/recipe/:id', homeController.getRecipe);

module.exports = router