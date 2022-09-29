//Home routes
const express = require('express')
const passport = require('passport')
const router = express.Router()
const homeController = require('../controllers/home')
//if login, stay on edit page
// const { ensureGuest } = require('../middleware/auth')

//Route to the controllers
// router.get('/', ensureGuest, homeController.getIndex)
router.get('/', homeController.getIndex);
router.get('/recipe/:id', homeController.getRecipe);

//Auth
//Auth with Google
//GET /auth/google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile']}))

//Google auth callback
//GET /auth/google/callback
router.get('/auth/google/callback', 
    passport.authenticate('google', {failureRedirect: '/'}), homeController.dashboardConnect)

//Logout User
//route /auth/logout
router.get('/auth/logout', homeController.logout)

module.exports = router