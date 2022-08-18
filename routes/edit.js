//Routes edit
//Get request home
//Post artile

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

//Route to the controllers
router.get('/:id', editController.getEdit)
// router.post('/', editController)

module.exports = router