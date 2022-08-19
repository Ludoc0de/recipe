//Login controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getLogin: (req, res) => {
        res.render('login.ejs')
    }
}