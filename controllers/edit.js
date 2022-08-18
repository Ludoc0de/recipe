//Edit controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await
            RecipesArticle.find()
            res.render('edit.ejs', {recipe: recipes, idArticle: id})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    } 
    // getEdit: (req, res) => {
    //     const id = req.params.id;
    //     console.log(id)
    //     RecipesArticle.find({}, (err, recipes) => {
    //         res.render('edit.ejs', {recipe: recipes, idArticle: id})
    //     })
    // } 

    // createArticle: async (req, res)=>{
    //     const recipe = new RecipesArticle(
    //         { 
    //             title: req.body.title, 
    //             article:req.body.article
    //         })
    //     try {
    //             await recipe.save();
    //             console.log(recipe)
    //             res.redirect('/')
    //     } catch (error) {
    //         if(error) return res.status(500).send(error);
    //         res.redirect('/');
    //     }
    // }

}