//Recipe controllers to models
const RecipesArticle = require('../models/recipesArticle')
const UserComment = require('../models/comment')

module.exports = {
    //Display recipe/id
    getRecipe: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await RecipesArticle.find();
            //get comments from the recipe id
            const comments = await UserComment.find({recipes: id});
            res.render('recipe.ejs', {recipe: recipes, idArticle: id, comment: comments})
            // recipe, idArticle data from mongodb
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    }
}