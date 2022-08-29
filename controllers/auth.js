//Auth controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    //go to edit after login
    editConnect: (req,res) => {
        res.redirect('/edit')
    },
    //logout
    logout: (req,res) => {
        req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
        });
    }
}