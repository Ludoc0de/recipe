const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getIndex: (req, res) => {
        RecipesArticle.find()
            .then(results =>{
                res.render('index.ejs', {food: results})
            })
            .catch(error => console.error(error))
    }
}