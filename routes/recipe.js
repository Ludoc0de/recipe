//Recipe routes
const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

//Route to the controllers
router.get('/:id', recipeController.getRecipe)

module.exports = router