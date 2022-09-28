// Home controllers to models
const RecipesArticle = require('../models/recipesArticle')
const UserComment = require('../models/comment')

module.exports = {
    // Display all recipes
    getIndex: async (req, res) => {
        try{
            const recipes = await RecipesArticle.find({ status: "public"})
            res.render('index.ejs', {recipe: recipes})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Display recipe/id
    getRecipe: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await RecipesArticle.find();
            //get comments from the recipe id
            const comments = await UserComment.find({recipe: id});
            res.render('recipe.ejs', {recipe: recipes, idRecipe: id, comment: comments})
            // idRecipe = id from recipeArticle id 
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    }

}