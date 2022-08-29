//Auth controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    editConnect: (req,res) => {
        res.redirect('/edit')
    },
    logout: (req,res) => {
        req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
        });
    }
}