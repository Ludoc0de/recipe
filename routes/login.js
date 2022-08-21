//Routes login

const express = require('express')
const router = express.Router()

//Route to the controllers
router.get('/', (req, res) => {
        res.render('login.ejs')
    }
)

module.exports = router