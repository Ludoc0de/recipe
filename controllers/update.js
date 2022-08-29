//Put controllers to models
const recipesArticle = require('../models/recipesArticle');
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    // Display id recipe
    getUpdate: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await
            RecipesArticle.find()
            res.render('update.ejs', {recipe: recipes, idArticle: id})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Update recipe title, article
    updateArticle: (req, res)=>{
       const id = req.params.id;
        RecipesArticle.findByIdAndUpdate(id,
            {
                title: req.body.title,
                article: req.body.article
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/edit");
            });
    },
    //Delete recipe
    deleteArticle: (req, res) => {
        const id = req.params.id;
        RecipesArticle.findByIdAndRemove(
            id, err => {
            if (err) return res.send(500, err);
            res.redirect("/edit");
        });
    }
}