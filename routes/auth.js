//Auth routes
const express = require('express')
const passport = require('passport')
const router = express.Router()
const authController = require('../controllers/auth')

//Auth with Google
//GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))

//Google auth callback
//GET /auth/google/callback
router.get('/google/callback', 
    passport.authenticate('google', {failureRedirect: '/'}), authController.editConnect)

//Logout User
//route /auth/logout
router.get('/logout', authController.logout)

module.exports = router