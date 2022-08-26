//Recipe controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getRecipe: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await
            RecipesArticle.find()
            res.render('recipe.ejs', {recipe: recipes, idArticle: id})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    } 

}