// Home controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    // Display all recipes
    getIndex: async (req, res) => {
        try{
            const recipes = await RecipesArticle.find()
            res.render('index.ejs', {recipe: recipes})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    }

}